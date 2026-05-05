import { Box, Typography } from '@mui/material';

const container = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  lineHeight: 1,
  verticalAlign: 'middle',
  mx: 0.25,
};

const numeratorStyles = { px: 0.25, fontWeight: 500 };
const denominatorStyles = {
  px: 0.25,
  borderTop: '1px solid currentColor',
  mt: '1px',
  fontWeight: 500,
};

type Props = {
  numerator: number;
  denominator: number;
};

const Fraction = ({ numerator, denominator }: Props): JSX.Element => (
  <Box sx={container}>
    <Typography variant="body2" sx={numeratorStyles}>
      {numerator}
    </Typography>

    <Typography variant="body2" sx={denominatorStyles}>
      {denominator}
    </Typography>
  </Box>
);

export default Fraction;
