import { Co2, SportsSoccer } from '@mui/icons-material';

import { GAS_IMAGE_BY_KEY } from '@/components/gasImageByKey';
import { CO2_RED } from '@/constants/css';
import { GasObjectType } from '@/types';
import { formatNumber } from '@/utils/chemistry';
import { formatAnimalCount } from '@/utils/text';

import InteractionBox from './InteractionBox';

const CarbonDioxideBox = ({
  carbonDioxide,
  isEmpty,
}: {
  carbonDioxide: GasObjectType;
  isEmpty: boolean;
}): JSX.Element => (
  <InteractionBox
    isEmpty={isEmpty}
    icon={<Co2 sx={{ color: CO2_RED, fontSize: '2.7rem' }} />}
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
        = {formatNumber(carbonDioxide.value)} L
      </>
    }
    secondaryIcon={GAS_IMAGE_BY_KEY[carbonDioxide.animal.type.id] || null}
    tertiaryIcon={<SportsSoccer sx={{ color: CO2_RED, fontSize: '1.3rem' }} />}
    tertiaryText={`${formatAnimalCount(carbonDioxide.animal)}, or ~${Math.round(carbonDioxide.footballs)} footballs${'\u00A0'}`}
    tertiaryTextColor={CO2_RED}
  />
);

export default CarbonDioxideBox;
