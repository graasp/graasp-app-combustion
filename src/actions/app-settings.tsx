import { appSettingsActionType } from '@/reducers/app-settings';
import { SET_FUEL } from '@/types/app-settings';

export const setFuel = (payload: string): appSettingsActionType => ({
  type: SET_FUEL,
  payload,
});
