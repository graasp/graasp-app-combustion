import { DEFAULT_COEFFICIENTS } from '@/constants/chemistry';
import { Fuel } from '@/types';

export const computeCoefficients = (
  selectedFuel: Fuel,
): {
  oxygenCoefficient: number;
  carbonDioxideCoefficient: number;
  waterCoefficient: number;
} => {
  if (!selectedFuel) return DEFAULT_COEFFICIENTS;

  const { isPureFuel } = selectedFuel;

  if (!isPureFuel) return DEFAULT_COEFFICIENTS;

  const { atomCount } = selectedFuel;
  const { carbon, hydrogen, oxygen = 0 } = atomCount;

  const oxygenCoefficient = (2 * carbon + hydrogen / 2 - oxygen) / 2;
  const carbonDioxideCoefficient = carbon;
  const waterCoefficient = hydrogen / 2;

  return { oxygenCoefficient, carbonDioxideCoefficient, waterCoefficient };
};
