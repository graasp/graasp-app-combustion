import { Air, SportsSoccer } from '@mui/icons-material';

import { GAS_IMAGE_BY_KEY } from '@/components/gasImageByKey';
import { O2_GREEN } from '@/constants/css';
import { GasObjectType } from '@/types';
import { formatAnimalCount } from '@/utils';
import { formatNumber } from '@/utils/chemistry';

import InteractionBox from './InteractionBox';

const OxygenBox = ({
  oxygen,
  isEmpty,
}: {
  oxygen: GasObjectType;
  isEmpty: boolean;
}): JSX.Element => (
  <InteractionBox
    isEmpty={isEmpty}
    icon={<Air sx={{ color: O2_GREEN, fontSize: '2rem' }} />}
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
        = {formatNumber(oxygen.value)} L
      </>
    }
    secondaryIcon={GAS_IMAGE_BY_KEY[oxygen.animal.type.id]}
    tertiaryText={`${formatAnimalCount(oxygen.animal)}, or ~${Math.round(oxygen.footballs)} footballs${'\u00A0'}`}
    tertiaryTextColor={O2_GREEN}
    tertiaryIcon={<SportsSoccer sx={{ color: O2_GREEN, fontSize: '1.3rem' }} />}
    iconCount={oxygen.animal.num}
  />
);

export default OxygenBox;
