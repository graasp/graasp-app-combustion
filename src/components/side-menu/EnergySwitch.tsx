import { useContext } from 'react';

import { t } from 'i18next';

import { setEnergy } from '@/actions/app-settings';
import { DEVICE_CHARGE, HEATING_WATER } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import TwoSidedSwitch from './TwoSidedSwitch';

const EnergySwitch = (): JSX.Element => {
  const { dispatch, state } = useContext(AppSettingsContext);
  const { energy } = state;

  const handleToggle = (): void => {
    if (energy === DEVICE_CHARGE) dispatch(setEnergy(HEATING_WATER));
    else dispatch(setEnergy(DEVICE_CHARGE));
  };

  return (
    <TwoSidedSwitch
      title={t('Indicate energy in:')}
      leftLabel={t('Device charges')}
      rightLabel={t('Heating water (20°C → 40°C)')}
      isChecked={energy === HEATING_WATER}
      setIsChecked={handleToggle}
    />
  );
};

export default EnergySwitch;
