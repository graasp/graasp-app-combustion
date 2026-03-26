import { Switch, SwitchProps, styled } from '@mui/material';

import { PRIMARY_BLUE } from '@/constants/css';

const CustomSwitch = styled((props: SwitchProps) => (
  <Switch disableRipple {...props} />
))(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: PRIMARY_BLUE,
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default CustomSwitch;
