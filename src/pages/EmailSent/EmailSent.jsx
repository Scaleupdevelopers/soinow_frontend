import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AuthLayout from '../../layouts/AuthLayout'
import BackToLogin from '../../components/common/BackToLogin'
import '../PasswordRecovery.css'

function EmailSent() {
  const location = useLocation()
  const email = location.state?.email
  const [remainingSeconds, setRemainingSeconds] = useState(0)

  useEffect(() => {
    if (remainingSeconds === 0) {
      return
    }

    const timeout = window.setTimeout(() => {
      setRemainingSeconds((current) => current - 1)
    }, 1000)

    return () => window.clearTimeout(timeout)
  }, [remainingSeconds])

  return (
    <AuthLayout className="recovery-page email-sent-page">
      <h1>Check your email</h1>
      <p className="subtitle">
        We’ve sent a password link to
        <br />
        <strong>{email || 'your email address'}</strong>
      </p>
      <div className="recovery-actions">
        <p className="resend-prompt">Didn’t receive the email?</p>
        <button
          className="login-button"
          type="button"
          disabled={remainingSeconds > 0}
          onClick={() => setRemainingSeconds(30)}
        >
          {remainingSeconds > 0 ? `Resend Email (${remainingSeconds}s)` : 'Resend Email'}
        </button>
        <BackToLogin />
      </div>
    </AuthLayout>
  )
}

export default EmailSent
