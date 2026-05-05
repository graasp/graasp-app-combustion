import { Air, SportsSoccer } from '@mui/icons-material';

import { O2_GREEN } from '@/constants/css';
import { formatNumber } from '@/utils/chemistry';

import InteractionBox from './InteractionBox';

const OxygenBox = ({
  value,
  footballs,
}: {
  value: number;
  footballs: number;
}): JSX.Element => (
  <InteractionBox
    icon={<Air sx={{ color: O2_GREEN }} />}
    mainText={
      <>
        VOLUME OF O<sub>2</sub> NEEDED
      </>
    }
    subText={
      <>
        V
        <sub>
          O<sub>2</sub>
        </sub>{' '}
        = {formatNumber(value)} L
      </>
    }
    value={value}
    secondaryIcon={footballs ? <SportsSoccer sx={{ color: O2_GREEN }} /> : null}
    secondaryText={footballs ? `${formatNumber(footballs)} footballs` : ''}
    secondaryTextColor={O2_GREEN}
  />
);

export default OxygenBox;
