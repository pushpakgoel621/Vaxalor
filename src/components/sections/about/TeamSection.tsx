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
                {/* Avatar placeholder */}
                <div className="w-full aspect-square rounded-card bg-canvas-alt border border-canvas-border overflow-hidden mb-5 grayscale transition-all duration-400 group-hover:grayscale-0">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-ink-400 text-4xl font-heading font-bold select-none group-hover:text-signal transition-colors duration-400">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
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
