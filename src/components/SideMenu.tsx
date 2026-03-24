import { Drawer } from '@mui/material';

const SideMenu = (): JSX.Element => (
  <Drawer
    open
    anchor="right"
    variant="persistent"
    PaperProps={{ style: { width: '25vw' } }}
  />
);

export default SideMenu;
