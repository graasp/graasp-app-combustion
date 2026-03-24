import { Typography } from '@mui/material';

const styles = {
  color: '#FF8C00',
  borderBottom: '2px dashed #FF8C00',
  minWidth: '60px',
};

const Fuel = (): JSX.Element => {
  const fuel = '\u00A0';

  return (
    <Typography variant="h5" sx={styles}>
      {fuel}
    </Typography>
  );
};

export default Fuel;
