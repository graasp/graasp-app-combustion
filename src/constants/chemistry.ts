import { KILOGRAMS, MOLES } from './units';

export const FUELS = [
  {
    label: 'Methane',
    id: 'methane',
    isPureFuel: true,
    atomCount: { carbon: 1, hydrogen: 4 },
    [KILOGRAMS]: { energy: -55514.02, volumeO2: 3050.2, volumeCo2: 1525.3 },
    [MOLES]: { energy: -891, volumeO2: 49.0, volumeCo2: 24.5 },
    footballs: { o2: 554.6, co2: 277.3 },
  },
  {
    label: 'Ethanol',
    id: 'ethanol',
    isPureFuel: true,
    atomCount: { carbon: 2, hydrogen: 6, oxygen: 1 },
    [KILOGRAMS]: { energy: -29672.24, volumeO2: 1594.0, volumeCo2: 1062.8 },
    [MOLES]: { energy: -1367, volumeO2: 73.4, volumeCo2: 49.0 },
    footballs: { o2: 289.8, co2: 193.2 },
  },
  {
    label: 'Propane',
    id: 'propane',
    isPureFuel: true,
    atomCount: { carbon: 3, hydrogen: 8 },
    [KILOGRAMS]: { energy: -48049.89, volumeO2: 2775.3, volumeCo2: 1665.3 },
    [MOLES]: { energy: -2119, volumeO2: 122.4, volumeCo2: 73.4 },
    footballs: { o2: 504.6, co2: 302.8 },
  },
  {
    label: 'Butane',
    id: 'butane',
    isPureFuel: true,
    atomCount: { carbon: 4, hydrogen: 10 },
    [KILOGRAMS]: { energy: -49518.24, volumeO2: 2737.6, volumeCo2: 1684.8 },
    [MOLES]: { energy: -2878, volumeO2: 159.1, volumeCo2: 97.9 },
    footballs: { o2: 497.7, co2: 306.3 },
  },
  {
    label: 'Octane',
    id: 'octane',
    isPureFuel: true,
    atomCount: { carbon: 8, hydrogen: 18 },
    [KILOGRAMS]: { energy: -47833.32, volumeO2: 2678.6, volumeCo2: 1714.5 },
    [MOLES]: { energy: -5464, volumeO2: 306.0, volumeCo2: 195.8 },
    footballs: { o2: 487.0, co2: 311.7 },
  },
  {
    label: 'Stearin',
    id: 'stearin',
    isPureFuel: true,
    atomCount: { carbon: 57, hydrogen: 110, oxygen: 6 },
    [KILOGRAMS]: { energy: -36664.11, volumeO2: 2678.6, volumeCo2: 1714.5 },
    [MOLES]: { energy: -5464, volumeO2: 306.0, volumeCo2: 195.8 },
  },
  {
    label: 'Paraffin',
    id: 'paraffin',
    isPureFuel: false,
    emoji: '🕯️',
    [KILOGRAMS]: { energy: -35664.11, volumeO2: 2678.6, volumeCo2: 1714.5 },
  },
  {
    label: 'Wood',
    id: 'wood',
    isPureFuel: false,
    emoji: '🪵',
    [KILOGRAMS]: { energy: -36654.11, volumeO2: 2678.6, volumeCo2: 1714.5 },
  },
  {
    label: 'Kerosene',
    id: 'kerosene',
    isPureFuel: false,
    emoji: '🛢️',
    [KILOGRAMS]: { energy: -36654.11, volumeO2: 2678.6, volumeCo2: 1714.5 },
  },
];

export const DEFAULT_COEFFICIENTS = {
  oxygenCoefficient: 0,
  carbonDioxideCoefficient: 0,
  waterCoefficient: 0,
};
