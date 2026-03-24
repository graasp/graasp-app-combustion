import { SET_DIMENSIONS } from '../types/app-settings';

type Dimensions = {
  width: number;
  height: number;
};
export interface appSettingsType {
  dimensions: Dimensions;
}

export interface appSettingsActionType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const initialAppSettings = {
  dimensions: { width: 0, height: 0 },
};

export const appSettingsReducer = (
  state: appSettingsType,
  action: appSettingsActionType,
): appSettingsType => {
  const { type, payload } = action;
  switch (type) {
    case SET_DIMENSIONS:
      return { ...state, dimensions: payload };
    default:
      return state;
  }
};
