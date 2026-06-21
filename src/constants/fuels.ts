import { BUTANE } from './fuels/butane';
import { ETHANOL } from './fuels/ethanol';
import { HYDROGEN } from './fuels/hydrogen';
import { METHANE } from './fuels/methane';
import { OCTANE } from './fuels/octane';
import { PROPANE } from './fuels/propane';

export const FUELS = [
  HYDROGEN,
  METHANE,
  ETHANOL,
  PROPANE,
  BUTANE,
  OCTANE,
  // {
  //   label: 'Candle',
  //   id: 'candle',
  //   isPureFuel: false,
  //   emoji: '🕯️',
  //   [KILOGRAMS]: { energy: -35664.11, volumeO2: 2678.6, volumeCo2: 1714.5 },
  // },
  // {
  //   label: 'Wood',
  //   id: 'wood',
  //   isPureFuel: false,
  //   emoji: '🪵',
  //   [KILOGRAMS]: { energy: -36654.11, volumeO2: 2678.6, volumeCo2: 1714.5 },
  // },
  // {
  //   label: 'Kerosene',
  //   id: 'kerosene',
  //   isPureFuel: false,
  //   emoji: '🛢️',
  //   [KILOGRAMS]: { energy: -36654.11, volumeO2: 2678.6, volumeCo2: 1714.5 },
  // },
];

export const DEFAULT_COEFFICIENTS = {
  oxygenCoefficient: 0,
  carbonDioxideCoefficient: 0,
  waterCoefficient: 0,
};
