import React from 'react'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Hero />
      <ValueProp />
      <FeatureSection />
      <Footer />
    </div>
  )
}

export default App
