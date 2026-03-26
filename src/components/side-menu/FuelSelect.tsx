import { Box, RadioGroup, Typography } from '@mui/material';

import { FUELS } from '@/constants/chemistry';
import { HEADING_TEXT } from '@/constants/css';

import { FORMULA_BY_KEY } from '../formulaByKey';
import FuelOption from './FuelOption';

const containerStyles = {
  width: '85%',
  margin: '0 auto',
  marginTop: '1.5em',
};

const titleStyles = {
  fontWeight: 500,
  marginBottom: '1em',
  color: HEADING_TEXT,
};

const FuelSelect = (): JSX.Element => (
  <Box sx={containerStyles}>
    <Typography variant="body2" sx={titleStyles}>
      FUEL:
    </Typography>
    <Box sx={{ mt: 2 }}>
      <RadioGroup name="fuel-select" defaultValue="option1">
        {FUELS.map(({ value, label, hasFormula }) => (
          <FuelOption
            key={value}
            value={value}
            label={label}
            formula={
              hasFormula
                ? (FORMULA_BY_KEY[value as keyof typeof FORMULA_BY_KEY] ?? null)
                : null
            }
          />
        ))}
      </RadioGroup>
    </Box>
  </Box>
);

export default FuelSelect;
