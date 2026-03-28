import { FORMULA_BY_KEY } from '@/components/formulaByKey';

import FormulaEntity from './FormulaEntity';

const CarbonDioxide = ({
  coefficient,
}: {
  coefficient: number;
}): JSX.Element => (
  <FormulaEntity
    coefficient={coefficient}
    formula={FORMULA_BY_KEY.carbonDioxide}
    caption="Carbon Dioxide"
  />
);

export default CarbonDioxide;
