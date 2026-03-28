import { useContext } from 'react';

import { Box } from '@mui/material';

import { CANVAS_BORDER } from '@/constants/css';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonDioxide from './CarbonDioxide';
import Fuel from './Fuel';
import Oxygen from './Oxygen';
import SelectFuel from './SelectFuel';
import Symbol from './Symbol';
import Water from './Water';

const outerContainer = {
  height: '70%',
  width: '90%',
  cursor: 'default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  borderRadius: '10px',
  border: CANVAS_BORDER,
};

const innerContainer = {
  height: '80%',
  width: '90%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
};

const Formula = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { fuel: selectedFuel } = state;

  return (
    <Box sx={outerContainer}>
      <Box sx={innerContainer}>
        {selectedFuel ? <Fuel /> : <SelectFuel />}
        <Symbol symbol="+" />
        <Oxygen />
        <Symbol symbol="→" />
        <CarbonDioxide />
        <Symbol symbol="+" />
        <Water />
      </Box>
    </Box>
  );
};

export default Formula;
