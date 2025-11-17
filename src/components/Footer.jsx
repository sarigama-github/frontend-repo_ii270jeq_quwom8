import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0b1e39] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-white/70">© {new Date().getFullYear()} Build Desk. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#value" className="hover:text-white">Why Build Desk</a>
            <a href="#" className="hover:text-white">Pricing</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
