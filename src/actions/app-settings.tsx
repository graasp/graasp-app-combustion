import { appSettingsActionType } from '@/reducers/app-settings';
import { SET_DIMENSIONS } from '@/types/app-settings';

interface Dimensions {
  width: number;
  height: number;
}

export const setDimensions = (payload: Dimensions): appSettingsActionType => ({
  type: SET_DIMENSIONS,
  payload,
});
