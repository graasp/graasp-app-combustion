import { Box, Typography } from '@mui/material';

const container = {
  height: '100%',
  width: '20%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const borderedBox = {
  height: '80%',
  width: '100%',
  border: '1px solid grey',
  borderRadius: '5px',
};

const headingStyles = { fontWeight: 500, marginTop: 1 };

const subHeadingStyles = { color: 'grey' };

interface Props {
  heading: string | React.ReactNode;
  subHeading: string | React.ReactNode;
}

const InteractionBox = ({ heading, subHeading }: Props): JSX.Element => (
  <Box sx={container}>
    <Box sx={borderedBox} />
    <Typography variant="body1" sx={headingStyles}>
      {heading}
    </Typography>
    <Typography variant="body2" sx={subHeadingStyles}>
      {subHeading}
    </Typography>
  </Box>
);

export default InteractionBox;
