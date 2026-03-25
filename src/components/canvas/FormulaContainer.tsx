import { Box } from '@mui/material';

import { CANVAS_BACKGROUND } from '@/constants/css';

import Formula from './formula/Formula';

const styles = {
  width: '100%',
  height: '25%',
  background: CANVAS_BACKGROUND,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const FormulaContainer = (): JSX.Element => (
  <Box sx={styles}>
    <Formula />
  </Box>
);

export default FormulaContainer;
