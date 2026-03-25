import { FORMULA_BY_KEY } from '@/components/formulaByKey';

import FormulaEntity from './FormulaEntity';

const CarbonDioxide = (): JSX.Element => (
  <FormulaEntity
    number={2}
    formula={FORMULA_BY_KEY.carbonDioxide}
    caption="Carbon Dioxide"
  />
);

export default CarbonDioxide;
