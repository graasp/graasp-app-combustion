import { Box } from '@mui/material';

import InteractionBox from './InteractionBox';

const outerContainer = {
  height: '75%',
  background: '#F3F1EC',
  opacity: 0.7,
  display: 'flex',
  alignItems: 'center',
};

const innerContainer = {
  height: '60%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
};

const Interaction = (): JSX.Element => {
  const oxygenHeading = (
    <>
      Volume of O<sub>2</sub> needed
    </>
  );

  const co2Heading = (
    <>
      Volume of CO<sub>2</sub> produced
    </>
  );

  return (
    <Box sx={outerContainer}>
      <Box sx={innerContainer}>
        <InteractionBox heading="Energy obtained" subHeading="100 J" />
        <InteractionBox heading={oxygenHeading} subHeading="100 J" />
        <InteractionBox heading={co2Heading} subHeading="100 J" />
      </Box>
    </Box>
  );
};

export default Interaction;
