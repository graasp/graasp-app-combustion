import { useState } from 'react';

import { t } from 'i18next';

import TwoSidedSwitch from './TwoSidedSwitch';

const UnitsSwitch = (): JSX.Element => {
  const [units, setUnits] = useState<'kg' | 'mol'>('kg');

  const handleToggle = (): void => {
    if (units === 'kg') setUnits('mol');
    else setUnits('kg');
  };

  return (
    <TwoSidedSwitch
      title="Units:"
      leftLabel="Kilograms"
      rightLabel={t('Moles')}
      isChecked={units === 'mol'}
      setIsChecked={handleToggle}
    />
  );
};

export default UnitsSwitch;
