// "use client";

// import { motion } from "framer-motion";
// import { Navbar } from "@/components/navbar";

// import { useEffect, useState } from "react";
// import { ArrowDown } from "lucide-react";
// import { SponsorTier } from "./sponsor-tier";

// export default function SponsorPage() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const parallaxValue = -scrollY * 0.2;

//   return (
//     <div
//       className="min-h-screen w-full flex flex-col bg-fixed bg-cover bg-center bg-no-repeat overflow-x-hidden"
//       style={{ backgroundImage: "url('/background.png')" }}
//     >
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <motion.div
//         className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="absolute inset-0 z-0"
//           style={{ y: parallaxValue }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
//         </motion.div>

//         <motion.h1
//           className="text-5xl md:text-7xl font-bold text-white mb-6 relative z-10"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           Our <span className="text-yellow-400">Sponsors</span>
//         </motion.h1>

//         <motion.p
//           className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 relative z-10"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           We&nbsp;re grateful to the organizations that make our work possible
//           through their generous support
//         </motion.p>

//         <motion.div
//           className="absolute bottom-10 z-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.5 }}
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
//           >
//             <ArrowDown className="h-10 w-10 text-white/80" />
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Sponsors Content */}
//       <div className="container mx-auto px-4 py-16 space-y-32">
//         {/* Platinum Tier */}
//         <SponsorTier
//           title="Platinum Sponsors"
//           description="Our highest level of partnership, these organizations provide exceptional support to our mission"
//           tier="platinum"
//           sponsors={[
//             {
//               name: "TechGiant",
//               logo: "/placeholder.svg?height=120&width=240",
//               website: "https://example.com",
//             },
//             {
//               name: "InnovateCorp",
//               logo: "/placeholder.svg?height=120&width=240",
//               website: "https://example.com",
//             },
//             {
//               name: "FutureTech",
//               logo: "/placeholder.svg?height=120&width=240",
//               website: "https://example.com",
//             },
//           ]}
//         />

//         {/* Gold Tier */}
//         <SponsorTier
//           title="Gold Sponsors"
//           description="Key partners who provide substantial support to our initiatives"
//           tier="gold"
//           sponsors={[
//             {
//               name: "GlobalSolutions",
//               logo: "/placeholder.svg?height=100&width=200",
//               website: "https://example.com",
//             },
//             {
//               name: "NextLevel",
//               logo: "/placeholder.svg?height=100&width=200",
//               website: "https://example.com",
//             },
//             {
//               name: "PrimeVentures",
//               logo: "/placeholder.svg?height=100&width=200",
//               website: "https://example.com",
//             },
//             {
//               name: "EliteGroup",
//               logo: "/placeholder.svg?height=100&width=200",
//               website: "https://example.com",
//             },
//           ]}
//         />

//         {/* Silver Tier */}
//         <SponsorTier
//           title="Silver Sponsors"
//           description="Valued supporters who help advance our projects"
//           tier="silver"
//           sponsors={[
//             {
//               name: "BrightIdeas",
//               logo: "/placeholder.svg?height=80&width=160",
//               website: "https://example.com",
//             },
//             {
//               name: "InnovateNow",
//               logo: "/placeholder.svg?height=80&width=160",
//               website: "https://example.com",
//             },
//             {
//               name: "TechForward",
//               logo: "/placeholder.svg?height=80&width=160",
//               website: "https://example.com",
//             },
//             {
//               name: "FutureSystems",
//               logo: "/placeholder.svg?height=80&width=160",
//               website: "https://example.com",
//             },
//             {
//               name: "DigitalEdge",
//               logo: "/placeholder.svg?height=80&width=160",
//               website: "https://example.com",
//             },
//           ]}
//         />

//         {/* Bronze Tier */}
//         <SponsorTier
//           title="Bronze Sponsors"
//           description="Organizations that provide valuable contributions to our community"
//           tier="bronze"
//           sponsors={[
//             {
//               name: "StartupLabs",
//               logo: "/placeholder.svg?height=60&width=120",
//               website: "https://example.com",
//             },
//             {
//               name: "TechMinds",
//               logo: "/placeholder.svg?height=60&width=120",
//               website: "https://example.com",
//             },
//             {
//               name: "InnoHub",
//               logo: "/placeholder.svg?height=60&width=120",
//               website: "https://example.com",
//             },
//             {
//               name: "DevGroup",
//               logo: "/placeholder.svg?height=60&width=120",
//               website: "https://example.com",
//             },
//             {
//               name: "CodeCraft",
//               logo: "/placeholder.svg?height=60&width=120",
//               website: "https://example.com",
//             },
//             {
//               name: "WebWorks",
//               logo: "/placeholder.svg?height=60&width=120",
//               website: "https://example.com",
//             },
//           ]}
//         />
//       </div>

//       {/* Become a Sponsor CTA */}
//       <motion.div
//         className="container mx-auto px-4 py-24 text-center"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="relative backdrop-blur-lg bg-white/10 rounded-3xl p-12 border border-white/20 shadow-xl overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 z-0" />

//           <div className="relative z-10">
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Become a Sponsor
//             </h2>
//             <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
//               Join our community of sponsors and help us continue our mission.
//               We offer various sponsorship packages to suit your
//               organization&nbsp;s goals.
//             </p>
//             <motion.button
//               className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full text-black font-bold text-lg shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Contact Us About Sponsorship
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";
import { ArrowDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EdutantrPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxValue = -scrollY * 0.2;

  return (
    <div
      className="min-h-screen w-full flex flex-col bg-fixed bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: parallaxValue }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="bg-black/50 p-8 rounded-2xl backdrop-blur-sm mb-6">
            <Image
              src="/esports/edutantr.png"
              alt="Edutantr Logo"
              width={400}
              height={150}
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-[#8BC34A]">Premier Sponsor</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Bridging gaps and building bridges in education and technology
        </motion.p>

        <motion.div
          className="absolute bottom-10 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ArrowDown className="h-10 w-10 text-white/80" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* About Edutantr */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="bg-black/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About <span className="text-[#8BC34A]">Edutantr</span>
              </h2>
              <p className="text-white/80 mb-6 text-lg">
                Edutantr is at the forefront of educational innovation,
                dedicated to bridging gaps in learning and building bridges
                between traditional education and cutting-edge technology.
              </p>
              <p className="text-white/80 mb-6 text-lg">
                With a mission to transform how knowledge is shared and
                acquired, Edutantr develops solutions that make quality
                education accessible to all, regardless of geographical or
                socioeconomic barriers.
              </p>
              <p className="text-white/80 text-lg">
                Their support has been instrumental in helping us achieve our
                goals and create meaningful impact in our community.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8BC34A]/20 to-[#4CAF50]/20 z-0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/esports/edutantr-logo.webp"
                  alt="Edutantr Logo"
                  width={300}
                  height={120}
                  className="drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Initiatives */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Edutantr <span className="text-[#8BC34A]">Initiatives</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover the groundbreaking projects and programs that Edutantr is
            supporting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Literacy Program",
              description:
                "Empowering communities with essential digital skills for the modern world",
              icon: "💻",
            },
            {
              title: "Educational Technology Research",
              description:
                "Pioneering research into next-generation learning technologies",
              icon: "🔬",
            },
            {
              title: "Teacher Training Workshops",
              description:
                "Equipping educators with innovative teaching methodologies",
              icon: "👨‍🏫",
            },
            {
              title: "Scholarship Fund",
              description:
                "Creating opportunities for underprivileged students to access quality education",
              icon: "🎓",
            },
            {
              title: "Global Learning Platform",
              description:
                "Connecting learners and educators across geographical boundaries",
              icon: "🌐",
            },
            {
              title: "STEM Education Outreach",
              description:
                "Inspiring the next generation of scientists, technologists, engineers, and mathematicians",
              icon: "⚗️",
            },
          ].map((initiative, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#8BC34A]/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{initiative.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8BC34A] transition-colors duration-300">
                {initiative.title}
              </h3>
              <p className="text-white/70">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="container mx-auto px-4 py-24 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="relative backdrop-blur-lg bg-black/30 rounded-3xl p-12 border border-white/20 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8BC34A]/20 to-[#4CAF50]/20 z-0" />

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Learn More About Edutantr
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover how Edutantr is revolutionizing education and creating
              opportunities for learners worldwide.
            </p>
            <Link
              href="https://www.edutantr.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="px-8 py-6 bg-gradient-to-r from-[#8BC34A] to-[#4CAF50] rounded-full text-black font-bold text-lg shadow-lg group"
                variant="ghost"
              >
                Visit Edutantr Website
                <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
