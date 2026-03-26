import { Typography } from '@mui/material';

import { FORMULA_SYMBOL } from '@/constants/css';

const styles = { color: FORMULA_SYMBOL };

interface Props {
  symbol: string;
}

const Symbol = ({ symbol }: Props): JSX.Element => (
  <Typography variant="h5" sx={styles}>
    {symbol}
  </Typography>
);

export default Symbol;
