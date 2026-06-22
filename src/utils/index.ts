import { DEVICE_CHARGE } from '@/constants/strings';
import { JACUZZI } from '@/constants/units';

export const formatAnimalCount = (animal: {
  type: { id: string; label: string };
  num: number;
}): string => {
  if (animal.type.id === 'sheep') return `${animal.num} sheep`;
  if (animal.num === 1) return `${animal.num} ${animal.type.label}`;
  return `${animal.num} ${animal.type.label}s`;
};

export const formatEnergyDisplay = (
  selectedEnergyDisplay: string,
  energy: { type: { label: string; id: string }; num: number },
): string => {
  const { num: numItems, type } = energy;
  const { label, id } = type;
  const isSingleItem = numItems === 1;
  const isJacuzzi = id === JACUZZI.id;

  if (selectedEnergyDisplay === DEVICE_CHARGE)
    return `${numItems} ${label} ${isSingleItem ? 'charge' : 'charges'}`;
  return `Heating ${numItems} ${label}${isSingleItem ? '' : 's'} ${isJacuzzi ? '' : 'of water'}`;
};

export const generateOffsets = (
  iconCount: number,
): { bottom: number; left: number; zIndex: number }[] => {
  const adjustedIconCount = Math.round(iconCount);
  return new Array(adjustedIconCount).fill(null).map((_, i) => ({
    bottom: i * 12,
    left: i * 16,
    zIndex: adjustedIconCount - i,
  }));
};
