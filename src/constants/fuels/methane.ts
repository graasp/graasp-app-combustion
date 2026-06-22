import {
  BUCKET,
  CAT,
  ELECTRIC_CAR,
  ELEPHANT,
  KILOGRAMS,
  MILK_COW,
  MOLES,
  SHEEP,
  SMARTPHONE,
  TUB,
} from '../units';

export const METHANE = {
  label: 'Methane',
  id: 'methane',
  isPureFuel: true,
  atomCount: { carbon: 1, hydrogen: 4 },
  [KILOGRAMS]: {
    energy: {
      value: -55514.02,
      charge: { type: ELECTRIC_CAR, num: 0.75 },
      water: { type: TUB, num: 3.5 },
    },
    oxygen: {
      value: 3050.2,
      animal: { type: ELEPHANT, num: 1 },
      footballs: 554.59,
    },
    carbonDioxide: {
      value: 1525.3,
      animal: { type: MILK_COW, num: 1 },
      footballs: 277.32,
    },
  },
  [MOLES]: {
    energy: {
      value: -891,
      charge: { type: SMARTPHONE, num: 10 },
      water: { type: BUCKET, num: 1 },
    },
    oxygen: {
      value: 49.0,
      animal: { type: SHEEP, num: 2 },
      footballs: 8.9,
    },
    carbonDioxide: {
      value: 24.5,
      animal: { type: CAT, num: 4 },
      footballs: 4.45,
    },
  },
};
