import { BrowserRouter, Route, Routes } from 'react-router-dom'
import config from './utils/config'
import Login from './pages/Login/Login'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import EmailSent from './pages/EmailSent/EmailSent'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import Dashboard from './pages/Dashboard/Dashboard'
import Businesses from './pages/Businesses/Businesses'
import AddBusiness from './pages/AddBusiness/AddBusiness'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={config.baseUrl} element={<Login />} />

        <Route path={`${config.baseUrl}forgot-password`} element={<ForgotPassword />}/>
        <Route path={`${config.baseUrl}email-sent`} element={<EmailSent />}/>
        <Route path={`${config.baseUrl}reset-password`} element={<ResetPassword />}/>
        <Route path={`${config.baseUrl}dashboard`} element={<Dashboard />} />
        <Route path={`${config.baseUrl}businesses`} element={<Businesses />} />
        <Route path={`${config.baseUrl}add-business`} element={<AddBusiness />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
