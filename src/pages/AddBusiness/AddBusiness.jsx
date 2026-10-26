import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../layouts/Header'
import Sidebar from '../../layouts/Sidebar'
import './AddBusiness.css'

function AddBusiness() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', category: '', website: '', instagram: '', facebook: '', description: '' })
  const [error, setError] = useState('')

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setError('')
  }

  function handleContinue(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.category) {
      setError('Business name and category are required.')
      return
    }
    setError('This step is ready. The next step will be added later.')
  }

  return (
    <div className="dashboard-shell businesses-shell">
      <Sidebar activeItem="Restaurants" />
      <main className="dashboard-main add-business-main">
        <Header />
        <section className="page-heading add-heading"><div><h1>Add Business</h1><p>Add basic information about the business</p></div></section>
        <div className="stepper">{['Business Info', 'Add Manager', 'Location', 'Other Details', 'Review'].map((step, index) => <div className={`step ${index === 0 ? 'current' : ''}`} key={step}><span>{index + 1}</span><b>{step}</b></div>)}</div>
        <form className="business-form" onSubmit={handleContinue}>
          <div className="upload-box"><div className="upload-icon">▧</div><p>Upload logo/image</p><small>JPG, PNG up to 5MB</small><button type="button">Upload Image</button></div>
          <div className="form-fields">
            <label>Business Name<input name="name" value={form.name} onChange={updateField} placeholder="Enter business name" /></label>
            <label>Business Category<select name="category" value={form.category} onChange={updateField}><option value="">Select Category</option><option>Restaurant</option><option>Saloon</option><option>Gym</option><option>Parlor</option></select></label>
            <label>Website<input name="website" value={form.website} onChange={updateField} placeholder="Enter" /></label>
            <div className="form-columns"><label>Instagram<input name="instagram" value={form.instagram} onChange={updateField} placeholder="Enter" /></label><label>Facebook<input name="facebook" value={form.facebook} onChange={updateField} placeholder="Enter" /></label></div>
            <label>Business Description<textarea name="description" value={form.description} onChange={updateField} placeholder="Tell us about the business............." /></label>
            {error && <p className="form-message">{error}</p>}
            <div className="form-actions"><button type="button" onClick={() => navigate('/businesses')}>Cancel</button><button className="primary-action" type="submit">Continue</button></div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default AddBusiness
