import { FormControlLabel, Radio, Typography } from '@mui/material';

import { CANVAS_BORDER, PRIMARY_BLUE } from '@/constants/css';

import { FORMULA_BY_KEY } from '../formulaByKey';

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

interface Fuel {
  label: string;
  id: string;
  hasFormula: boolean;
  emoji?: string;
}

interface Props {
  fuel: Fuel;
}

const FuelOption = ({ fuel }: Props): JSX.Element => {
  const { id, label, hasFormula, emoji = '' } = fuel;

  const formula = hasFormula
    ? FORMULA_BY_KEY[id as keyof typeof FORMULA_BY_KEY]
    : null;

  return (
    <FormControlLabel
      value={id}
      sx={formStyles}
      control={<Radio sx={buttonStyles} />}
      label={
        <Typography variant="body2" sx={{ mt: formula ? '3px' : '0' }}>
          {label} {formula ? '(' : `${'\u00A0'}${emoji}`}
          {formula}
          {formula ? ')' : ''}
        </Typography>
      }
    />
  );
};

export default FuelOption;
