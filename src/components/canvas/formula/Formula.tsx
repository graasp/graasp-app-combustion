import { Box, Typography } from '@mui/material';

import CarbonDioxide from './CarbonDioxide';
import Fuel from './Fuel';
import Oxygen from './Oxygen';
import Water from './Water';

const styles = {
  height: '50%',
  width: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  cursor: 'default',
};

const Formula = (): JSX.Element => (
  <Box sx={styles}>
    <Fuel />
    <Typography variant="h5">+</Typography>
    <Oxygen />
    <Typography variant="h4">→</Typography>
    <CarbonDioxide />
    <Typography variant="h5">+</Typography>
    <Water />
  </Box>
);

export default Formula;
