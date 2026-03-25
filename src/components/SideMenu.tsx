import { Drawer } from '@mui/material';

import UnitsSwitch from './side-menu/UnitsSwitch';

const SideMenu = (): JSX.Element => (
  <Drawer
    open
    anchor="right"
    variant="persistent"
    PaperProps={{ style: { width: '25vw' } }}
  >
    <UnitsSwitch />
  </Drawer>
);

export default SideMenu;
