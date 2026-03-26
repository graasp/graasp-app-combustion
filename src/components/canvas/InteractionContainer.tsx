import { Box } from '@mui/material';

import { CANVAS_BACKGROUND } from '@/constants/css';

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

const InteractionContainer = (): JSX.Element => (
  <Box sx={outerContainer}>
    <Box sx={innerContainer}>
      <EnergyBox />
      <OxygenBox />
      <CarbonDioxideBox />
    </Box>
  </Box>
);

export default InteractionContainer;
