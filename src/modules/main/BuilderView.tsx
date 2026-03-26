import Canvas from '@/components/Canvas';
import SideMenu from '@/components/SideMenu';
import { BUILDER_VIEW_CY } from '@/config/selectors';

const BuilderView = (): JSX.Element => (
  <div data-cy={BUILDER_VIEW_CY} style={{ height: '100%', display: 'flex' }}>
    <SideMenu />
    <Canvas />
  </div>
);

export default BuilderView;
