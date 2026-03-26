import { Drawer } from '@mui/material';

import { SIDE_MENU_BACKGROUND } from '@/constants/css';

import EnergySwitch from './side-menu/EnergySwitch';
import FuelSelect from './side-menu/FuelSelect';
import UnitsSwitch from './side-menu/UnitsSwitch';

const SideMenu = (): JSX.Element => (
  <Drawer
    open
    anchor="right"
    variant="persistent"
    PaperProps={{
      style: {
        width: '25vw',
        background: SIDE_MENU_BACKGROUND,
        paddingBottom: '2em',
      },
    }}
  >
    <UnitsSwitch />
    <FuelSelect />
    <EnergySwitch />
  </Drawer>
);

export default SideMenu;
