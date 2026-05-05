import { useContext } from 'react';

import { BatteryChargingFull, Bolt } from '@mui/icons-material';

import { PRIMARY_BLUE } from '@/constants/css';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import InteractionBox from './InteractionBox';

const EnergyBox = ({ value }: { value: number }): JSX.Element => {
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
      value={value}
      secondaryIcon={<BatteryChargingFull sx={{ color: PRIMARY_BLUE }} />}
      secondaryText="200 1-week phone charges"
      secondaryTextColor={PRIMARY_BLUE}
    />
  );
};

export default EnergyBox;
