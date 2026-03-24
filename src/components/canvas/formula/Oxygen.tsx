import Molecule from './Molecule';

const Oxygen = (): JSX.Element => {
  const OxygenFormula = (
    <>
      O<sub>2</sub>
    </>
  );

  return <Molecule number={0} formula={OxygenFormula} />;
};

export default Oxygen;
