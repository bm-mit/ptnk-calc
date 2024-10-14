"use client";

import "mathlive";
import { useState } from "react";
import { BoxedExpression, ComputeEngine } from "@cortex-js/compute-engine";
import { Button } from "@/components/ui/button";
import MathExpressionViewer from "@/components/MathExpressionViewer/MathExpressionViewer";
import { ScrollArea } from "@storybook/core/components";
import { Calculation } from "@/types/calculation.type";
import { FaAngleDoubleUp } from "react-icons/fa";

const ce = new ComputeEngine();

export default function MathExpressionEditor() {
  const [expression, setExpression] = useState<string>("");
  const parsedExpression = ce.parse(expression);
  const [calculations, setCalculations] = useState<Calculation[]>([]);

  const mapExpression = (expression: BoxedExpression) => {
    return expression.isValid ? expression.latex : "\\text{Invalid expression}";
  };

  const saveExpression = () => {
    if (!parsedExpression.isValid) return;
    if (expression === "") return;

    setCalculations([
      ...calculations,
      {
        expression: ce.parse(expression),
        result: parsedExpression.evaluate(),
      },
    ]);
  };

  return (
    <div className="flex flex-col gap-4">
      <math-field
        style={{ display: "block" }}
        onInput={(event) => setExpression(event.currentTarget.value)}
      >
        {expression}
      </math-field>

      <div className="grid grid-cols-[auto_1fr] items-center">
        <p>Answer</p>
        <MathExpressionViewer>
          {mapExpression(parsedExpression.evaluate())}
        </MathExpressionViewer>

        <p>Simplify</p>
        <MathExpressionViewer>
          {mapExpression(parsedExpression.simplify())}
        </MathExpressionViewer>
      </div>

      <Button
        variant="default"
        size="lg"
        className="w-full"
        onClick={saveExpression}
      >
        Save
      </Button>

      <div>
        <h4 className="my-2 text-sm font-medium leading-none">Calculations</h4>
        <ScrollArea className="gap-2">
          {calculations
            .map((calculation, index) => (
              <div className="grid grid-cols-[1fr_auto] my-1 gap-1" key={index}>
                <div
                  key={index}
                  className="flex flex-col border rounded-lg p-2"
                >
                  <div className="content text-lg">
                    <MathExpressionViewer>
                      {mapExpression(calculation.expression)}
                    </MathExpressionViewer>
                  </div>

                  <div className="content self-end text-sm">
                    <MathExpressionViewer>
                      {mapExpression(calculation.result)}
                    </MathExpressionViewer>
                  </div>
                </div>

                <Button variant="secondary" className="h-full">
                  <FaAngleDoubleUp
                    onClick={() => setExpression(calculation.expression.latex)}
                  />
                </Button>
              </div>
            ))
            .reverse()}
        </ScrollArea>
      </div>
    </div>
  );
}
