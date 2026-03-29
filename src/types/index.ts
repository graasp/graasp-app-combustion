import { KILOGRAMS, MOLES } from '@/constants/units';

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
    energy: number;
    volumeO2: number;
    volumeCo2: number;
  };
  [MOLES]?: {
    energy: number;
    volumeO2: number;
    volumeCo2: number;
  };
}
