"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { TEAM_MEMBERS, LEADERSHIP_MEMBERS } from "@/lib/constants";
import { SocialIcon } from "@/components/ui/SocialIcon";
import Image from "next/image";

export function TeamSection() {
  return (
    <section className="bg-canvas-white py-section">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The people"
            heading="Meet the team"
            subheading="A small team with a big mission: building digital products with soul."
          />
        </ScrollReveal>

        {/* Leadership Section */}
        <div className="max-w-4xl mx-auto mt-16 mb-24 flex flex-col gap-6">
          {LEADERSHIP_MEMBERS.map((leader, i) => (
            <ScrollReveal key={leader.name}>
              <div 
                className={`bg-canvas-white border border-canvas-border rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row gap-6 sm:gap-10 items-start relative ${
                  i % 2 !== 0 ? 'sm:ml-12 border-l-4 border-l-[#8B5CF6]' : 'sm:mr-12'
                }`}
              >
                {/* Avatar */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-full overflow-hidden bg-gradient-to-br from-ink via-ink-100 to-ink-200 flex items-center justify-center relative shadow-sm border-4 border-white outline outline-1 outline-canvas-border">
                  {leader.image ? (
                    <Image src={leader.image} alt={leader.name} fill sizes="(max-width: 768px) 100px, 128px" className="object-cover" />
                  ) : (
                    <>
                      {/* Dot pattern */}
                      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                        {Array.from({ length: 36 }).map((_, j) => (
                          <circle key={j} cx={`${((j % 6) * 16) + 10}%`} cy={`${(Math.floor(j / 6) * 16) + 10}%`} r="1.5" fill="white" />
                        ))}
                      </svg>
                      <span className="text-white/80 text-3xl sm:text-4xl font-heading font-bold select-none relative z-10">
                        {leader.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-ink text-xl sm:text-2xl font-bold">{leader.name}</h3>
                  <span className="bg-[#F3E8FF] text-[#7C3AED] text-[11px] font-bold px-2.5 py-1 rounded mt-2 inline-block uppercase tracking-wider">
                    {leader.roleBadge}
                  </span>
                  <p className="text-ink-300 text-[15px] leading-relaxed mt-4">
                    {leader.description}
                  </p>
                  <a 
                    href={leader.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-[#7C3AED] font-semibold text-sm mt-5 inline-flex items-center gap-1.5 hover:text-[#6D28D9] transition-colors"
                  >
                    <SocialIcon platform="LinkedIn" className="w-4 h-4 fill-current" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Employees Section */}
        <ScrollReveal>
          <div className="border-t border-canvas-border pt-16 mb-8 text-center">
            <h3 className="text-2xl font-heading font-semibold text-ink">Core Team</h3>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <StaggerItem key={member.name}>
              <div className="text-center group">
                {/* Avatar */}
                <div className="w-full aspect-square rounded-card overflow-hidden mb-5 transition-all duration-400 group-hover:shadow-[0_4px_24px_rgba(29,92,191,0.15)] relative">
                  <div className="w-full h-full bg-gradient-to-br from-ink via-ink-100 to-ink-200 flex items-center justify-center relative">
                    {member.image ? (
                      <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <>
                        {/* Dot pattern */}
                        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                          {Array.from({ length: 36 }).map((_, j) => (
                            <circle key={j} cx={`${((j % 6) * 16) + 10}%`} cy={`${(Math.floor(j / 6) * 16) + 10}%`} r="1.5" fill="white" />
                          ))}
                        </svg>
                        <span className="text-white/80 text-4xl font-heading font-bold select-none group-hover:text-signal-bright group-hover:scale-110 transition-all duration-400 relative z-10">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </>
                    )}
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-signal-bright to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-400 z-20" />
                  </div>
                </div>
                <h3 className="text-ink text-base font-semibold">{member.name}</h3>
                <p className="text-signal text-[13px] mt-0.5">{member.role}</p>
                <p className="text-ink-300 text-[13px] italic mt-1">{member.oneLiner}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
