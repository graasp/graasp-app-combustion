import { Box, Typography } from '@mui/material';

const styles = {
  height: '50%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

interface Props {
  value: number;
}

const MiddleBox = ({ value }: Props): JSX.Element => (
  <Box sx={styles}>
    <Typography variant="h3" sx={{ fontWeight: 500 }}>
      {value}
    </Typography>
  </Box>
);

export default MiddleBox;
