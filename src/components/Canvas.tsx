import FormulaContainer from './canvas/FormulaContainer';
import Interaction from './canvas/Interaction';

const Canvas = (): JSX.Element => (
  <div style={{ height: '100%', width: '75vw' }}>
    <FormulaContainer />
    <Interaction />
  </div>
);

export default Canvas;
