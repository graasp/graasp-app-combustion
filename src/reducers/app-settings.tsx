import { DEVICE_CHARGE } from '@/constants/strings';
import { KILOGRAMS } from '@/constants/units';
import { SET_ENERGY, SET_FUEL, SET_UNITS } from '@/types/app-settings';

export interface appSettingsType {
  fuel: string;
  units: string;
  energy: string;
}

export interface appSettingsActionType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const initialAppSettings = {
  fuel: '',
  units: KILOGRAMS,
  energy: DEVICE_CHARGE,
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
    case SET_ENERGY:
      return { ...state, energy: payload };
    default:
      return state;
  }
};
