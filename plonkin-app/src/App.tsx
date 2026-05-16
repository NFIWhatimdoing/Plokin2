import Hero from './components/Hero'
import Navbar from './components/Navbar'
import HowItWorks from './components/HowItWorks'
import RoleCategories from './components/RoleCategories'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bone">
      <Navbar />
      <Hero />
      <HowItWorks />
      <RoleCategories />
      <SocialProof />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
