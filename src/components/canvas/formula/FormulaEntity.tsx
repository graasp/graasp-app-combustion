import { Box } from '@mui/material';

import { FORMULA_DEFAULT } from '@/constants/css';

import Caption from './Caption';
import Molecule from './Molecule';

const container = {
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

interface Props {
  number: number;
  formula?: React.ReactNode;
  emoji?: string;
  caption: string;
  color?: string;
}

const FormulaEntity = ({
  number,
  formula,
  emoji,
  caption,
  color = FORMULA_DEFAULT,
}: Props): JSX.Element => (
  <Box sx={container}>
    <Molecule number={number} formula={formula} color={color} emoji={emoji} />
    <Caption caption={caption} />
  </Box>
);

export default FormulaEntity;
