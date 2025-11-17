import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const ValueProp = () => {
  return (
    <section id="value" className="relative bg-white py-20 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Not Just Construction Management.
            <span className="block text-[#0b1e39]">A Financial Command Center.</span>
          </h2>
          <p className="mt-4 text-slate-600">
            While competitors focus on project management, BuildDesk owns financial intelligence - giving you the insights SMB contractors desperately need but can't get anywhere else
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Real-time job costing", "Unlimited users", "Financial-first approach"].map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-500" />
                <p className="font-medium">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProp
