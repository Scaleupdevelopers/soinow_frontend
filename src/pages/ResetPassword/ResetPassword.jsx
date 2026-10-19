import { useState } from 'react'
import { Link } from 'react-router-dom'
import config from '../../utils/config'
import AuthLayout from '../../layouts/AuthLayout'
import PasswordField from '../../components/common/PasswordField'
import '../PasswordRecovery.css'

function ResetPassword() {
  const [values, setValues] = useState({ newPassword: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [isResetSuccessful, setIsResetSuccessful] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = {}

    if (!values.newPassword.trim()) {
      nextErrors.newPassword = 'New password is required.'
    }

    if (!values.confirmPassword.trim()) {
      nextErrors.confirmPassword = 'Please confirm your new password.'
    } else if (values.newPassword !== values.confirmPassword) {
      nextErrors.confirmPassword = 'Passwords do not match.'
    }

    setErrors(nextErrors)

    const firstInvalidField = Object.keys(nextErrors)[0]

    if (firstInvalidField) {
      event.currentTarget.elements.namedItem(firstInvalidField).focus()
      return
    }

    // Frontend preview: move this transition after a successful reset API response.
    setValues({ newPassword: '', confirmPassword: '' })
    setIsResetSuccessful(true)
  }

  if (isResetSuccessful) {
    return (
      <AuthLayout className="recovery-page reset-success-page">
        <div role="status">
          <h1>Password Reset Successful</h1>
          <p className="subtitle">
            Your password has been reset. You can now sign in to your SoiNow
            Account with your new password.
          </p>
        </div>
        <div className="recovery-actions">
          <Link className="login-button reset-success-button" to={config.baseUrl}>
            Back to Login
          </Link>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout className="recovery-page">
      <h1>Create a new password</h1>
      <p className="subtitle">Create a new password for your SoiNow Account</p>
      <form className="login-form recovery-form" onSubmit={handleSubmit} noValidate>
        <PasswordField
          id="newPassword"
          label="New Password"
          value={values.newPassword}
          onChange={handleChange}
          error={errors.newPassword}
          autoComplete="new-password"
        />
        <PasswordField
          id="confirmPassword"
          label="Confirm new Password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          autoComplete="new-password"
        />
        <button className="login-button" type="submit">
          Reset Password
        </button>
      </form>
    </AuthLayout>
  )
}

export default ResetPassword
