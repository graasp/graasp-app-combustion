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
  icon?: React.ReactNode;
  text: string;
  color: string;
  isEmpty: boolean;
}

const BottomBox = ({ icon, text, color, isEmpty }: Props): JSX.Element => {
  if (isEmpty) return <Box sx={container} />;

  return (
    <Box sx={container}>
      <Typography variant="body2" sx={{ color, ...textStyles }}>
        {text}
      </Typography>
      {icon}
    </Box>
  );
};

export default BottomBox;
