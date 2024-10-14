import { BoxedExpression } from "@cortex-js/compute-engine";

export interface Calculation {
  expression: BoxedExpression;
  result: BoxedExpression;
}
