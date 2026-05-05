import { FORMULA_BY_KEY } from '@/components/formulaByKey';
import { FORMULA_OXYGEN } from '@/constants/css';

import FormulaEntity from './FormulaEntity';

const Oxygen = ({ coefficient }: { coefficient: number }): JSX.Element => (
  <FormulaEntity
    coefficient={coefficient}
    formula={FORMULA_BY_KEY.oxygen}
    caption="Dioxygen"
    color={FORMULA_OXYGEN}
  />
);

export default Oxygen;
