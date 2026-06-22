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
  flexDirection: 'column',
  justifyContent: 'space-between',
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

const rightSubtextStyles = {
  opacity: 0.75,
  textAlign: 'right',
  lineHeight: 1.2,
  fontSize: '0.75rem',
};

interface Props {
  title: string;
  leftLabel: string;
  rightLabel: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
  rightSubtext?: string;
}

const TwoSidedSwitch = ({
  title,
  leftLabel,
  rightLabel,
  isChecked,
  setIsChecked,
  disabled = false,
  rightSubtext = '',
}: Props): JSX.Element => (
  <Box sx={container}>
    <Typography variant="body2" sx={titleStyles}>
      {title.toUpperCase()}
    </Typography>
    <Box sx={{ ...innerContainer, opacity: disabled ? 0.5 : 1 }}>
      <Box sx={{ display: 'flex' }}>
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
      {rightSubtext && (
        <Typography sx={rightSubtextStyles}>{rightSubtext}</Typography>
      )}
    </Box>
  </Box>
);

export default TwoSidedSwitch;
