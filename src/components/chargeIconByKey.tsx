import { Typography } from '@mui/material';

import {
  BUCKET,
  ELECTRIC_BIKE,
  ELECTRIC_CAR,
  JACUZZI,
  KETTLE,
  SMARTPHONE,
  TUB,
} from '@/constants/units';

export const CHARGE_ICON_BY_KEY = {
  [ELECTRIC_CAR.id]: <Typography variant="h4">🚘</Typography>,
  [ELECTRIC_BIKE.id]: <Typography variant="h4">🏍️</Typography>,
  [SMARTPHONE.id]: <Typography variant="h4">📱</Typography>,
  [JACUZZI.id]: <Typography variant="h3">🛁</Typography>,
  [KETTLE.id]: <Typography variant="h4">🫖</Typography>,
  [BUCKET.id]: <Typography variant="h4">🪣</Typography>,
  [TUB.id]: <Typography variant="h4">🛀</Typography>,
};
