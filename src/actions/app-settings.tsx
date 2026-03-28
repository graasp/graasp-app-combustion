import { appSettingsActionType } from '@/reducers/app-settings';
import { SET_FUEL, SET_UNITS } from '@/types/app-settings';

export const setFuel = (payload: string): appSettingsActionType => ({
  type: SET_FUEL,
  payload,
});

export const setUnits = (payload: string): appSettingsActionType => ({
  type: SET_UNITS,
  payload,
});
