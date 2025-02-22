"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type Match = {
  id: number;
  team1: {
    name: string;
    logo: string;
    playerImage: string;
    bgColor: string;
  };
  team2: {
    name: string;
    logo: string;
    playerImage: string;
    bgColor: string;
  };
  matchDetails: {
    date: string;
    time: string;
    venue: string;
    bookingLink: string;
  };
};

const matches: Match[] = [
  {
    id: 1,
    team1: {
      name: "India Masters",
      logo: "/logos/india-masters.svg",
      playerImage: "fixtures/1.svg",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "Sri Lanka Masters",
      logo: "/logos/sri-lanka-masters.svg",
      playerImage: "fixtures/3.svg",
      bgColor: "bg-gradient-to-l from-[#8E153C] via-[#8E153C]/60",
    },
    matchDetails: {
      date: "Feb 22, 2025",
      time: "19:30 IST",
      venue: "Mumbai",
      bookingLink:
        "https://in.bookmyshow.com/sports/iml-2025-india-vs-sri-lanka/ET00432998",
    },
  },
  {
    id: 2,
    team1: {
      name: "India Masters",
      logo: "/logos/india-masters.svg",
      playerImage: "fixtures/1.svg",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "England Masters",
      logo: "/logos/england-masters.svg",
      playerImage: "fixtures/4.svg",
      bgColor:
        "bg-gradient-to-l from-transparent from-[#418EC1] via-[#418EC1]/50",
    },
    matchDetails: {
      date: "Feb 25, 2025",
      time: "19:30 IST",
      venue: "Mumbai",
      bookingLink:
        "https://in.bookmyshow.com/sports/iml-2025-india-vs-england/ET00433000",
    },
  },
  {
    id: 3,
    team1: {
      name: "India Masters",
      logo: "/logos/india-masters.svg",
      playerImage: "fixtures/1.svg",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "South Africa Masters",
      logo: "/logos/south-africa-masters.svg",
      playerImage: "fixtures/5.svg",
      bgColor: "bg-gradient-to-l  from-[#6ADFCF] via-[#6ADFCF]/50",
    },
    matchDetails: {
      date: "March 01, 2025",
      time: "19:30 IST",
      venue: "Vadodara",
      bookingLink:
        "https://in.bookmyshow.com/sports/iml-2025-india-vs-south-africa/ET00434850",
    },
  },
  {
    id: 4,
    team1: {
      name: "India Masters",
      logo: "/logos/india-masters.svg",
      playerImage: "fixtures/1.svg",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "Australia Masters",
      logo: "/logos/australia-masters.svg",
      playerImage: "fixtures/6.svg",
      bgColor:
        "bg-gradient-to-l from-transparent from-[#B7EE06] via-[#B7EE06]/50",
    },
    matchDetails: {
      date: "March 05, 2025",
      time: "19:30 IST",
      venue: "Vadodara",
      bookingLink:
        "https://in.bookmyshow.com/sports/iml-2025-india-vs-australia/ET00434855",
    },
  },
  {
    id: 4,
    team1: {
      name: "India Masters",
      logo: "/logos/india-masters.svg",
      playerImage: "fixtures/1.svg",
      bgColor:
        "bg-gradient-to-l from-transparent via-yellow-500/10 to-yellow-600",
    },
    team2: {
      name: "West Indies Masters",
      logo: "/logos/west-indies-masters.svg",
      playerImage: "fixtures/2.svg",
      bgColor: "bg-gradient-to-l from-[#A3383D] via-[#E4BE2F]-20%",
    },
    matchDetails: {
      date: "March 08, 2025",
      time: "19:30 IST",
      venue: "Raipur",
      bookingLink:
        "https://in.bookmyshow.com/sports/iml-2025-india-vs-west-indies/ET00434315",
    },
  },
];

export function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="relative w-full bg-background pt-28 md:pt-16 pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="md:mb-12 mb-12">
          <h2 className="md:text-[6rem] text-[3rem] text-white outline-text text-center font-bold uppercase">
            Match Fixtures
          </h2>
        </div>

        {/* desktop version */}
        <div className="relative max-w-5xl mx-auto hidden md:block">
          <div className="grid gap-6">
            {matches.map((match) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-40 group cursor-pointer "
              >
                {/* Base Card */}
                <div className="absolute inset-0 h-full grid grid-cols-[1fr,auto,1fr] items-center  transition-transform duration-500 ">
                  {/* Team 1 */}
                  <div
                    className={`relative w-full h-full ${match.team1.bgColor} transition-all duration-500 rounded-t-md`}
                  >
                    <div className="absolute bottom-0 left-0 w-1/2 h-56 group-hover:opacity-0 transition-opacity duration-500">
                      <Image
                        src={match.team1.playerImage}
                        alt={`${match.team1.name} Player`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="absolute bottom-1/2 translate-y-1/2 right-16 w-40 h-[60%] group-hover:opacity-0 transition-opacity duration-500">
                      <Image
                        src={match.team1.logo}
                        alt={match.team1.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* VS */}
                  <div className="px-0 group-hover:opacity-0 transition-opacity duration-500">
                    <span className="text-5xl font-medium text-foreground">
                      VS
                    </span>
                  </div>

                  {/* Team 2 */}
                  <div
                    className={`relative w-full h-full ${match.team2.bgColor} transition-all duration-500 rounded-t-md`}
                  >
                    <div className="absolute bottom-0 right-0 w-1/2 h-56 group-hover:opacity-0 transition-opacity duration-500">
                      <Image
                        src={match.team2.playerImage}
                        alt={`${match.team2.name} Player`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="absolute bottom1/2 translate-y-1/2 left-16 w-40 h-[60%] group-hover:opacity-0 transition-opacity duration-500">
                      <Image
                        src={match.team2.logo}
                        alt={match.team2.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Content */}
                <div className="absolute inset-0 bg-gradient-to-r  opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="h-full flex items-center justify-between px-16">
                    {/* Team 1 Info */}
                    <div className="text-centerD flex flex-col items-center justify-center">
                      <div className="w-20 h-20 relative mb-2">
                        <Image
                          src={match.team1.logo}
                          alt={match.team1.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-xl text-white">
                        {match.team1.name}
                      </h3>
                    </div>

                    {/* Match Details */}
                    <div className="grid grid-cols-2 gap-12 items-center justify-center h-full">
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-3 text-foreground/90">
                          <span>{match.matchDetails.venue}</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-foreground/90">
                          <span className="text-lg">
                            {match.matchDetails.date}
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-white/90">
                          <span className="text-lg">
                            {match.matchDetails.time}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 text-foreground">
                        <div className="flex items-center justify-center gap-2 text-lg">
                          <span>Are you ready?</span>
                        </div>
                        <Button variant="brand" size="lg" className="">
                          <Link
                            href={match.matchDetails.bookingLink}
                            target="_blank"
                            className="flex items-center justify-center gap-2"
                          >
                            <CalendarDays />
                            Book Now
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Team 2 Info */}
                    <div className="text-center flex flex-col items-center justify-center">
                      <div className="w-20 h-20 relative mb-2">
                        <Image
                          src={match.team2.logo}
                          alt={match.team2.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-bold text-xl text-white">
                        {match.team2.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* mobile version */}
        <div className="md:hidden">
          <div className="flex flex-col gap-6">
            {matches.map((match) => (
              <motion.a
                key={match.id}
                href={match.matchDetails.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-36 group cursor-pointer overflow-hidden rounded-lg border border-border"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 flex">
                  <div className={`w-1/2 ${match.team1.bgColor}`} />
                  <div className={`w-1/2 ${match.team2.bgColor}`} />
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center justify-between">
                  {/* Team 1 Player */}
                  <div className="w-32 h-32 relative -bottom-2 left-0">
                    <Image
                      src={match.team1.playerImage}
                      alt={match.team1.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Match Info */}
                  <div className="flex flex-col items-center justify-center gap-1 h-full z-[1000]">
                    <span className="text-xl font-bold text-white">VS</span>
                    <div className="flex flex-col items-center text-center">
                      <span className="text-sm font-medium text-white/90">
                        {match.matchDetails.date}
                      </span>
                      <span className="text-xs text-white/70">
                        {match.matchDetails.venue}
                      </span>
                    </div>
                    <Button
                      variant="brand"
                      className="mt-1"
                    >
                      <CalendarDays className="w-4 h-4" />
                      Book
                    </Button>
                  </div>

                  {/* Team 2 Player */}
                  <div className="w-32 h-32 relative -bottom-2 right-0">
                    <Image
                      src={match.team2.playerImage}
                      alt={match.team2.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Team Logos - Small Overlays */}
                <div className="absolute bottom-2 left-[20%] w-12 h-12">
                  <Image
                    src={match.team1.logo}
                    alt={match.team1.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-2 right-[20%] w-12 h-12">
                  <Image
                    src={match.team2.logo}
                    alt={match.team2.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
