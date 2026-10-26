import '../pages/Dashboard/Dashboard.css'
import { useNavigate } from 'react-router-dom'

const navItems = [
  ['dashboard', 'Dashboard'], ['restaurant', 'Restaurants'], ['creators', 'Creators'], ['tag', 'Offers'],
  ['megaphone', 'Campaigns'], ['gift', 'Redemptions'], ['ticket', 'Claims'], ['dollar', 'Commissions'],
  ['chart', 'Reports'], ['invoice', 'Invoices'],
]

function SidebarIcon({ name }) {
  const paths = {
    dashboard: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    restaurant: <><path d="M4 10h16v10H4z" /><path d="M2 10h20M6 10V7a6 6 0 0 1 12 0v3M8 15h8" /></>,
    creators: <><circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="9" r="2.5" /><path d="M2.5 20c.4-4 2.5-6 6.5-6s6.1 2 6.5 6M15 14c3.2-.2 5.2 1.8 5.5 5" /></>,
    tag: <path d="m3 12 9-9h7v7l-9 9-7-7Zm11-5h.01" />,
    megaphone: <><path d="m3 11 16-6v14L3 13v-2Z" /><path d="M7 14l2 6M19 9h2" /></>,
    gift: <><rect x="3" y="9" width="18" height="12" rx="1" /><path d="M12 9v12M2 9h20M12 9H7a2 2 0 1 1 2-2c0 2 3 2 3 2Zm0 0h5a2 2 0 1 0-2-2c0 2-3 2-3 2Z" /></>,
    ticket: <path d="M4 6h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4V6Zm8 0v12" />,
    dollar: <><circle cx="12" cy="12" r="9" /><path d="M14.5 9.5c-.5-2-4.5-2-5 0-.4 1.8 1.2 2.2 2.5 2.5 1.3.3 2.9.7 2.5 2.5-.5 2-4.5 2-5 0M12 6v12" /></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    invoice: <><path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3Z" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.1h-2.6v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.5-1H6v-2h.5A1.7 1.7 0 0 0 8 11a1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V6H15v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v2h-.1a1.7 1.7 0 0 0-1.5 1Z" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1 .7-1.5 1-1.5 2M12 16h.01" /></>,
  }
  return <svg className="sidebar-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Sidebar({ activeItem = 'Dashboard', onItemChange }) {
  const navigate = useNavigate()

  function handleItemChange(label) {
    const routes = {
      Dashboard: '/dashboard',
      Restaurants: '/businesses',
    }

    if (routes[label]) {
      navigate(routes[label])
    }

    if (onItemChange) {
      onItemChange(label)
    }
  }

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-logo">Soi<span>Now</span></div>
      <nav className="dashboard-nav" aria-label="Main navigation">
        {navItems.map(([icon, label]) => (
          <button key={label} className={`nav-item ${activeItem === label ? 'active' : ''}`} onClick={() => handleItemChange(label)}>
            <span className="nav-icon"><SidebarIcon name={icon} /></span><span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-divider" />
      <button className={`nav-item ${activeItem === 'Settings' ? 'active' : ''}`} onClick={() => handleItemChange('Settings')}><span className="nav-icon"><SidebarIcon name="settings" /></span><span>Settings</span></button>
      <button className={`nav-item ${activeItem === 'Help' ? 'active' : ''}`} onClick={() => handleItemChange('Help')}><span className="nav-icon"><SidebarIcon name="help" /></span><span>Help</span></button>
    </aside>
  )
}

export default Sidebar
