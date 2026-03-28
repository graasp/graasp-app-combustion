import { useContext } from 'react';

import { Box } from '@mui/material';

import { FORMULA_BY_KEY } from '@/components/formulaByKey';
import { FUELS } from '@/constants/chemistry';
import { PRIMARY_BLUE } from '@/constants/css';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import FormulaEntity from './FormulaEntity';

const container = {
  width: '10%',
  height: '100%',
};

const Fuel = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { fuel: selectedFuel } = state;

  const selectedFuelObj = FUELS.find((fuel) => fuel.id === selectedFuel);
  const { label = '', id, emoji } = selectedFuelObj || {};

  return (
    <Box sx={container}>
      <FormulaEntity
        number={1}
        formula={FORMULA_BY_KEY[id as keyof typeof FORMULA_BY_KEY]}
        emoji={emoji}
        caption={label}
        color={PRIMARY_BLUE}
      />
    </Box>
  );
};

export default Fuel;
