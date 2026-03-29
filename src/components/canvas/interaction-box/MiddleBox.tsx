import { Box, Typography } from '@mui/material';

import { formatNumber } from '@/utils/chemistry';

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
      {formatNumber(value)}
    </Typography>
  </Box>
);

export default MiddleBox;
