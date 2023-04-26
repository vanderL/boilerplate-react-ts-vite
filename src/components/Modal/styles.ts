import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray900']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['white100']};
      color: ${(props) => props.theme['gray900']};
      padding: 1rem;
      &::placeholder {
        color: ${(props) => props.theme['purple500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme['purple500']};
      color: ${(props) => props.theme.white100};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['purple100']};
        transition: background-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['white100']};
`

export const ExampleType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface ExampleTypeButtonProps {
  variant: 'addition' | 'subtraction'
}

export const ExampleTypeButton = styled(
  RadioGroup.Item,
) <ExampleTypeButtonProps>`
  background: ${(props) => props.theme['purple500']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['white100']};
  svg {
    color: ${(props) =>
    props.variant === 'addition'
      ? props.theme['gray900']
      : props.theme['white100']};
  }
  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme.purple500};
  }
  &[data-state='checked'] {
    color: ${(props) => props.theme.white100};
    background: ${(props) =>
    props.variant === 'addition'
      ? props.theme['purple100']
      : props.theme['purple100']};
  }
  svg {
    color: ${(props) => props.theme.white100};
  }
`