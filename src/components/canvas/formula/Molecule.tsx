import { Box, Typography } from '@mui/material';

import Coefficient from './Coefficient';

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50%',
};
const formulaStyles = { fontWeight: 500 };

interface Props {
  coefficient: number;
  formula: React.ReactNode;
  color: string;
  emoji?: string;
}

const Molecule = ({
  coefficient,
  formula,
  color,
  emoji = '',
}: Props): JSX.Element => (
  <Box sx={{ ...container, color }}>
    <Coefficient coefficient={coefficient} emoji={emoji} color={color} />
    <Typography variant="h5" sx={formulaStyles}>
      {formula || emoji}
    </Typography>
  </Box>
);

export default Molecule;
