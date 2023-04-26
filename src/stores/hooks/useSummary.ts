import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { ExamplesContext } from '../contexts/counterStore';

export function useSammary() {
  const results = useContextSelector(ExamplesContext, (context) => { return context.results })

  const summary = useMemo(() => {
    return results.reduce(
      (acc, result) => {
        if (result.type === 'addition') {
          acc.total += (result.valueOne + result.valueTwo)

        } else {
          acc.total -= (result.valueOne + result.valueTwo)
        }

        return acc
      },
      {
        addition: 0,
        subtraction: 0,
        total: 0,
      }
    )
  }, [results])


  return summary
}
