import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../layouts/Header'
import Sidebar from '../../layouts/Sidebar'
import './Businesses.css'

const businesses = [
  { name: 'Luna Cafe', category: 'Food & Beverages', type: 'Restaurant', location: 'Bangkok', status: 'Active' },
  { name: 'Luna Cafe', category: 'Food & Beverages', type: 'Restaurant', location: 'Bangkok', status: 'Active' },
  { name: 'Luna Cafe', category: 'Food & Beverages', type: 'Restaurant', location: 'Bangkok', status: 'Active' },
  { name: 'Luna Cafe', category: 'Food & Beverages', type: 'Restaurant', location: 'Bangkok', status: 'Inactive' },
]

function Businesses() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ category: '', location: '', status: '' })
  const [openFilter, setOpenFilter] = useState('')

  const filteredBusinesses = useMemo(() => businesses.filter((business) => {
    const matchesSearch = business.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !filters.category || business.type === filters.category
    const matchesLocation = !filters.location || business.location === filters.location
    const matchesStatus = !filters.status || business.status === filters.status
    return matchesSearch && matchesCategory && matchesLocation && matchesStatus
  }), [filters, search])

  function updateFilter(name, value) {
    setFilters((current) => ({ ...current, [name]: value }))
    setOpenFilter('')
  }

  function FilterDropdown({ name, label, options }) {
    const isOpen = openFilter === name

    return (
      <div className="filter-dropdown">
        <button className="filter-button" type="button" aria-expanded={isOpen} onClick={() => setOpenFilter(isOpen ? '' : name)}>
          {filters[name] || label}
          <svg className={`filter-chevron ${isOpen ? 'arrow-up' : ''}`} viewBox="0 0 16 16" aria-hidden="true"><path d="m3 6 5 5 5-5" /></svg>
        </button>
        {isOpen && <div className="filter-menu">
          <button type="button" className={!filters[name] ? 'selected' : ''} onClick={() => updateFilter(name, '')}>{label}</button>
          {options.map((option) => <button key={option} type="button" className={filters[name] === option ? 'selected' : ''} onClick={() => updateFilter(name, option)}>{option}</button>)}
        </div>}
      </div>
    )
  }

  return (
    <div className="dashboard-shell businesses-shell">
      <Sidebar activeItem="Restaurants" />
      <main className="dashboard-main businesses-main">
        <Header />
        <section className="page-heading">
          <div><h1>Businesses</h1><p>Manage all businesses and their locations</p></div>
          <button className="primary-action" onClick={() => navigate('/add-business')}>＋ Add Business</button>
        </section>

        <section className="business-toolbar">
          <label className="business-search"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search businesses" /></label>
          <FilterDropdown name="category" label="Category" options={['Restaurant']} />
          <FilterDropdown name="location" label="Location" options={['Bangkok']} />
          <FilterDropdown name="status" label="Status" options={['Active', 'Inactive']} />
        </section>

        <section className="business-table">
          <div className="business-table-head"><span>Business</span><span>Category</span><span>Location</span><span>Status</span><span /></div>
          {filteredBusinesses.map((business, index) => <div className="business-row" key={`${business.name}-${index}`}><span className="business-name"><span className="business-thumb">▧</span><span><b>{business.name}</b><small>{business.category}</small></span></span><span>{business.type}</span><span>{business.location}</span><span><b className={`business-status ${business.status.toLowerCase()}`}>{business.status}</b></span><span className="business-more">•••</span></div>)}
          {!filteredBusinesses.length && <div className="empty-businesses">No businesses found.</div>}
        </section>
      </main>
    </div>
  )
}

export default Businesses
