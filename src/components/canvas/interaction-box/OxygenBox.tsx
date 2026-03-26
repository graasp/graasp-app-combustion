import { Air, SportsSoccer } from '@mui/icons-material';

import InteractionBox from './InteractionBox';

const OxygenBox = (): JSX.Element => (
  <InteractionBox
    icon={<Air sx={{ color: '#006F0D' }} />}
    mainText={
      <>
        VOLUME OF O<sub>2</sub> NEEDED
      </>
    }
    subText={
      <>
        V<sub>O2</sub> [L]
      </>
    }
    value={2.4}
    secondaryIcon={<SportsSoccer sx={{ color: '#273b47' }} />}
    secondaryText="1250 footballs"
    secondaryTextColor="#273b47"
  />
);

export default OxygenBox;
