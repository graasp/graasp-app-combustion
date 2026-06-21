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

export const PROPANE = {
  label: 'Propane',
  id: 'propane',
  isPureFuel: true,
  atomCount: { carbon: 3, hydrogen: 8 },
  [KILOGRAMS]: {
    energy: {
      value: -48049.89,
      charge: { type: ELECTRIC_CAR, num: 0.75 },
      water: { type: TUB, num: 3 },
    },
    oxygen: {
      value: 2775.3,
      animal: { type: MILK_COW, num: 2 },
      footballs: 504.6,
    },
    carbonDioxide: {
      value: 1665.3,
      animal: { type: MILK_COW, num: 1 },
      footballs: 302.8,
    },
  },
  [MOLES]: {
    energy: {
      value: -2119,
      charge: { type: ELECTRIC_BIKE, num: 1.5 },
      water: { type: BUCKET, num: 2 },
    },
    oxygen: {
      value: 122.4,
      animal: { type: SHEEP, num: 4 },
      footballs: 22.25,
    },
    carbonDioxide: {
      value: 73.4,
      animal: { type: SHEEP, num: 3 },
      footballs: 13.35,
    },
  },
};
