import { Link } from 'react-router-dom'
import config from '../../utils/config'

function BackToLogin() {
  return (
    <Link className="back-to-login" to={config.baseUrl}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 12H5m6-6-6 6 6 6" />
      </svg>
      <span>Back to <strong>Login</strong></span>
    </Link>
  )
}

export default BackToLogin
