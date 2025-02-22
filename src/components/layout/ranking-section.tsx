"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRef } from "react";

type TeamRanking = {
  id: number;
  logo: string;
  firstName: string;
  lastName: string;
  matches: number;
  wins: number;
  losses: number;
  points: number;
  nr: number;
  bgColor: string;
};

const rankings: TeamRanking[] = [
  {
    id: 1,
    logo: "partners/india-masters.svg",
    firstName: "India",
    lastName: "Masters",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-[#EC7623] via-yellow-600",
  },
  {
    id: 2,
    logo: "partners/south-africa-masters.svg",
    firstName: "South Africa",
    lastName: "Masters",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-[#6ADFCF] via-[#6ADFCF]/50",
  },
  {
    id: 3,
    logo: "partners/west-indies-masters.svg",
    firstName: "West Indies",
    lastName: "Masters",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-[#A3383D] via-[#E4BE2F]-20%",
  },
  {
    id: 4,
    logo: "partners/australia-masters.svg",
    firstName: "Australia",
    lastName: "Masters",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-[#B7EE06] via-[#B7EE06]/50",
  },
  {
    id: 5,
    logo: "partners/sri-lanka-masters.svg",
    firstName: "Sri Lanka",
    lastName: "Masters",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-[#8E153C] via-[#8E153C]/60",
  },
  {
    id: 6,
    logo: "partners/england-masters.svg",
    firstName: "England",
    lastName: "Masters",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-[#418EC1] via-[#418EC1]/50",
  },
];

export function RankingSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      id="ranking"
      className="relative  w-full bg-foreground/5 py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-2 md:px-4">
        <div className="mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-[5rem] font-bold text-center uppercase tracking-tighter max-w-5xl mx-auto leading-tight md:leading-[6rem]">
            Tournament Standings
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header - Hide on mobile, show abbreviated version */}
          <div className="hidden md:grid grid-cols-[3fr,repeat(5,0.5fr)] gap-0 mb-8 px-8 text-foreground/80">
            <div></div>
            <div className="text-center border-l border-border/20 text-base">MAT</div>
            <div className="text-center border-l border-border/20 text-base">W</div>
            <div className="text-center border-l border-border/20 text-base">L</div>
            <div className="text-center border-l border-border/20 text-base">PTS</div>
            <div className="text-center border-l border-border/20 text-base">N/R</div>
          </div>

          {/* Mobile Header */}
          <div className="grid md:hidden grid-cols-[2fr,repeat(4,0.5fr)] gap-0 mb-4 px-2 text-foreground/80 ">
            <div></div>
            <div className="text-center text-xs">M</div>
            <div className="text-center text-xs">W</div>
            <div className="text-center text-xs">L</div>
            <div className="text-center text-xs">P</div>
          </div>

          {/* Rankings */}
          <div ref={containerRef} className="space-y-1 relative">
            {rankings.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-foreground/80 group hover:bg-foreground transition-all duration-300 h-16 md:h-20 rounded-e-sm border border-border"
                style={{
                  clipPath: "polygon(35px 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
                }}
              >
                {/* Hover Effects Container */}
                <div className="absolute inset-0 transition-all duration-300 group-hover:shadow-2xl group-hover:z-10">
                  {/* Background with curved edges */}
                  <div className="absolute inset-0 w-[50%] h-full">
                    <div
                      className={cn(
                        "absolute inset-0 opacity-90 transition-all duration-300",
                        team.bgColor,
                        "group-hover:opacity-100 group-hover:scale-[1.01]"
                      )}
                      style={{
                        clipPath: "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)",
                      }}
                    />
                  </div>

                  <div
                    className={cn(
                      "relative grid md:grid-cols-[3fr,repeat(5,0.5fr)] grid-cols-[2fr,repeat(4,0.5fr)] items-center gap-0 h-16 md:h-20",
                      "shadow-[0_4px_8px_-2px_rgba(0,0,0,0.2)]",
                      "transition-transform duration-300 group-hover:scale-[1.01]"
                    )}
                  >
                    {/* Team */}
                    <div className="relative flex items-center gap-2 h-16 md:h-20">
                      {/* Logo container with hover effect */}
                      <div
                        className="absolute left-0 top-0 w-24 md:w-32 h-16 md:h-20 bg-foreground transition-transform duration-300 group-hover:scale-[1.02]"
                        style={{
                          clipPath: "polygon(0 35px, 35px 0, 100% 0, 65% 100%, 0 100%)",
                        }}
                      >
                        <Image
                          src={team.logo}
                          alt={`${team.firstName} ${team.lastName}`}
                          fill
                          className="object-contain p-2 transition-transform duration-300"
                        />
                      </div>
                      <span className="uppercase font-semibold md:text-lg text-sm md:text-[2.5rem] pl-24 md:pl-36  text-background/90 transition-colors duration-300 group-hover:text-background text-nowrap text-ellipsis overflow-hidden whitespace-nowrap truncate tracking-tight">
                        {team.firstName} <br /> {team.lastName}
                      </span>
                    </div>

                    {/* Stats with hover effects - Mobile shows less stats */}
                    <div className="text-center text-sm md:text-xl text-background/90 font-medium">{team.matches}</div>
                    <div className="text-center text-sm md:text-xl text-background/90 font-medium">{team.wins}</div>
                    <div className="text-center text-sm md:text-xl text-background/90 font-medium">{team.losses}</div>
                    <div className="text-center text-sm md:text-xl text-background/90 font-medium">{team.points}</div>
                    <div className="hidden md:block text-center text-sm md:text-xl text-background/90 font-medium">{team.nr}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}