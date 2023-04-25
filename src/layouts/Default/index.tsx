import { LayoutContainer } from './styles';
import { Header } from '../../components/Header';
import { Outlet } from 'react-router-dom';

export function Default() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}