import { useContext } from 'react';

import { Box } from '@mui/material';

import { CANVAS_BACKGROUND } from '@/constants/css';
import { FUELS } from '@/constants/fuels';
import { EMPTY_FUEL_OBJECT } from '@/constants/fuels/empty';
import { KILOGRAMS, MOLES } from '@/constants/units';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonDioxideBox from './interaction-box/CarbonDioxideBox';
import EnergyBox from './interaction-box/EnergyBox';
import OxygenBox from './interaction-box/OxygenBox';

const outerContainer = {
  height: '67.5%',
  background: CANVAS_BACKGROUND,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const innerContainer = {
  height: '90%',
  width: '90%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const InteractionContainer = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { fuel: selectedFuel, units } = state;

  const selectedFuelObj = FUELS.find((fuel) => fuel.id === selectedFuel);
  const { energy, oxygen, carbonDioxide } =
    selectedFuelObj?.[units as typeof KILOGRAMS | typeof MOLES] ||
    EMPTY_FUEL_OBJECT;

  const isEmpty = selectedFuel === '';

  return (
    <Box sx={outerContainer}>
      <Box sx={innerContainer}>
        <EnergyBox energy={energy} isEmpty={isEmpty} />
        <OxygenBox oxygen={oxygen} isEmpty={isEmpty} />
        <CarbonDioxideBox
          carbonDioxide={carbonDioxide}
          isEmpty={isEmpty || selectedFuel === 'hydrogen'}
        />
      </Box>
    </Box>
  );
};

export default InteractionContainer;
