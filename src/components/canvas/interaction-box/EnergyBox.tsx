import { useContext } from 'react';

import { Bolt } from '@mui/icons-material';

import { CHARGE_ICON_BY_KEY } from '@/components/chargeIconByKey';
import { PRIMARY_BLUE } from '@/constants/css';
import { DEVICE_CHARGE } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { EnergyObjectType } from '@/types';
import { formatNumber } from '@/utils/chemistry';
import { formatEnergyDisplay } from '@/utils/text';

import InteractionBox from './InteractionBox';

const EnergyBox = ({
  energy,
  isEmpty,
}: {
  energy: EnergyObjectType;
  isEmpty: boolean;
}): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { units, energy: selectedEnergyDisplay } = state;

  const { value, charge, water } = energy;

  const energyUnit = selectedEnergyDisplay === DEVICE_CHARGE ? charge : water;

  return (
    <InteractionBox
      isEmpty={isEmpty}
      icon={<Bolt sx={{ color: PRIMARY_BLUE, fontSize: '2.2rem' }} />}
      mainText="ENERGY OBTAINED"
      subText={
        <>
          Δ<sub>c</sub>H° = {formatNumber(value)} kJ · {units}⁻¹
        </>
      }
      secondaryIcon={CHARGE_ICON_BY_KEY[energyUnit.type.id]}
      tertiaryText={formatEnergyDisplay(selectedEnergyDisplay, energyUnit)}
      tertiaryTextColor={PRIMARY_BLUE}
    />
  );
};

export default EnergyBox;
