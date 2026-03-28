import FormulaContainer from './canvas/FormulaContainer';
import InteractionContainer from './canvas/InteractionContainer';
import Title from './canvas/Title';

const Canvas = (): JSX.Element => (
  <div style={{ height: '100%', width: '75vw' }}>
    <Title />
    <FormulaContainer />
    <InteractionContainer />
  </div>
);

export default Canvas;
