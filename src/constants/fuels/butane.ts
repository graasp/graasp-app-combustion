import {
  BUCKET,
  ELECTRIC_BIKE,
  ELECTRIC_CAR,
  KILOGRAMS,
  MILK_COW,
  MOLES,
  SHEEP,
  TUB,
} from '../units';

export const BUTANE = {
  label: 'Butane',
  id: 'butane',
  isPureFuel: true,
  atomCount: { carbon: 4, hydrogen: 10 },
  [KILOGRAMS]: {
    energy: {
      value: -49518.24,
      charge: { type: ELECTRIC_CAR, num: 0.75 },
      water: { type: TUB, num: 3 },
    },
    oxygen: {
      value: 2737.6,
      animal: { type: MILK_COW, num: 2 },
      footballs: 497.7,
    },
    carbonDioxide: {
      value: 1684.8,
      animal: { type: MILK_COW, num: 1 },
      footballs: 306.3,
    },
  },
  [MOLES]: {
    energy: {
      value: -2878,
      charge: { type: ELECTRIC_BIKE, num: 2 },
      water: { type: BUCKET, num: 3 },
    },
    oxygen: {
      value: 159.1,
      animal: { type: SHEEP, num: 4 },
      footballs: 28.9,
    },
    carbonDioxide: {
      value: 97.9,
      animal: { type: SHEEP, num: 3 },
      footballs: 17.8,
    },
  },
};
