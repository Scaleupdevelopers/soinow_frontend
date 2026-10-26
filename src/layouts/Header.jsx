import { useState } from 'react'
import '../pages/Dashboard/Dashboard.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedVenue, setSelectedVenue] = useState('Restaurant')
  const venues = ['Restaurant', 'Saloon', 'Gym', 'Parlor']

  function handleVenueSelect(venue) {
    setSelectedVenue(venue)
    setIsOpen(false)
  }

  return (
    <header className="dashboard-header">
      <div className="venue-dropdown">
        <button
          className="venue-select"
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          onClick={() => setIsOpen((current) => !current)}
        >
          {selectedVenue}
          <svg
            className={`venue-chevron ${isOpen ? 'arrow-up' : ''}`}
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="m3 6 5 5 5-5" />
          </svg>
        </button>

        {isOpen && (
          <div className="venue-menu" role="listbox" aria-label="Select business type">
            {venues.map((venue) => (
              <button
                key={venue}
                className={venue === selectedVenue ? 'selected' : ''}
                type="button"
                role="option"
                aria-selected={venue === selectedVenue}
                onClick={() => handleVenueSelect(venue)}
              >
                {venue}
              </button>
            ))}
            <button className="add-venue-button" type="button">
              ＋ Add More
            </button>
          </div>
        )}
      </div>

      <div className="header-actions">
        <button className="round-button" aria-label="Notifications">
          ♟
        </button>
        <div className="avatar">SC</div>
      </div>
    </header>
  )
}

export default Header
