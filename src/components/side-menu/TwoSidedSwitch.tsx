import { Dispatch, SetStateAction } from 'react';

import { Box, Typography } from '@mui/material';

import { CANVAS_BORDER, HEADING_TEXT, PRIMARY_BLUE } from '@/constants/css';

import CustomSwitch from './CustomSwitch';

const container = {
  width: '85%',
  margin: '0 auto',
  marginTop: '1.5em',
};

const titleStyles = {
  fontWeight: 500,
  marginBottom: '1em',
  color: HEADING_TEXT,
};

const innerContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#eff4f9',
  border: CANVAS_BORDER,
  borderRadius: '10px',
  padding: '20px 20px',
};

const switchStyles = {
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const leftLabelStyles = { width: '35%', fontSize: '0.825rem' };

const rightLabelStyles = {
  width: '35%',
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: '0.825rem',
};

interface Props {
  title: string;
  leftLabel: string;
  rightLabel: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
}

const TwoSidedSwitch = ({
  title,
  leftLabel,
  rightLabel,
  isChecked,
  setIsChecked,
  disabled = false,
}: Props): JSX.Element => (
  <Box sx={container}>
    <Typography variant="body2" sx={titleStyles}>
      {title.toUpperCase()}
    </Typography>
    <Box sx={{ ...innerContainer, opacity: disabled ? 0.5 : 1 }}>
      <Typography sx={leftLabelStyles}>{leftLabel}</Typography>
      <Box sx={switchStyles}>
        <CustomSwitch
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
          disabled={disabled}
        />
      </Box>
      <Typography
        sx={{
          ...rightLabelStyles,
          color: isChecked ? PRIMARY_BLUE : 'primary',
          fontWeight: isChecked ? 500 : 'normal',
        }}
      >
        {rightLabel}
      </Typography>
    </Box>
  </Box>
);

export default TwoSidedSwitch;
