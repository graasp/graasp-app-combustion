import {
  CAT,
  ELECTRIC_CAR,
  ELEPHANT,
  JACUZZI,
  KETTLE,
  KILOGRAMS,
  MOLES,
  SMARTPHONE,
} from '../units';

export const HYDROGEN = {
  label: 'Hydrogen',
  id: 'hydrogen',
  isPureFuel: true,
  atomCount: { carbon: 0, hydrogen: 1, oxygen: 0.5 },
  [KILOGRAMS]: {
    energy: {
      value: -141584.16,
      charge: { type: ELECTRIC_CAR, num: 2 },
      water: { type: JACUZZI, num: 2 },
    },
    oxygen: {
      value: 6058.9,
      animal: { type: ELEPHANT, num: 2 },
      footballs: 1101.63,
    },
    carbonDioxide: {
      value: 0,
      animal: { type: { label: '', id: '' }, num: 0 },
      footballs: 0,
    },
  },
  [MOLES]: {
    energy: {
      value: -286,
      charge: { type: SMARTPHONE, num: 4 },
      water: { type: KETTLE, num: 2 },
    },
    oxygen: {
      value: 12.2,
      animal: { type: CAT, num: 2 },
      footballs: 2.23,
    },
    carbonDioxide: {
      value: 0,
      animal: { type: { label: '', id: '' }, num: 0 },
      footballs: 0,
    },
  },
};
