import React from 'react'
import { Button } from './ui/button'
import AnimatedCounter from './AnimatedCounter'

export default function TrustedBySection() {
  const partners = ["Skill Hub", "Digital India", "Startup", "AICTE", "NSDC"];
  
  return (
    <section className="bg-white py-12 border-t-2 border-[#0A2342]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-extrabold tracking-widest text-[#0A2342]">
            TRUSTED BY LEARNERS & PARTNERS
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent mx-auto mt-3"></div>
        </div>

        <div className="mt-8 overflow-hidden relative">
          <div className="flex animate-scroll gap-16 items-center">
            {[...partners, ...partners, ...partners, ...partners].map((name, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-md bg-[#F4F7FB] text-[#0A2342] font-semibold text-xl shadow-sm whitespace-nowrap flex-shrink-0"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 12s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-12">
          {[
            { v: '10K+', l: 'Active Learners' }, 
            { v: '250+', l: 'Mentors & Experts' }, 
            { v: '120+', l: 'Industry Partners' }, 
            { v: '98%', l: 'Success Rate' }
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl font-extrabold text-[#FF7A00]">
                <AnimatedCounter 
                  value={s.v} 
                  suffix={s.v.includes('K') ? 'K+' : s.v.includes('%') ? '%' : '+'} 
                />
              </div>
              <div className="mt-2 text-[#0A2342]/70">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-[#FF7A00] text-[#0A2342] hover:bg-[#ff8f2a] px-10 py-5 text-lg font-bold rounded-xl"
            onClick={() => window.open('https://forms.gle/DyDigMebuEbwED347', '_blank')}
          >
            Join the Revolution
          </Button>
        </div>
      </div>
    </section>
  )
}
