import { Box, Typography } from '@mui/material';

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
}

const Molecule = ({ number, formula, color }: Props): JSX.Element => (
  <Box sx={{ ...container, color }}>
    <Typography variant="body2" sx={numberStyles}>
      {number}
    </Typography>
    <Typography variant="h5" sx={formulaStyles}>
      {formula}
    </Typography>
  </Box>
);

export default Molecule;
