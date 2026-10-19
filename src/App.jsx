import { BrowserRouter, Route, Routes } from 'react-router-dom'
import config from './utils/config'
import Login from './pages/Login/Login'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import EmailSent from './pages/EmailSent/EmailSent'
import ResetPassword from './pages/ResetPassword/ResetPassword'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={config.baseUrl} element={<Login />} />

        <Route path={`${config.baseUrl}forgot-password`} element={<ForgotPassword />}/>
        <Route path={`${config.baseUrl}email-sent`} element={<EmailSent />}/>
        <Route path={`${config.baseUrl}reset-password`} element={<ResetPassword />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
