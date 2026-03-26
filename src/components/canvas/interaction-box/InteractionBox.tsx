import { Box, Divider } from '@mui/material';

import { CANVAS_BORDER } from '@/constants/css';

import BottomBox from './BottomBox';
import MiddleBox from './MiddleBox';
import TopBox from './TopBox';

const container = {
  height: '100%',
  width: '30%',
  background: 'white',
  border: CANVAS_BORDER,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

interface Props {
  icon: React.ReactNode;
  mainText: string | React.ReactNode;
  subText: React.ReactNode;
  value: number;
  secondaryIcon: React.ReactNode;
  secondaryText: string;
  secondaryTextColor: string;
}

const InteractionBox = ({
  icon,
  mainText,
  subText,
  value,
  secondaryIcon,
  secondaryText,
  secondaryTextColor,
}: Props): JSX.Element => (
  <Box sx={container}>
    <TopBox icon={icon} mainText={mainText} subText={subText} />
    <MiddleBox value={value} />
    <Divider sx={{ width: '80%' }} />
    <BottomBox
      icon={secondaryIcon}
      text={secondaryText}
      color={secondaryTextColor}
    />
  </Box>
);

export default InteractionBox;
