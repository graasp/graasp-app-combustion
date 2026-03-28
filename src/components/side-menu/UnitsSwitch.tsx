import { useContext } from 'react';

import { t } from 'i18next';

import { setUnits } from '@/actions/app-settings';
import { FUELS } from '@/constants/chemistry';
import { KILOGRAMS, MOLES } from '@/constants/units';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import TwoSidedSwitch from './TwoSidedSwitch';

const UnitsSwitch = (): JSX.Element => {
  const { dispatch, state } = useContext(AppSettingsContext);
  const { fuel: selectedFuel, units } = state;

  const selectedFuelObj = FUELS.find((fuel) => fuel.id === selectedFuel);

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
      disabled={!!selectedFuel && !selectedFuelObj?.isPureFuel}
    />
  );
};

export default UnitsSwitch;
