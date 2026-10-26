import { useState } from 'react'
import Sidebar from '../../layouts/Sidebar'
import Header from '../../layouts/Header'
import './Dashboard.css'

const stats = [
  { value: '124', label: 'Active Businesses', change: '+12%' },
  { value: '86', label: 'Creators', change: '+8%' },
  { value: '2,428', label: 'Offer Redemption', change: '+24%' },
  { value: '$120', label: 'Commission Value', change: '+18%' },
]

const campaigns = ['Taste Local', 'Taste Local', 'Taste Local', 'Taste Local']

const topCampaigns = [
  { name: 'Taste Local', value: '428' },
  { name: 'Wellness Week', value: '312' },
  { name: 'Summer Bites', value: '196' },
]

function Dashboard() {
  const [active, setActive] = useState('Dashboard')

  return (
    <div className="dashboard-shell">
      <Sidebar activeItem={active} onItemChange={setActive} />
      <main className="dashboard-main">
        <Header />

        <section className="welcome-row">
          <div>
            <h1>Good Morning, <span>Som</span></h1>
            <p>Here’s what happening with SoiNow today.</p>
          </div>
          <div className="welcome-art">Good<br />Food<br /><em>Brighter<br />Lives</em></div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <div className="stat-top"><strong>{stat.value}</strong><span>◉</span></div>
              <b>{stat.label}</b>
              <p><em>{stat.change}</em> v/s last 30 days</p>
            </article>
          ))}
        </section>

        <section className="campaign-section">
          <div className="section-heading"><h2>Active Campaigns</h2><button>View All →</button></div>
          <div className="campaign-layout">
            <div className="campaign-table">
              <div className="table-head"><span>Campaign</span><span>Business</span><span>Creators</span><span>Redemptions</span><span>Status</span><span /></div>
              {campaigns.map((name, index) => (
                <div className="table-row" key={`${name}-${index}`}>
                  <span className="campaign-name"><span className="thumb">▧</span><b>{name}</b></span>
                  <span>Restaurant</span>
                  <span className="creator-stack"><i>SC</i><i>MC</i><i>+3</i></span>
                  <span>428</span><span className="status">Active</span><span className="more">•••</span>
                </div>
              ))}
            </div>
            <div className="quick-actions"><h3>Quick Actions</h3><button className="olive">＋ Create Offer</button><button className="gold">＋ Add Creator</button><button className="red">＋ Add Restaurant</button></div>
          </div>
        </section>

        <section className="bottom-grid">
          <div>
            <h2>Top Campaigns</h2>
            <div className="simple-list">
              {topCampaigns.map((campaign, index) => (
                <div key={campaign.name}><span className="rank">{index + 1}</span><span className="thumb">▧</span><b>{campaign.name}</b><strong>{campaign.value}</strong></div>
              ))}
            </div>
          </div>

          <div>
            <h2>Recent Activity</h2>
            <div className="simple-list activity-list">
              {[1, 2, 3].map((item) => (
                <div key={item}><span className="thumb">▧</span><b>Maya Chen</b><span>claimed an offer</span><small>2 mins ago</small></div>
              ))}
            </div>
          </div>

          <div className="campaign-cta">
            <h2>Empowering <span>Local Businesses</span> Through <span>Real Connections</span></h2>
            <button>＋ Create Campaign</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
