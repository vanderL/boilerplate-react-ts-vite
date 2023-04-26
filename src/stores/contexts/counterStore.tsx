import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../../lib/axios'

interface Result {
  description: string
  type: 'addition' | 'subtraction'
  valueOne: number
  valueTwo: number
  createdAt: Date
}

interface CreateResultInput {
  description: string
  valueOne: number
  valueTwo: number
  type: 'addition' | 'subtraction'
}

interface ExampleContextType {
  results: Result[]
  result: Result
  fetchExample: (query?: string) => Promise<void>
  createCount: (data: CreateResultInput) => Promise<void>
}

interface CounterStoreProviderProps {
  children: ReactNode
}

export const ExamplesContext = createContext<ExampleContextType>(
  {} as ExampleContextType,
)

export function ExampleProvider({ children }: CounterStoreProviderProps) {
  const [results, setResults] = useState<Result[]>([])
  const [result, setResult] = useState<Result>({
    description: 'test',
    type: 'addition',
    valueOne: 1,
    valueTwo: 2,
    createdAt: new Date(),
  })

  const fetchExample = useCallback(async (query?: string) => {
    const response = await api.get('/lista', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setResult(response.data)
  }, [])

  const createCount = useCallback(
    async (data: CreateResultInput) => {
      const { valueOne, description, valueTwo, type } = data

      console.log('aqui', valueOne, description, valueTwo, type)

      // const response = await api.post('example', {
      //   description,
      //   valueOne,
      //   valueTwo,
      //   type,
      //   createdAt: new Date(),
      // })

      // setResults((oldState) => [response.data, ...oldState])


      const response = {
        description,
        valueOne,
        valueTwo,
        type,
        createdAt: new Date(),
      }
      setResults((oldState) => [response, ...oldState])

      setResult(response)
    },
    [],
  )

  useEffect(() => {
    fetchExample()
  }, [fetchExample])
  return (
    <ExamplesContext.Provider
      value={{ result, fetchExample, createCount, results }}
    >
      {children}
    </ExamplesContext.Provider>
  )
}