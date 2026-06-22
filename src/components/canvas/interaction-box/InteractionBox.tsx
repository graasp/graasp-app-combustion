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
  isEmpty: boolean;
  secondaryIcon: React.ReactNode;
  tertiaryIcon?: React.ReactNode;
  tertiaryText: string;
  tertiaryTextColor: string;
  iconCount: number;
}

const InteractionBox = ({
  icon,
  mainText,
  subText,
  isEmpty,
  secondaryIcon,
  tertiaryIcon,
  tertiaryText,
  tertiaryTextColor,
  iconCount,
}: Props): JSX.Element => (
  <Box sx={{ ...container, opacity: isEmpty ? 0.5 : 1 }}>
    <TopBox icon={icon} mainText={mainText} subText={subText} />
    <MiddleBox isEmpty={isEmpty} icon={secondaryIcon} iconCount={iconCount} />
    <Divider sx={{ width: '80%' }} />
    <BottomBox
      text={tertiaryText}
      color={tertiaryTextColor}
      icon={tertiaryIcon || null}
      isEmpty={isEmpty}
    />
  </Box>
);

export default InteractionBox;
