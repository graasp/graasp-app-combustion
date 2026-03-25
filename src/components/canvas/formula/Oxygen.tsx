import { FORMULA_BY_KEY } from '@/components/formulaByKey';

import Molecule from './Molecule';

const Oxygen = (): JSX.Element => (
  <Molecule number={0} formula={FORMULA_BY_KEY.oxygen} />
);

export default Oxygen;
