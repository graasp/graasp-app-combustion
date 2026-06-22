import { Box, Typography } from '@mui/material';

import Stack from './Stack';

const styles = {
  height: '50%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

interface Props {
  isEmpty: boolean;
  icon: React.ReactNode;
  iconCount: number;
}

const MiddleBox = ({ isEmpty, icon, iconCount }: Props): JSX.Element => (
  <Box sx={styles}>
    <Typography
      variant={isEmpty ? 'h6' : 'h4'}
      sx={{ fontWeight: 500, opacity: isEmpty ? 0.5 : 1 }}
    >
      {isEmpty ? '- - -' : <Stack icon={icon} iconCount={iconCount} />}
    </Typography>
  </Box>
);

export default MiddleBox;
