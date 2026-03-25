import { FORMULA_BY_KEY } from '@/components/formulaByKey';

import Molecule from './Molecule';

const CarbonDioxide = (): JSX.Element => (
  <Molecule number={2} formula={FORMULA_BY_KEY.carbonDioxide} />
);

export default CarbonDioxide;
