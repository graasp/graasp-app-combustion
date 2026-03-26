import { BatteryChargingFull, Bolt } from '@mui/icons-material';

import { PRIMARY_BLUE } from '@/constants/css';

import InteractionBox from './InteractionBox';

const EnergyBox = (): JSX.Element => (
  <InteractionBox
    icon={<Bolt sx={{ color: PRIMARY_BLUE }} />}
    mainText="ENERGY OBTAINED"
    subText={
      <>
        ΔH<sub>comb</sub> [kJ/mol]
      </>
    }
    value={3.46}
    secondaryIcon={<BatteryChargingFull sx={{ color: '#006F0D' }} />}
    secondaryText="200 phone charges"
    secondaryTextColor="#006F0D"
  />
);

export default EnergyBox;
