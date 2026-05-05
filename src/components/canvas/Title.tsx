import { Box, Typography } from '@mui/material';

import { CANVAS_BACKGROUND } from '@/constants/css';

const container = {
  height: '12.5%',
  width: '100%',
  background: CANVAS_BACKGROUND,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const titleStyles = { fontWeight: 500 };

const subtitleStyles = { color: '#8f969a' };

const Title = (): JSX.Element => (
  <Box sx={container}>
    <Typography variant="h5" sx={titleStyles}>
      Combustion Thermochemistry
    </Typography>
    <Typography variant="body2" sx={subtitleStyles}>
      A Stoichiometric Simulation
    </Typography>
  </Box>
);

export default Title;
