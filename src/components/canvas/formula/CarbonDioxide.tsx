import Molecule from './Molecule';

const CarbonDioxide = (): JSX.Element => {
  const CarbonDioxideFormula = (
    <>
      CO<sub>2</sub>
    </>
  );

  return <Molecule number={2} formula={CarbonDioxideFormula} />;
};

export default CarbonDioxide;
