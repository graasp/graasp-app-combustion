import {
  BUCKET,
  ELECTRIC_BIKE,
  ELECTRIC_CAR,
  HORSE,
  KILOGRAMS,
  MILK_COW,
  MOLES,
  PIG,
  TUB,
} from '../units';

export const OCTANE = {
  label: 'Octane',
  id: 'octane',
  isPureFuel: true,
  atomCount: { carbon: 8, hydrogen: 18 },
  [KILOGRAMS]: {
    energy: {
      value: -47833.32,
      charge: { type: ELECTRIC_CAR, num: 0.75 },
      water: { type: TUB, num: 3 },
    },
    oxygen: {
      value: 2678.6,
      animal: { type: MILK_COW, num: 2 },
      footballs: 487.0,
    },
    carbonDioxide: {
      value: 1714.5,
      animal: { type: MILK_COW, num: 1 },
      footballs: 311.72,
    },
  },
  [MOLES]: {
    energy: {
      value: -5464,
      charge: { type: ELECTRIC_BIKE, num: 3 },
      water: { type: BUCKET, num: 5 },
    },
    oxygen: {
      value: 306.0,
      animal: { type: HORSE, num: 1 },
      footballs: 55.63,
    },
    carbonDioxide: {
      value: 195.8,
      animal: { type: PIG, num: 1 },
      footballs: 35.6,
    },
  },
};
