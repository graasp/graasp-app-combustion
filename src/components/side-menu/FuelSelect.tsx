import { Box, RadioGroup, Typography } from '@mui/material';

import { FUELS } from '@/constants/chemistry';

import { FORMULA_BY_KEY } from '../formulaByKey';
import FuelOption from './FuelOption';

const titleStyles = { fontWeight: 600 };

const containerStyles = { width: '85%', margin: '0 auto' };

const FuelSelect = (): JSX.Element => (
  <Box sx={containerStyles}>
    <Typography variant="body1" sx={titleStyles}>
      Fuel
    </Typography>
    <Box sx={{ mt: 2 }}>
      <RadioGroup name="fuel-select" defaultValue="option1">
        {FUELS.map((fuel) => (
          <FuelOption
            key={fuel.value}
            value={fuel.value}
            label={fuel.label}
            formula={
              fuel.hasFormula
                ? (FORMULA_BY_KEY[fuel.value as keyof typeof FORMULA_BY_KEY] ??
                  null)
                : null
            }
          />
        ))}
      </RadioGroup>
    </Box>
  </Box>
);

export default FuelSelect;
