export const FUELS = [
  {
    label: 'Methane',
    id: 'methane',
    isPureFuel: true,
    atomCount: { carbon: 1, hydrogen: 4 },
  },
  {
    label: 'Ethanol',
    id: 'ethanol',
    isPureFuel: true,
    atomCount: { carbon: 2, hydrogen: 6, oxygen: 1 },
  },
  {
    label: 'Propane',
    id: 'propane',
    isPureFuel: true,
    atomCount: { carbon: 3, hydrogen: 8 },
  },
  {
    label: 'Butane',
    id: 'butane',
    isPureFuel: true,
    atomCount: { carbon: 4, hydrogen: 10 },
  },
  {
    label: 'Octane',
    id: 'octane',
    isPureFuel: true,
    atomCount: { carbon: 8, hydrogen: 18 },
  },
  { label: 'Paraffin', id: 'paraffin', isPureFuel: false, emoji: '🕯️' },
  { label: 'Wood', id: 'wood', isPureFuel: false, emoji: '🪵' },
  { label: 'Kerosene', id: 'kerosene', isPureFuel: false, emoji: '🛢️' },
];

export const DEFAULT_COEFFICIENTS = {
  oxygenCoefficient: 0,
  carbonDioxideCoefficient: 0,
  waterCoefficient: 0,
};
