import {
  Bathtub,
  Blender,
  ElectricBike,
  ElectricCar,
  HotTub,
  LocalDrink,
  Smartphone,
} from '@mui/icons-material';

import { PRIMARY_BLUE } from '@/constants/css';
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
  [ELECTRIC_CAR.id]: (
    <ElectricCar sx={{ color: PRIMARY_BLUE, fontSize: '3rem' }} />
  ),
  [ELECTRIC_BIKE.id]: (
    <ElectricBike sx={{ color: PRIMARY_BLUE, fontSize: '3rem' }} />
  ),
  [SMARTPHONE.id]: (
    <Smartphone sx={{ color: PRIMARY_BLUE, fontSize: '3rem' }} />
  ),
  [JACUZZI.id]: <HotTub sx={{ color: PRIMARY_BLUE, fontSize: '3rem' }} />,
  [KETTLE.id]: <Blender sx={{ color: PRIMARY_BLUE, fontSize: '3rem' }} />,
  [BUCKET.id]: <LocalDrink sx={{ color: PRIMARY_BLUE, fontSize: '3rem' }} />,
  [TUB.id]: <Bathtub sx={{ color: PRIMARY_BLUE, fontSize: '3rem' }} />,
};
