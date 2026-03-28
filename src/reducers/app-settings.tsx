import { KILOGRAMS } from '@/constants/units';
import { SET_FUEL, SET_UNITS } from '@/types/app-settings';

export interface appSettingsType {
  fuel: string;
  units: string;
}

export interface appSettingsActionType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const initialAppSettings = {
  fuel: '',
  units: KILOGRAMS,
};

export const appSettingsReducer = (
  state: appSettingsType,
  action: appSettingsActionType,
): appSettingsType => {
  const { type, payload } = action;
  switch (type) {
    case SET_FUEL:
      return { ...state, fuel: payload };
    case SET_UNITS:
      return { ...state, units: payload };
    default:
      return state;
  }
};
