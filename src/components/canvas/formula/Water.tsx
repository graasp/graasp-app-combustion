import { FORMULA_BY_KEY } from '@/components/formulaByKey';

import Molecule from './Molecule';

const Water = (): JSX.Element => (
  <Molecule number={4} formula={FORMULA_BY_KEY.water} />
);

export default Water;
