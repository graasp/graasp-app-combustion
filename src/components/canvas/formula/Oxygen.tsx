import { FORMULA_BY_KEY } from '@/components/formulaByKey';
import { FORMULA_OXYGEN } from '@/constants/css';

import FormulaEntity from './FormulaEntity';

const Oxygen = (): JSX.Element => (
  <FormulaEntity
    number={0}
    formula={FORMULA_BY_KEY.oxygen}
    caption="Oxygen"
    color={FORMULA_OXYGEN}
  />
);

export default Oxygen;
