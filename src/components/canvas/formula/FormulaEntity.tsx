import { Box } from '@mui/material';

import { FORMULA_DEFAULT } from '@/constants/css';

import Caption from './Caption';
import Molecule from './Molecule';

const container = { textAlign: 'center' };

interface Props {
  number: number;
  formula: React.ReactNode;
  caption: string;
  color?: string;
}

const FormulaEntity = ({
  number,
  formula,
  caption,
  color = FORMULA_DEFAULT,
}: Props): JSX.Element => (
  <Box sx={container}>
    <Molecule number={number} formula={formula} color={color} />
    <Caption caption={caption} />
  </Box>
);

export default FormulaEntity;
