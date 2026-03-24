import { Dispatch, SetStateAction } from 'react';

import { Drawer } from '@mui/material';

interface Props {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
  showSideMenu: boolean;
}

const SideMenu = ({
  setShowSideMenu,
  showSideMenu,
}: Props): JSX.Element | null => {
  console.log(setShowSideMenu);

  return (
    <Drawer
      open={showSideMenu}
      anchor="right"
      variant="persistent"
      PaperProps={{ style: { width: '25vw' } }}
    />
  );
};

export default SideMenu;
