import { SET_FUEL } from '@/types/app-settings';

export interface appSettingsType {
  fuel: string;
}

export interface appSettingsActionType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const initialAppSettings = {
  fuel: '',
};

export const appSettingsReducer = (
  state: appSettingsType,
  action: appSettingsActionType,
): appSettingsType => {
  const { type, payload } = action;
  switch (type) {
    case SET_FUEL:
      return { ...state, fuel: payload };
    default:
      return state;
  }
};
