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
}
