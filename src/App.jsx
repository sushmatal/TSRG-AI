import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import DashboardPage from './pages/DashboardPage'
import InsightsPage from './pages/InsightsPage'
import InsightDetailPage from './pages/InsightDetailPage'
import ResearchPage from './pages/ResearchPage'
import ContactPage from './pages/ContactPage'
import PodcastPage from './pages/PodcastPage'
import DonatePage from './pages/DonatePage'
import ExploreOurWorkPage from './pages/ExploreOurWorkPage'
import PartnersPage from './pages/PartnersPage'
import EventsPage from './pages/EventsPage'
import BenzodiazepinesPage from './pages/BenzodiazepinesPage'
import OpioidsPage from './pages/OpioidsPage'
import OutreachPage from './pages/OutreachPage'
import WFDWorkgroupsPage from './pages/WFDWorkgroupsPage'
import { 
  BlogPage,
  FAQsPage,
  GatewayToWorkPage,
  PIMSFormsPage,
  ScholarshipsPage,
  PublicationsPage
} from './pages/PlaceholderPages'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary/10 selection:text-primary">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* About */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/explore-our-work" element={<ExploreOurWorkPage />} />
          <Route path="/about/blog" element={<BlogPage />} />
          <Route path="/about/contact" element={<ContactPage />} />
          <Route path="/about/faqs" element={<FAQsPage />} />
          <Route path="/about/team" element={<TeamPage />} />
          <Route path="/about/partners" element={<PartnersPage />} />
          
          {/* Programs & Work */}
          <Route path="/programs" element={<ResearchPage />} />
          <Route path="/programs/dashboard" element={<DashboardPage />} />
          <Route path="/programs/gateway-to-work" element={<GatewayToWorkPage />} />
          <Route path="/programs/outreach" element={<OutreachPage />} />
          <Route path="/programs/podcasts" element={<PodcastPage />} />
          <Route path="/programs/pims-forms" element={<PIMSFormsPage />} />
          <Route path="/programs/scholarships" element={<ScholarshipsPage />} />
          <Route path="/programs/workgroups" element={<WFDWorkgroupsPage />} />
          
          {/* Insights */}
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<InsightDetailPage />} />
          <Route path="/insights/research" element={<ResearchPage />} />
          <Route path="/insights/research/benzodiazepines" element={<BenzodiazepinesPage />} />
          <Route path="/insights/research/opioids" element={<OpioidsPage />} />
          <Route path="/insights/events" element={<EventsPage />} />
          <Route path="/insights/publications" element={<PublicationsPage />} />
          
          {/* Get Involved */}
          <Route path="/get-involved/donate" element={<DonatePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
