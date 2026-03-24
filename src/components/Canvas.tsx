import Formula from './canvas/Formula';
import Interaction from './canvas/Interaction';

const Canvas = (): JSX.Element => (
  <div style={{ height: '100%', width: '75vw' }}>
    <Formula />
    <Interaction />
  </div>
);

export default Canvas;
