import { Air, SportsSoccer } from '@mui/icons-material';

import { O2_GREEN } from '@/constants/css';
import { formatNumber } from '@/utils/chemistry';

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
        V(O<sub>2</sub>) = {formatNumber(value)} L
      </>
    }
    value={value}
    secondaryIcon={<SportsSoccer sx={{ color: O2_GREEN }} />}
    secondaryText="1250 footballs"
    secondaryTextColor={O2_GREEN}
  />
);

export default OxygenBox;
