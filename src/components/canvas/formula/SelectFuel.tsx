import { Box, Typography } from '@mui/material';

const container = {
  border: '1px dashed #22C55E',
  backgroundColor: '#e9fee6',
  borderRadius: '10px',
  width: '10%',
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
};

const typographyStyles = {
  color: '#006F0D',
  fontWeight: 500,
};

const SelectFuel = (): JSX.Element => (
  <Box sx={container}>
    <Typography variant="body2" sx={typographyStyles}>
      SELECT A FUEL
    </Typography>
  </Box>
);

export default SelectFuel;
