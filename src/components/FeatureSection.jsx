import React from 'react'
import { Check } from 'lucide-react'

const FeatureBlock = ({ title, subtitle, description, bullets, color = 'blue' }) => {
  const colorClasses = color === 'orange' ? 'from-orange-50 to-white' : 'from-blue-50 to-white'
  return (
    <div className={`rounded-2xl border border-slate-200 bg-gradient-to-b ${colorClasses} p-6`}> 
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{subtitle}</p>
      <p className="mt-3 text-slate-700">{description}</p>
      <ul className="mt-4 space-y-2 text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-none text-orange-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const FeatureSection = () => {
  const groups = [
    {
      title: 'Complete Project Management',
      subtitle: 'End-to-end project lifecycle control',
      description:
        'From initial bid to final warranty, manage every aspect of your construction projects with comprehensive tracking and reporting.',
      bullets: ['Project phases & tasks', 'Change order management', 'Progress tracking'],
      color: 'blue',
    },
    {
      title: 'Advanced Financial Management',
      subtitle: 'Real-time profitability & cash flow control',
      description:
        'Live job costing, purchase order management, vendor tracking, and automated QuickBooks integration for complete financial visibility.',
      bullets: ['Real-time job costing', 'Purchase order system', 'Automated invoicing'],
      color: 'orange',
    },
    {
      title: 'Mobile Field Operations',
      subtitle: 'Your crew stays connected anywhere',
      description:
        'Complete offline functionality with time tracking, daily reports, photo documentation, and equipment management from the field.',
      bullets: ['Offline capability', 'Daily reporting', 'Equipment tracking'],
      color: 'blue',
    },
    {
      title: 'Legal & Compliance Suite',
      subtitle: 'Stay compliant and protected',
      description:
        'Comprehensive safety management, permit tracking, bond & insurance management, warranty systems, and OSHA compliance automation.',
      bullets: ['Safety management', 'Permit tracking', 'Insurance management'],
      color: 'orange',
    },
    {
      title: 'Resource & Equipment Management',
      subtitle: 'Optimize your assets and workforce',
      description:
        'Full equipment fleet management, crew scheduling, material tracking, and utilization optimization with maintenance scheduling.',
      bullets: ['Equipment fleet management', 'Crew optimization', 'Maintenance scheduling'],
      color: 'blue',
    },
    {
      title: 'Specialized Construction Services',
      subtitle: 'Industry-specific tools and workflows',
      description:
        'Public procurement & bidding, service dispatch, environmental permitting, warranty management, and vendor relationship management.',
      bullets: ['Public bidding', 'Service dispatch', 'Warranty management'],
      color: 'orange',
    },
    {
      title: 'Client Communication & Support',
      subtitle: 'Keep stakeholders informed and engaged',
      description:
        'Client portals, automated progress updates, email marketing, knowledge base, and integrated support systems.',
      bullets: ['Client portals', 'Automated updates', 'Integrated support'],
      color: 'blue',
    },
    {
      title: 'Automation & Integrations',
      subtitle: 'Streamline operations with smart workflows',
      description:
        'Calendar integration, automated workflows, QuickBooks sync, email marketing, and comprehensive reporting dashboards.',
      bullets: ['Workflow automation', 'Calendar sync', 'Smart reporting'],
      color: 'orange',
    },
  ]

  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Everything you need to run profitable projects</h2>
          <p className="mt-3 text-slate-600">Orange and deep blue accents reinforce clarity and trust</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <FeatureBlock key={g.title} {...g} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
