import { FORMULA_BY_KEY } from '@/components/formulaByKey';

import FormulaEntity from './FormulaEntity';

const Water = (): JSX.Element => (
  <FormulaEntity number={4} formula={FORMULA_BY_KEY.water} caption="Water" />
);

export default Water;
