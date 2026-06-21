import { appSettingsActionType } from '@/reducers/app-settings';
import { SET_ENERGY, SET_FUEL, SET_UNITS } from '@/types/app-settings';

export const setFuel = (payload: string): appSettingsActionType => ({
  type: SET_FUEL,
  payload,
});

export const setUnits = (payload: string): appSettingsActionType => ({
  type: SET_UNITS,
  payload,
});

export const setEnergy = (payload: string): appSettingsActionType => ({
  type: SET_ENERGY,
  payload,
});
