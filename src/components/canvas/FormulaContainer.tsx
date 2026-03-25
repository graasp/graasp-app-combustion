import { Box } from '@mui/material';

import Formula from './formula/Formula';

const styles = {
  width: '100%',
  height: '25%',
  // background: '#F3F1EC',
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
