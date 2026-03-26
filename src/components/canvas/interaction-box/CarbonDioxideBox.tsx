import { Co2, SportsSoccer } from '@mui/icons-material';

import InteractionBox from './InteractionBox';

const CarbonDioxideBox = (): JSX.Element => (
  <InteractionBox
    icon={<Co2 sx={{ color: '#00687e' }} />}
    mainText={
      <>
        VOLUME OF CO<sub>2</sub> PRODUCED
      </>
    }
    subText={
      <>
        V<sub>CO2</sub> [L]
      </>
    }
    value={7.89}
    secondaryIcon={<SportsSoccer sx={{ color: '#ab2f2f' }} />}
    secondaryText="5950 footballs"
    secondaryTextColor="#ab2f2f"
  />
);

export default CarbonDioxideBox;
