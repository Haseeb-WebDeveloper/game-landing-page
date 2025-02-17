"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRef } from "react";

type TeamRanking = {
  id: number;
  logo: string;
  name: string;
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
    logo: "/logos/ind.png",
    name: "India",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-yellow-800/90 via-yellow-600",
  },
  {
    id: 2,
    logo: "/logos/sri.png",
    name: "Sri Lanka",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-[#8E153C] via-[#8E153C]/60",
  },
  {
    id: 3,
    logo: "/logos/pak.png",
    name: "West Indies",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-green-800 via-green-500/50",
  },
  {
    id: 4,
    logo: "/logos/aus.png",
    name: "Australia",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-blue-800 via-blue-500/50",
  },
  {
    id: 5,
    logo: "/logos/sa.png",
    name: "South Africa",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-yellow-800/90 via-blue-100/50",
  },
  {
    id: 6,
    logo: "/logos/eng.png",
    name: "England",
    matches: 0,
    wins: 0,
    losses: 0,
    points: 0,
    nr: 0,
    bgColor: "bg-gradient-to-r from-red-800 via-red-500/50",
  },
];

export function RankingSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section className="relative min-h-screen w-full bg-foreground/5 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-[6vw] font-display text-center">
            Tournament Standings
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-[3fr,repeat(5,0.5fr)] gap-0 mb-8 px-8 text-foreground/80">
            <div></div>
            <div className="text-center border-l border-border/20 text-base">
              MAT
            </div>
            <div className="text-center border-l border-border/20 text-base">
              W
            </div>
            <div className="text-center border-l border-border/20 text-base">
              L
            </div>
            <div className="text-center border-l border-border/20 text-base">
              PTS
            </div>
            <div className="text-center border-l border-border/20 text-base">
              N/R
            </div>
          </div>

          {/* Rankings */}
          <div ref={containerRef} className="space-y-1 relative">
            {rankings.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-foreground/80 group hover:bg-foreground transition-all duration-300 h-20 rounded-e-sm border border-border"
                style={{
                  clipPath:
                    "polygon(45px 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
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
                      "relative grid grid-cols-[3fr,repeat(5,0.5fr)] items-center gap-0 h-20",
                      "shadow-[0_4px_8px_-2px_rgba(0,0,0,0.2)]",
                      "transition-transform duration-300 group-hover:scale-[1.01]"
                    )}
                  >
                    {/* Team */}
                    <div className="relative flex items-center gap-2 h-20">
                      {/* Logo container with hover effect */}
                      <div
                        className="absolute left-0 top-0 w-32 h-20 bg-foreground transition-transform duration-300 group-hover:scale-[1.02]"
                        style={{
                          clipPath:
                            "polygon(0 45px, 45px 0, 100% 0, 65% 100%, 0 100%)",
                        }}
                      >
                        <Image
                          src={team.logo}
                          alt={team.name}
                          fill
                          className="object-contain p-2 transition-transform duration-300 "
                        />
                      </div>
                      <span className="uppercase font-semibold text-[3vw] pl-36 text-background/90 transition-colors duration-300 group-hover:text-background">
                        {team.name}
                      </span>
                    </div>

                    {/* Stats with hover effects */}
                    {[
                      team.matches,
                      team.wins,
                      team.losses,
                      team.points,
                      team.nr,
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="text-center border-l border-border/30 text-xl text-background/90 font-medium transition-all duration-300 group-hover:text-background group-hover:border-border/50"
                      >
                        {stat}
                      </div>
                    ))}
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
