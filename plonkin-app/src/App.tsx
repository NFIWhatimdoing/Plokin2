import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import RoleCategories from './components/RoleCategories'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bone">
      <Hero />
      <HowItWorks />
      <RoleCategories />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
