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

function StatCard({ value, label, change }) {
  return (
    <article className="stat-card">
      <div className="stat-top">
        <strong>{value}</strong>
        <span>◉</span>
      </div>
      <b>{label}</b>
      <p>
        <em>{change}</em> v/s last 30 days
      </p>
    </article>
  )
}

function CampaignRow({ name, index }) {
  return (
    <div className="table-row" key={`${name}-${index}`}>
      <span className="campaign-name">
        <span className="thumb">▧</span>
        <b>{name}</b>
      </span>
      <span>Restaurant</span>
      <span className="creator-stack">
        <i>SC</i>
        <i>MC</i>
        <i>+3</i>
      </span>
      <span>428</span>
      <span className="status">Active</span>
      <span className="more">•••</span>
    </div>
  )
}

function CampaignTable() {
  return (
    <div className="campaign-table">
      <div className="table-head">
        <span>Campaign</span>
        <span>Business</span>
        <span>Creators</span>
        <span>Redemptions</span>
        <span>Status</span>
        <span />
      </div>
      {campaigns.map((name, index) => (
        <CampaignRow key={`${name}-${index}`} name={name} index={index} />
      ))}
    </div>
  )
}

function QuickActions() {
  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <button className="olive">＋ Create Offer</button>
      <button className="gold">＋ Add Creator</button>
      <button className="red">＋ Add Restaurant</button>
    </div>
  )
}

function TopCampaigns() {
  return (
    <div>
      <h2>Top Campaigns</h2>
      <div className="simple-list">
        {topCampaigns.map((campaign, index) => (
          <div key={campaign.name}>
            <span className="rank">{index + 1}</span>
            <span className="thumb">▧</span>
            <b>{campaign.name}</b>
            <strong>{campaign.value}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

function RecentActivity() {
  return (
    <div>
      <h2>Recent Activity</h2>
      <div className="simple-list activity-list">
        {[1, 2, 3].map((item) => (
          <div key={item}>
            <span className="thumb">▧</span>
            <b>Maya Chen</b>
            <span>claimed an offer</span>
            <small>2 mins ago</small>
          </div>
        ))}
      </div>
    </div>
  )
}

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
          <div className="welcome-art">
            Good<br />
            Food<br />
            <em>Brighter<br />Lives</em>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="campaign-section">
          <div className="section-heading">
            <h2>Active Campaigns</h2>
            <button>View All →</button>
          </div>
          <div className="campaign-layout">
            <CampaignTable />
            <QuickActions />
          </div>
        </section>

        <section className="bottom-grid">
          <TopCampaigns />
          <RecentActivity />
          <div className="campaign-cta">
            <h2>
              Empowering <span>Local Businesses</span> Through{' '}
              <span>Real Connections</span>
            </h2>
            <button>＋ Create Campaign</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
