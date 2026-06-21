import {
  BUCKET,
  DONKEY,
  ELECTRIC_BIKE,
  ELECTRIC_CAR,
  KILOGRAMS,
  MILK_COW,
  MOLES,
  SHEEP,
  TUB,
} from '../units';

export const ETHANOL = {
  label: 'Ethanol',
  id: 'ethanol',
  isPureFuel: true,
  atomCount: { carbon: 2, hydrogen: 6, oxygen: 1 },
  [KILOGRAMS]: {
    energy: {
      value: -29672.24,
      charge: { type: ELECTRIC_CAR, num: 0.5 },
      water: { type: TUB, num: 2 },
    },
    oxygen: {
      value: 1594.0,
      animal: { type: MILK_COW, num: 1 },
      footballs: 289.81,
    },
    carbonDioxide: {
      value: 1062.8,
      animal: { type: DONKEY, num: 3 },
      footballs: 193.2,
    },
  },
  [MOLES]: {
    energy: {
      value: -1367,
      charge: { type: ELECTRIC_BIKE, num: 1 },
      water: { type: BUCKET, num: 1.5 },
    },
    oxygen: {
      value: 73.4,
      animal: { type: SHEEP, num: 3 },
      footballs: 13.35,
    },
    carbonDioxide: {
      value: 49.0,
      animal: { type: SHEEP, num: 2 },
      footballs: 8.9,
    },
  },
};
