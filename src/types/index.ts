import { KILOGRAMS, MOLES } from '@/constants/units';

export interface GasObjectType {
  value: number;
  animal: { type: { label: string; id: string }; num: number };
  footballs: number;
}

export interface EnergyObjectType {
  value: number;
  charge: { type: { label: string; id: string }; num: number };
  water: { type: { label: string; id: string }; num: number };
}

export interface Fuel {
  label: string;
  id: string;
  emoji?: string;
  isPureFuel: boolean;
  atomCount: {
    carbon: number;
    hydrogen: number;
    oxygen?: number;
  };
  [KILOGRAMS]: {
    energy: EnergyObjectType;
    oxygen: GasObjectType;
    carbonDioxide: GasObjectType;
  };
  [MOLES]?: {
    energy: EnergyObjectType;
    oxygen: GasObjectType;
    carbonDioxide: GasObjectType;
  };
}

// label: 'Propane',
// id: 'propane',
// isPureFuel: true,
// atomCount: { carbon: 3, hydrogen: 8 },
// [KILOGRAMS]: {
//   energy: {
//     value: -48049.89,
//     charge: { type: ELECTRIC_CAR, num: 0.75 },
//     water: { type: TUB, num: 3 },
//   },
//   oxygen: {
//     value: 2775.3,
//     animal: { type: MILK_COW, num: 2 },
//     footballs: 504.6,
//   },
//   carbonDioxide: {
//     value: 1665.3,
//     animal: { type: MILK_COW, num: 1 },
//     footballs: 302.8,
//   },
// },
