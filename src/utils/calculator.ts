import { Classification } from "@/enums/classification";
import type { EquationTwo } from "@/types/equation-two";
import type { EquationThree } from "@/types/equation-three";

export const classify = (first: EquationTwo, second: EquationTwo) => {
  let result = Classification.Dependent;

  if (
    (first.a / second.a !== first.b / second.b)
    && !(second.a === second.b && second.a === 0) // gamb para resolver bug do caso em que os divisores são 0
  ) 
    result = Classification.Independent;

  else if (
    ((first.a / second.a === first.b / second.b) || (second.a == 0 && second.b == 0))
    && ((first.b / second.b !== first.c / second.c) && !(second.b == 0 && second.c == 0))
  ) 
    result = Classification.Inconsistent;

  return result;
}

export const calculateDeterminant = (
  first: EquationThree, 
  second: EquationThree, 
  third: EquationThree
) => {
  const rightMultiplications = 
    (first.x * second.y * third.z) +
    (first.y * second.z * third.x) +
    (first.z * second.x * third.y);

  const leftMultiplications = 
    (first.z * second.y * third.x) +
    (first.x * second.z * third.y) +
    (first.y * second.x * third.z);

  return rightMultiplications - leftMultiplications;
}