import { useEffect, useRef } from "react";
import { MathfieldElement } from "mathlive";

export default function MathExpressionViewer({
  children = "",
}: {
  children?: string;
}) {
  const mathFieldRef = useRef<MathfieldElement | null>(null);

  useEffect(() => {
    if (mathFieldRef.current) {
      mathFieldRef.current.value = children;
      mathFieldRef.current.readOnly = true; // Make it non-editable
    }
  }, [children]);

  return (
    <math-field
      ref={mathFieldRef}
      style={{
        display: "block",
      }}
    ></math-field>
  );
}
