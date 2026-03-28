import { useContext } from 'react';

import { Box, RadioGroup, Typography } from '@mui/material';

import { setFuel } from '@/actions/app-settings';
import { FUELS } from '@/constants/chemistry';
import { HEADING_TEXT } from '@/constants/css';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

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

const FuelSelect = (): JSX.Element => {
  const { dispatch, state } = useContext(AppSettingsContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFuel(event.target.value));
  };

  return (
    <Box sx={containerStyles}>
      <Typography variant="body2" sx={titleStyles}>
        FUEL:
      </Typography>
      <Box sx={{ mt: 2 }}>
        <RadioGroup value={state.fuel} onChange={handleChange}>
          {FUELS.map((fuel) => (
            <FuelOption fuel={fuel} />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default FuelSelect;
