import { FORMULA_BY_KEY } from '@/components/formulaByKey';

import FormulaEntity from './FormulaEntity';

const Water = ({ coefficient }: { coefficient: number }): JSX.Element => (
  <FormulaEntity
    coefficient={coefficient}
    formula={FORMULA_BY_KEY.water}
    caption="Water"
  />
);

export default Water;
