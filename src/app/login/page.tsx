
'use client'

import { useState } from 'react'
import { supabase } from '@/src/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setMessage('Błąd logowania: ' + error.message)
    } else {
      setMessage('Zalogowano poprawnie ✅')
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Logowanie CRM</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: 10 }}
      />

      <button onClick={handleLogin}>Zaloguj</button>

      <p>{message}</p>
    </div>
  )
}
