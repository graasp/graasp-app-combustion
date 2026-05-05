import { FORMULA_BY_KEY } from '@/components/formulaByKey';
import { O2_GREEN } from '@/constants/css';

import FormulaEntity from './FormulaEntity';

const Oxygen = ({ coefficient }: { coefficient: number }): JSX.Element => (
  <FormulaEntity
    coefficient={coefficient}
    formula={FORMULA_BY_KEY.oxygen}
    caption="Dioxygen"
    color={O2_GREEN}
  />
);

export default Oxygen;
