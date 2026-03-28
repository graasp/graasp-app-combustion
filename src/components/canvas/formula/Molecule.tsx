import { Box, Typography } from '@mui/material';

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50%',
};

const numberStyles = {
  marginRight: '5px',
  fontWeight: 500,
};

const formulaStyles = {
  fontWeight: 500,
};

interface Props {
  number: number;
  formula: React.ReactNode;
  color: string;
  emoji?: string;
}

const Molecule = ({ number, formula, color, emoji }: Props): JSX.Element => (
  <Box sx={{ ...container, color }}>
    {!emoji ? (
      <Typography variant="body2" sx={numberStyles}>
        {number}
      </Typography>
    ) : null}
    <Typography variant="h5" sx={formulaStyles}>
      {formula || emoji}
    </Typography>
  </Box>
);

export default Molecule;
