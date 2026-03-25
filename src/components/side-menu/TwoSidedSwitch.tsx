import { Dispatch, SetStateAction } from 'react';

import { Box, Switch, Typography } from '@mui/material';

const container = {
  width: '80%',
  margin: '0 auto',
  marginTop: '1.5em',
};

const titleStyles = { fontWeight: 600 };

const innerContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const switchStyles = {
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
};

const leftLabelStyles = { width: '35%' };

const rightLabelStyles = {
  width: '35%',
  display: 'flex',
  justifyContent: 'flex-end',
};

interface Props {
  title: string;
  leftLabel: string;
  rightLabel: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const TwoSidedSwitch = ({
  title,
  leftLabel,
  rightLabel,
  isChecked,
  setIsChecked,
}: Props): JSX.Element => (
  <Box sx={container}>
    <Typography variant="body1" sx={titleStyles}>
      {title}
    </Typography>
    <Box sx={innerContainer}>
      <Typography variant="body2" sx={leftLabelStyles}>
        {leftLabel}
      </Typography>
      <Box sx={switchStyles}>
        <Switch
          checked={isChecked}
          onChange={() => setIsChecked(isChecked)}
          color="primary"
        />
      </Box>
      <Typography variant="body2" sx={rightLabelStyles}>
        {rightLabel}
      </Typography>
    </Box>
  </Box>
);

export default TwoSidedSwitch;
