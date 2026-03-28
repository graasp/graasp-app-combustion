import { useContext } from 'react';

import { t } from 'i18next';

import { setUnits } from '@/actions/app-settings';
import { KILOGRAMS, MOLES } from '@/constants/units';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import TwoSidedSwitch from './TwoSidedSwitch';

const UnitsSwitch = (): JSX.Element => {
  const { dispatch, state } = useContext(AppSettingsContext);
  const { units } = state;

  const handleToggle = (): void => {
    if (units === KILOGRAMS) dispatch(setUnits(MOLES));
    else dispatch(setUnits(KILOGRAMS));
  };

  return (
    <TwoSidedSwitch
      title="Units:"
      leftLabel="Kilograms"
      rightLabel={t('Moles')}
      isChecked={units === MOLES}
      setIsChecked={handleToggle}
    />
  );
};

export default UnitsSwitch;
