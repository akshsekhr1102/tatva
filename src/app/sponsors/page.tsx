import { Navbar } from "@/components/navbar";

export default function SponsorPage() {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="container mx-auto px-4 py-8 grid place-content-center place-items-center">
        <h1 className="max-w-[1000px] mx-auto flex text-center text-4xl md:text-6xl font-bold text-yellow-400 ">
          Coming right up!! Our fellow sponsors for their kind support for the
          website
        </h1>
      </div>
    </div>
  );
}

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
