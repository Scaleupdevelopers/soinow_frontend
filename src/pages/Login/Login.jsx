import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import config from '../../utils/config'
import AuthLayout from '../../layouts/AuthLayout'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target

    setValues((current) => ({ ...current, [name]: value }))

    if (value.trim()) {
      setErrors((current) => ({ ...current, [name]: '' }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = {}

    if (!values.email.trim()) {
      nextErrors.email = 'Email address is required.'
    } else if (!event.currentTarget.elements.email.validity.valid) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!values.password.trim()) {
      nextErrors.password = 'Password is required.'
    }

    setErrors(nextErrors)

    const firstInvalidField = Object.keys(nextErrors)[0]

    if (firstInvalidField) {
      event.currentTarget.elements.namedItem(firstInvalidField).focus()
    }

    if (!firstInvalidField) navigate(`${config.baseUrl}dashboard`)
  }

  return (
    <AuthLayout>
      <h1>Welcome Back</h1>
      <p className="subtitle">Sign in to your SoiNow Account</p>
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">Email Address</label>
        <div className="email-field">
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p id="email-error" className="field-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <label htmlFor="password">Password</label>
        <div className="password-field">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? 'password-error' : undefined}
            placeholder="Enter your password"
          />
          <button
            type="button"
            className="password-toggle"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
            aria-controls="password"
            onClick={() => setShowPassword((visible) => !visible)}
          >
            <svg
              className="password-eye-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
              {showPassword && <path d="M3 3l18 18" />}
            </svg>
          </button>
        </div>
        {errors.password && (
          <p id="password-error" className="field-error" role="alert">
            {errors.password}
          </p>
        )}
        <Link className="forgot-link" to={`${config.baseUrl}forgot-password`}>
          Forgot Password?
        </Link>
        <button className="login-button" type="submit">
          Log In
        </button>
      </form>
    </AuthLayout>
  )
}

export default Login
