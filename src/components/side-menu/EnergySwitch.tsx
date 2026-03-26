import { useState } from 'react';

import { t } from 'i18next';

import TwoSidedSwitch from './TwoSidedSwitch';

const EnergySwitch = (): JSX.Element => {
  const [energy, setEnergy] = useState<'light' | 'charge'>('light');

  const handleToggle = (): void => {
    if (energy === 'light') setEnergy('charge');
    else setEnergy('light');
  };

  return (
    <TwoSidedSwitch
      title={t('Indicate energy in:')}
      leftLabel={t('Types of light')}
      rightLabel={t('Smartphones')}
      isChecked={energy === 'charge'}
      setIsChecked={handleToggle}
    />
  );
};

export default EnergySwitch;
