import { useState } from 'react';

import { t } from 'i18next';

import TwoSidedSwitch from './TwoSidedSwitch';

const EnergySwitch = (): JSX.Element => {
  const [energy, setEnergy] = useState<'devices' | 'water'>('devices');

  const handleToggle = (): void => {
    if (energy === 'devices') setEnergy('water');
    else setEnergy('devices');
  };

  return (
    <TwoSidedSwitch
      title={t('Indicate energy in:')}
      leftLabel={t('Device charges')}
      rightLabel={t('Heating water')}
      isChecked={energy === 'water'}
      setIsChecked={handleToggle}
    />
  );
};

export default EnergySwitch;
