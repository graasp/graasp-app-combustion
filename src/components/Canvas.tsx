import FormulaContainer from './canvas/FormulaContainer';
import InteractionContainer from './canvas/InteractionContainer';

const Canvas = (): JSX.Element => (
  <div style={{ height: '100%', width: '75vw' }}>
    <FormulaContainer />
    <InteractionContainer />
  </div>
);

export default Canvas;
