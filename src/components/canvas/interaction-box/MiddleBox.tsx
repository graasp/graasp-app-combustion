import { Box, Typography } from '@mui/material';

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
}

const MiddleBox = ({ isEmpty, icon }: Props): JSX.Element => (
  <Box sx={styles}>
    <Typography
      variant={isEmpty ? 'h6' : 'h4'}
      sx={{ fontWeight: 500, opacity: isEmpty ? 0.5 : 1 }}
    >
      {isEmpty ? '- - -' : icon}
    </Typography>
  </Box>
);

export default MiddleBox;
