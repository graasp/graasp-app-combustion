import { Typography } from '@mui/material';

import { CAT, ELEPHANT, HORSE, MILK_COW, PIG, SHEEP } from '@/constants/units';

export const GAS_IMAGE_BY_KEY = {
  [CAT.id]: <Typography variant="h5">🐈</Typography>,
  [SHEEP.id]: <Typography variant="h4">🐑</Typography>,
  [ELEPHANT.id]: <Typography variant="h2">🐘</Typography>,
  [MILK_COW.id]: <Typography variant="h3">🐄</Typography>,
  [HORSE.id]: <Typography variant="h4">🐎</Typography>,
  [PIG.id]: <Typography variant="h3">🐖</Typography>,
};
