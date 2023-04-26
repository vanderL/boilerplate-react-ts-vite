import { useContextSelector } from 'use-context-selector'
import {
  LoginContainer,
} from './styles'
import { AuthContext } from '../../stores/contexts/authStore'
import { useState } from 'react'

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = useContextSelector(
    AuthContext,
    (context) => {
      return context.signIn
    }
  )

  async function handleLogin() {
    await signIn({ email, password })
  }

  return (
    <div>
      <LoginContainer>
        <h1>login</h1>
        <form action="">
          <input
            type="text"
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}

          />
          <input
            type="text"
            placeholder='email'
            onChange={(e) => setPassword(e.target.value)}

          />

          <button type="button" onClick={handleLogin}>
            login
          </button>
        </form>
      </LoginContainer>
    </div>
  )
}
