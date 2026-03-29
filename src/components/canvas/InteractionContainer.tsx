import { useContext } from 'react';

import { Box } from '@mui/material';

import { FUELS } from '@/constants/chemistry';
import { CANVAS_BACKGROUND } from '@/constants/css';
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
  const {
    energy = 0,
    volumeO2 = 0,
    volumeCo2 = 0,
  } = selectedFuelObj?.[units as typeof KILOGRAMS | typeof MOLES] || {};

  return (
    <Box sx={outerContainer}>
      <Box sx={innerContainer}>
        <EnergyBox value={energy} />
        <OxygenBox value={volumeO2} />
        <CarbonDioxideBox value={volumeCo2} />
      </Box>
    </Box>
  );
};

export default InteractionContainer;
