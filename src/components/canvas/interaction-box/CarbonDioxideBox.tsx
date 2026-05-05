import { Co2, SportsSoccer } from '@mui/icons-material';

import { CO2_RED } from '@/constants/css';
import { formatNumber } from '@/utils/chemistry';

import InteractionBox from './InteractionBox';

const CarbonDioxideBox = ({
  value,
  footballs,
}: {
  value: number;
  footballs: number;
}): JSX.Element => (
  <InteractionBox
    icon={<Co2 sx={{ color: CO2_RED, fontSize: '2.2rem' }} />}
    mainText={
      <>
        VOLUME OF CO<sub>2</sub> PRODUCED
      </>
    }
    subText={
      <>
        V
        <sub>
          CO<sub>2</sub>
        </sub>
        = {formatNumber(value)} L
      </>
    }
    value={value}
    secondaryIcon={footballs ? <SportsSoccer sx={{ color: CO2_RED }} /> : null}
    secondaryText={footballs ? `${formatNumber(footballs)} footballs` : ''}
    secondaryTextColor={CO2_RED}
  />
);

export default CarbonDioxideBox;
