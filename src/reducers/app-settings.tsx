export interface appSettingsType {
  placeholder: string;
}

export interface appSettingsActionType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const initialAppSettings = {
  placeholder: 'placeholder',
};

export const appSettingsReducer = (
  state: appSettingsType,
  action: appSettingsActionType,
): appSettingsType => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
