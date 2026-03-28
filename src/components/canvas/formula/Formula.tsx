import { useContext } from 'react';

import { Box } from '@mui/material';

import { FUELS } from '@/constants/chemistry';
import { CANVAS_BORDER } from '@/constants/css';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { Fuel as FuelType } from '@/types';
import { computeCoefficients } from '@/utils/chemistry';

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

  const selectedFuelObj = FUELS.find((fuel) => fuel.id === selectedFuel) || {};

  const { oxygenCoefficient, carbonDioxideCoefficient, waterCoefficient } =
    computeCoefficients(selectedFuelObj as FuelType);

  return (
    <Box sx={outerContainer}>
      <Box sx={innerContainer}>
        {selectedFuel ? <Fuel /> : <SelectFuel />}
        <Symbol symbol="+" />
        <Oxygen coefficient={oxygenCoefficient} />
        <Symbol symbol="→" />
        <CarbonDioxide coefficient={carbonDioxideCoefficient} />
        <Symbol symbol="+" />
        <Water coefficient={waterCoefficient} />
      </Box>
    </Box>
  );
};

export default Formula;
