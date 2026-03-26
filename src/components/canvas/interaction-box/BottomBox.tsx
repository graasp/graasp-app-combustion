import { Box, Typography } from '@mui/material';

const container = {
  height: '15%',
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const textStyles = {
  ml: '5px',
  fontWeight: 500,
};

interface Props {
  icon: React.ReactNode;
  text: string;
  color: string;
}

const BottomBox = ({ icon, text, color }: Props): JSX.Element => (
  <Box sx={container}>
    {icon}
    <Typography variant="body2" sx={{ color, ...textStyles }}>
      {text}
    </Typography>
  </Box>
);

export default BottomBox;
