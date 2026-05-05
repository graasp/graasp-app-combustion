import { Air, SportsSoccer } from '@mui/icons-material';

import { O2_GREEN } from '@/constants/css';

import InteractionBox from './InteractionBox';

const OxygenBox = ({ value }: { value: number }): JSX.Element => (
  <InteractionBox
    icon={<Air sx={{ color: O2_GREEN }} />}
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
    value={value}
    secondaryIcon={<SportsSoccer sx={{ color: O2_GREEN }} />}
    secondaryText="1250 footballs"
    secondaryTextColor={O2_GREEN}
  />
);

export default OxygenBox;
