import { useContextSelector } from 'use-context-selector'

import {
  LoginContainer,
} from './styles'
import { AuthContext } from '../../stores/contexts/authStore'
import { useState } from 'react'

export function Login() {
  const signIn = useContextSelector(
    AuthContext,
    (context) => {
      return context.signIn
    },
  )

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin() {
    await signIn({ email, password })
  }

  return (
    <div>
      <LoginContainer>
        <form action="">
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </LoginContainer>
    </div>
  )
}
