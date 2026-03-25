import { Drawer } from '@mui/material';

import CustomDivider from './side-menu/CustomDivider';
import FuelSelect from './side-menu/FuelSelect';
import UnitsSwitch from './side-menu/UnitsSwitch';

const SideMenu = (): JSX.Element => (
  <Drawer
    open
    anchor="right"
    variant="persistent"
    PaperProps={{ style: { width: '25vw' } }}
  >
    <UnitsSwitch />
    <CustomDivider />
    <FuelSelect />
  </Drawer>
);

export default SideMenu;
