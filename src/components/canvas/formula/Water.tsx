import Molecule from './Molecule';

const Water = (): JSX.Element => {
  const WaterFormula = (
    <>
      H<sub>2</sub>O
    </>
  );

  return <Molecule number={4} formula={WaterFormula} />;
};

export default Water;
