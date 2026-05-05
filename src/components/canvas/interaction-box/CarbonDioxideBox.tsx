import { Co2, SportsSoccer } from '@mui/icons-material';

import { CO2_RED } from '@/constants/css';
import { formatNumber } from '@/utils/chemistry';

import InteractionBox from './InteractionBox';

const CarbonDioxideBox = ({ value }: { value: number }): JSX.Element => (
  <InteractionBox
    icon={<Co2 sx={{ color: CO2_RED, fontSize: "2.2rem" }} />}
    mainText={
      <>
        VOLUME OF CO<sub>2</sub> PRODUCED
      </>
    }
    subText={
      <>
        V(CO<sub>2</sub>) = {formatNumber(value)} L
      </>
    }
    value={value}
    secondaryIcon={<SportsSoccer sx={{ color: CO2_RED }} />}
    secondaryText="5950 footballs"
    secondaryTextColor={CO2_RED}
  />
);

export default CarbonDioxideBox;
