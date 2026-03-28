import { useContext } from 'react';

import { Box, Typography } from '@mui/material';

import { FORMULA_BY_KEY } from '@/components/formulaByKey';
import { FUELS } from '@/constants/chemistry';
import { PRIMARY_BLUE } from '@/constants/css';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import FormulaEntity from './FormulaEntity';

const container = {
  border: '1px dashed #22C55E',
  backgroundColor: '#e9fee6',
  borderRadius: '10px',
  padding: '10px 15px',
  width: '10%',
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const placeholderStyles = {
  color: '#006F0D',
  fontWeight: 500,
};

const Fuel = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { fuel: selectedFuel } = state;

  const selectedFuelObj = FUELS.find((fuel) => fuel.id === selectedFuel);

  return (
    <Box sx={container}>
      {selectedFuel ? (
        <FormulaEntity
          number={1}
          formula={FORMULA_BY_KEY.methane}
          caption={selectedFuelObj?.label || ''}
          color={PRIMARY_BLUE}
        />
      ) : (
        <Typography variant="body2" sx={placeholderStyles}>
          SELECT A FUEL
        </Typography>
      )}
    </Box>
  );
};

export default Fuel;
