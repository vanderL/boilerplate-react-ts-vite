import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { AppProvider } from './stores/contexts'
import { Router } from './Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  )
}
