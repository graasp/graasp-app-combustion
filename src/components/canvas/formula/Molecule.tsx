import { Box, Typography } from '@mui/material';

const container = {
  display: 'flex',
  justifyContent: 'center',
};

const numberStyles = {
  marginRight: '5px',
  borderBottom: '2px dashed green',
  color: 'green',
  minWidth: '14px',
};

interface Props {
  number: number;
  formula: React.ReactNode;
}

const Molecule = ({ number, formula }: Props): JSX.Element => (
  <Box sx={container}>
    <Typography variant="h5" sx={numberStyles}>
      {number !== 0 ? number : ''}
    </Typography>
    <Typography variant="h5">{formula}</Typography>
  </Box>
);

export default Molecule;
