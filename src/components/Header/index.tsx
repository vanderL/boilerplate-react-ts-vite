import { HeaderContainer, HeaderContent, NewExampleButton } from './styles'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewExampleModal } from '../Modal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewExampleButton>Novo Calculo</NewExampleButton>
          </Dialog.Trigger>

          <NewExampleModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
