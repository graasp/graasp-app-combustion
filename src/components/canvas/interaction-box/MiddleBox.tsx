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

const MiddleBox = ({ value }: Props): JSX.Element => {
  const isEmpty = value === 0;

  return (
    <Box sx={styles}>
      <Typography
        variant={isEmpty ? 'h6' : 'h4'}
        sx={{ fontWeight: 500, opacity: isEmpty ? 0.5 : 1 }}
      >
        {isEmpty ? '- - -' : formatNumber(value)}
      </Typography>
    </Box>
  );
};

export default MiddleBox;
