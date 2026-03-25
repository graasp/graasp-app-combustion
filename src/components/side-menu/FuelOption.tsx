import { FormControlLabel, Radio, Typography } from '@mui/material';

const buttonStyles = {
  '& .MuiSvgIcon-root': {
    fontSize: 18,
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
    control={<Radio sx={buttonStyles} />}
    label={
      <Typography variant="body2">
        {label} {formula ? '(' : ''}
        {formula}
        {formula ? ')' : ''}
      </Typography>
    }
  />
);

export default FuelOption;
