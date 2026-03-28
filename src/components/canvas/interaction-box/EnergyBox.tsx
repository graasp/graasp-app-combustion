import { useContext } from 'react';

import { BatteryChargingFull, Bolt } from '@mui/icons-material';

import { PRIMARY_BLUE } from '@/constants/css';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import InteractionBox from './InteractionBox';

const EnergyBox = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { units } = state;

  return (
    <InteractionBox
      icon={<Bolt sx={{ color: PRIMARY_BLUE }} />}
      mainText="ENERGY OBTAINED"
      subText={
        <>
          ΔH<sub>comb</sub> [kJ/{units}]
        </>
      }
      value={3.46}
      secondaryIcon={<BatteryChargingFull sx={{ color: '#006F0D' }} />}
      secondaryText="200 1-week phone charges"
      secondaryTextColor="#006F0D"
    />
  );
};

export default EnergyBox;
