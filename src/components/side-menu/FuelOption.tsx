import { FormControlLabel, Radio, Typography } from '@mui/material';

import { CANVAS_BORDER, PRIMARY_BLUE } from '@/constants/css';

const formStyles = {
  background: '#f4f7fa',
  border: CANVAS_BORDER,
  borderRadius: '10px',
  marginBottom: 1,
  padding: '5px 10px',
  width: '100%',
  ml: 0,
};

const buttonStyles = {
  '& .MuiSvgIcon-root': {
    fontSize: 18,
  },
  '&.Mui-checked': {
    color: PRIMARY_BLUE,
  },
};

interface Props {
  value: string;
  label: string;
  formula: React.ReactNode | null;
}

const FuelOption = ({ value, label, formula }: Props): JSX.Element => (
  <FormControlLabel
    value={value}
    sx={formStyles}
    control={<Radio sx={buttonStyles} />}
    label={
      <Typography variant="body2" sx={{ mt: formula ? '3px' : '0' }}>
        {label} {formula ? '(' : ''}
        {formula}
        {formula ? ')' : ''}
      </Typography>
    }
  />
);

export default FuelOption;
