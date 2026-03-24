import { useState } from 'react';

import { Tune } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';

import { t } from 'i18next';

import Canvas from '@/components/Canvas';
import SideMenu from '@/components/SideMenu';
import { BUILDER_VIEW_CY } from '@/config/selectors';

const openSideMenuFab = {
  right: 5,
  top: 5,
  position: 'absolute',
  zIndex: 99999,
};

const BuilderView = (): JSX.Element => {
  const [showSideMenu, setShowSideMenu] = useState(true);

  return (
    <div data-cy={BUILDER_VIEW_CY} style={{ height: '100%', display: 'flex' }}>
      <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      <Canvas showSideMenu={showSideMenu} />
      {!showSideMenu && (
        <Tooltip title={t('Open side menu')} placement="left">
          <Fab
            sx={openSideMenuFab}
            color="primary"
            onClick={() => setShowSideMenu(true)}
          >
            <Tune />
          </Fab>
        </Tooltip>
      )}
    </div>
  );
};

export default BuilderView;
