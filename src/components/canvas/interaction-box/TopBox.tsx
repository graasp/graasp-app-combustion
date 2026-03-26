import { Box, Typography } from '@mui/material';

const container = {
  height: '35%',
  width: '100%',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const iconContainer = {
  height: '60%',
  width: '100%',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const iconStyles = {
  height: '65%',
  width: '20%',
  background: '#f2f7fb',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const mainTextStyles = { height: '20%', fontWeight: 500, color: '#273b47' };

const subTextStyles = { height: '20%', color: '#8f969a' };

interface Props {
  icon: React.ReactNode;
  mainText: string | React.ReactNode;
  subText: React.ReactNode;
}

const TopBox = ({ icon, mainText, subText }: Props): JSX.Element => (
  <Box sx={container}>
    <Box sx={iconContainer}>
      <Box sx={iconStyles}>{icon}</Box>
    </Box>
    <Typography variant="body2" sx={mainTextStyles}>
      {mainText}
    </Typography>
    <Typography variant="body2" sx={subTextStyles}>
      {subText}
    </Typography>
  </Box>
);

export default TopBox;
