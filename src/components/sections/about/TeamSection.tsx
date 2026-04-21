"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { TEAM_MEMBERS } from "@/lib/constants";

export function TeamSection() {
  return (
    <section className="bg-canvas-white py-section">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The people"
            heading="Meet the team"
          />
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {TEAM_MEMBERS.map((member) => (
            <StaggerItem key={member.name}>
              <div className="text-center group">
                {/* Avatar */}
                <div className="w-full aspect-square rounded-card overflow-hidden mb-5 transition-all duration-400 group-hover:shadow-[0_4px_24px_rgba(29,92,191,0.15)]">
                  <div className="w-full h-full bg-gradient-to-br from-ink via-ink-100 to-ink-200 flex items-center justify-center relative">
                    {/* Dot pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                      {Array.from({ length: 36 }).map((_, j) => (
                        <circle key={j} cx={`${((j % 6) * 16) + 10}%`} cy={`${(Math.floor(j / 6) * 16) + 10}%`} r="1.5" fill="white" />
                      ))}
                    </svg>
                    <span className="text-white/80 text-4xl font-heading font-bold select-none group-hover:text-signal-bright group-hover:scale-110 transition-all duration-400 relative z-10">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-signal-bright to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-400" />
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
