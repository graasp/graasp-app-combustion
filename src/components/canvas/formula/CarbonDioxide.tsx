import { FORMULA_BY_KEY } from '@/components/formulaByKey';
import { CO2_RED } from '@/constants/css';

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
    color={CO2_RED}
  />
);

export default CarbonDioxide;
