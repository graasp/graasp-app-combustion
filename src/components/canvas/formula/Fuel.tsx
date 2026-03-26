import { Box } from '@mui/material';

import { FORMULA_BY_KEY } from '@/components/formulaByKey';
import { PRIMARY_BLUE } from '@/constants/css';

import FormulaEntity from './FormulaEntity';

const container = {
  border: '1px dashed #22C55E',
  backgroundColor: '#e9fee6',
  borderRadius: '10px',
  padding: '10px 15px',
  textAlign: 'center',
};

const Fuel = (): JSX.Element => (
  <Box sx={container}>
    <FormulaEntity
      number={1}
      formula={FORMULA_BY_KEY.methane}
      caption="Methane"
      color={PRIMARY_BLUE}
    />
  </Box>
);

export default Fuel;
