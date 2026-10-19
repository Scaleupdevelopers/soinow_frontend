import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import config from '../../utils/config'
import AuthLayout from '../../layouts/AuthLayout'
import BackToLogin from '../../components/common/BackToLogin'
import '../PasswordRecovery.css'

function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedEmail = email.trim()
    const emailInput = event.currentTarget.elements.email

    if (!trimmedEmail || !emailInput.validity.valid) {
      setError(trimmedEmail ? 'Enter a valid email address.' : 'Email address is required.')
      emailInput.focus()
      return
    }

    setError('')
    navigate(`${config.baseUrl}email-sent`, {
      state: { email: trimmedEmail },
    })
  }

  return (
    <AuthLayout className="recovery-page">
      <h1>Reset your password</h1>
      <p className="subtitle">
        Enter your email address and we’ll send you a link to reset your password.
      </p>
      <form className="login-form recovery-form" onSubmit={handleSubmit} noValidate>
        <div className="recovery-field">
          <label htmlFor="reset-email">Email Address</label>
          <input
            id="reset-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              setError('')
            }}
            required
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'reset-email-error' : undefined}
          />
          {error && (
            <p id="reset-email-error" className="field-error" role="alert">
              {error}
            </p>
          )}
        </div>
        <button className="login-button" type="submit">
          Send Reset Link
        </button>
        <BackToLogin />
      </form>
    </AuthLayout>
  )
}

export default ForgotPassword
