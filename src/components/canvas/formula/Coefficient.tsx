import { useContext } from 'react';

import { Typography } from '@mui/material';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const coefficientStyles = { marginRight: '5px', fontWeight: 500 };

interface Props {
  coefficient: number;
  emoji: string;
  color: string;
}

const Coefficient = ({
  coefficient,
  emoji,
  color,
}: Props): JSX.Element | null => {
  const { state } = useContext(AppSettingsContext);
  const { fuel: selectedFuel } = state;

  if (!selectedFuel)
    return (
      <Typography
        sx={{ ...coefficientStyles, borderBottom: `1px dashed ${color}` }}
      >
        {'\u00A0\u00A0\u00A0\u00A0'}
      </Typography>
    );

  if (emoji) return null;

  return (
    <Typography variant="body2" sx={coefficientStyles}>
      {coefficient}
    </Typography>
  );
};

export default Coefficient;
