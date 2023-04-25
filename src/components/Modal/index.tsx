import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'

import * as z from 'zod'

import {
  CloseButton,
  Content,
  Overlay,
  ExampleType,
  ExampleTypeButton,
} from './styles'
import { ExamplesContext } from '../../stores/contexts/counterStore'

const newExampleFormSchema = z.object({
  description: z.string(),
  valueOne: z.number(),
  valueTwo: z.number(),
  type: z.enum(['addition', 'subtraction']),
})

type NewExampleFormInputs = z.infer<typeof newExampleFormSchema>

export function NewExampleModal() {
  const createCount = useContextSelector(
    ExamplesContext,
    (context) => {
      return context.createCount
    },
  )

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewExampleFormInputs>({
    resolver: zodResolver(newExampleFormSchema),
    defaultValues: {
      type: 'addition',
    },
  })

  async function handleCreateNewExample(data: NewExampleFormInputs) {
    console.log('entrei');

    const { valueTwo, description, valueOne, type } = data

    const newExample = {
      description,
      valueTwo,
      valueOne,
      type,
      createdAt: new Date(),
    }

    await createCount(newExample)

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Novo Calculo</Dialog.Title>

        <CloseButton>
          <X />
        </CloseButton>

        <form action="" onSubmit={handleSubmit(handleCreateNewExample)}>
          <input
            {...register('description')}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            {...register('valueOne', { valueAsNumber: true })}
            type="number"
            placeholder="Valor 1"
            required
          />

          <input
            {...register('valueTwo', { valueAsNumber: true })}
            type="number"
            placeholder="Valor 2"
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <ExampleType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <ExampleTypeButton variant="addition" value="addition">
                    <ArrowCircleUp size={24} />
                    Adição
                  </ExampleTypeButton>
                  <ExampleTypeButton variant="subtraction" value="subtraction">
                    <ArrowCircleDown size={24} />
                    Subtração
                  </ExampleTypeButton>
                </ExampleType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Calcular
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}