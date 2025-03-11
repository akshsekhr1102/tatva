import { Event } from "@/lib/types";

export const evento: Event[] = [
  {
    slug: "solo-singing",
    name: "Solo Singing",
    tagline: "Let your voice captivate the audience",
    description:
      "Showcase your vocal talent in this solo singing competition. Participants will perform one song of their choice within the time limit. Judging will be based on vocal quality, rhythm, pitch accuracy, song selection, and overall performance.",
    date: "April 4-5, 2025",
    time: "2:00 PM - 6:00 PM",
    venue: "Open Air Theatre",
    category: "Cultural",
    image: "/events/image1.jpeg",
    rules: [
      "Performance time limit is 4 minutes.",
      "Participants must bring their own karaoke/instrumental tracks.",
      "Live instruments are allowed but must be arranged by the participant.",
      "Both film and non-film songs are allowed.",
      "Language options: English, Hindi, or regional languages.",
      "Pre-recorded vocals in the background track are not allowed.",
      "Judging criteria: Voice quality (30%), Rhythm & Pitch (25%), Difficulty level (20%), Expression (15%), Overall impact (10%).",
    ],
    eligibility: [
      "Open to all college students with valid ID cards.",
      "Professional singers are not eligible to participate.",
    ],
    registration: {
      method: "Online Registration",
      deadline: "On Spot available",
      fee: "₹200 per participant",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹10,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹5,000",
        description: "Cash prize + Certificate",
      },
      {
        position: "3rd Prize",
        amount: "₹2,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Aditya",
        contact: "87654 32109",
        email: "aditya@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
    faqs: [
      {
        question: "Can I use a microphone during my performance?",
        answer:
          "Yes, professional audio equipment including microphones will be provided.",
      },
      {
        question: "Can I perform an original composition?",
        answer: "Yes, original compositions are allowed and encouraged.",
      },
    ],
    maxTeamSize: 1,
    minTeamSize: 1,
    featured: false,
    gradient: "from-blue-500 to-teal-400",
  },
  {
    slug: "group-singing",
    name: "Group Singing",
    tagline: "Harmonize and mesmerize the audience",
    description:
      "A musical showdown where groups compete with their harmonies and vocal arrangements. Judging will be based on synchronization, vocal quality, rhythm, and overall performance.",
    date: "April 4-5, 2025",
    time: "4:00 PM - 7:00 PM",
    venue: "Auditorium",
    category: "Cultural",
    image: "/events/group-singing.jpeg",
    rules: [
      "Team size: 3-8 members.",
      "Performance time limit is 5 minutes.",
      "Participants must bring their own karaoke/instrumental tracks.",
      "Live instruments are allowed but must be arranged by the participants.",
      "Only acapella or karaoke performances allowed (no pre-recorded vocals).",
      "Judging criteria: Synchronization (30%), Vocal Quality (30%), Stage Presence (20%), Overall Performance (20%).",
    ],
    eligibility: [
      "Open to all college students with valid ID cards.",
      "Professional singers are not eligible.",
    ],
    registration: {
      method: "Online Registration",
      deadline: "April 3, 2025",
      fee: "₹500 per group",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹15,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹8,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Neha Sharma",
        contact: "98765 43210",
        email: "neha@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/women/24.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we perform an original song?",
        answer: "Yes, original compositions are encouraged.",
      },
      {
        question: "Can we use backing vocals?",
        answer: "No, only live performances are allowed.",
      },
    ],
    maxTeamSize: 8,
    minTeamSize: 3,
    featured: false,
    gradient: "from-pink-500 to-red-400",
  },
  {
    slug: "solo-dance",
    name: "Solo Dance",
    tagline: "Express yourself through movement",
    description:
      "A platform to showcase individual talent in dance. Participants can perform freestyle, classical, contemporary, or any other dance form.",
    date: "April 6, 2025",
    time: "3:00 PM - 6:00 PM",
    venue: "Open Air Theatre",
    category: "Cultural",
    image: "/events/solo-dance.jpeg",
    rules: [
      "Performance time limit: 3-5 minutes.",
      "Participants must bring their own music track in MP3 format.",
      "Props are allowed but must be arranged by the participant.",
      "Obscene gestures or inappropriate content will lead to disqualification.",
      "Judging criteria: Choreography (30%), Expressions (20%), Synchronization (20%), Energy (20%), Overall Impact (10%).",
    ],
    eligibility: [
      "Open to all college students with valid ID cards.",
      "Professional dancers are not eligible.",
    ],
    registration: {
      method: "Online Registration",
      deadline: "April 5, 2025",
      fee: "₹200 per participant",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹7,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹3,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Riya Patel",
        contact: "87654 98765",
        email: "riya@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
      },
    ],
    faqs: [
      {
        question: "Can I use multiple songs in my performance?",
        answer: "Yes, you can mix multiple songs within the time limit.",
      },
      {
        question: "Are classical dance performances allowed?",
        answer: "Yes, any dance form is welcome.",
      },
    ],
    maxTeamSize: 1,
    minTeamSize: 1,
    featured: false,
    gradient: "from-purple-500 to-indigo-400",
  },
  {
    slug: "solo-dance",
    name: "Solo Dance",
    tagline: "Express yourself through movement",
    description:
      "A platform to showcase individual talent in dance. Participants can perform freestyle, classical, contemporary, or any other dance form.",
    date: "April 6, 2025",
    time: "3:00 PM - 6:00 PM",
    venue: "Open Air Theatre",
    category: "Cultural",
    image: "/events/solo-dance.jpeg",
    rules: [
      "Performance time limit: 3-5 minutes.",
      "Participants must bring their own music track in MP3 format.",
      "Props are allowed but must be arranged by the participant.",
      "Obscene gestures or inappropriate content will lead to disqualification.",
      "Judging criteria: Choreography (30%), Expressions (20%), Synchronization (20%), Energy (20%), Overall Impact (10%).",
    ],
    eligibility: [
      "Open to all college students with valid ID cards.",
      "Professional dancers are not eligible.",
    ],
    registration: {
      method: "Online Registration",
      deadline: "April 5, 2025",
      fee: "₹200 per participant",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹7,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹3,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Riya Patel",
        contact: "87654 98765",
        email: "riya@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
      },
    ],
    faqs: [
      {
        question: "Can I use multiple songs in my performance?",
        answer: "Yes, you can mix multiple songs within the time limit.",
      },
      {
        question: "Are classical dance performances allowed?",
        answer: "Yes, any dance form is welcome.",
      },
    ],
    maxTeamSize: 1,
    minTeamSize: 1,
    featured: false,
    gradient: "from-purple-500 to-indigo-400",
  },
  {
    slug: "duo-dance",
    name: "Duo Dance",
    tagline: "A dance of perfect synchronization",
    description:
      "A duo dance competition where partners showcase their chemistry, coordination, and creativity through a stunning performance.",
    date: "April 6, 2025",
    time: "6:00 PM - 8:00 PM",
    venue: "Open Air Theatre",
    category: "Cultural",
    image: "/events/duo-dance.jpeg",
    rules: [
      "Performance time limit: 4-6 minutes.",
      "Participants must bring their own music track in MP3 format.",
      "Props are allowed but must be arranged by the team.",
      "Lifts and risky stunts should be performed with caution.",
      "Judging criteria: Synchronization (30%), Choreography (25%), Expressions (20%), Creativity (15%), Overall Impact (10%).",
    ],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "Online Registration",
      deadline: "April 5, 2025",
      fee: "₹400 per team",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹10,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹5,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Arjun Mehta",
        contact: "78945 12367",
        email: "arjun@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we use multiple songs?",
        answer: "Yes, you can use multiple songs within the time limit.",
      },
      {
        question: "Are props allowed?",
        answer: "Yes, but they must be arranged by the participants.",
      },
    ],
    maxTeamSize: 2,
    minTeamSize: 2,
    featured: false,
    gradient: "from-orange-500 to-red-400",
  },
  {
    slug: "group-dance",
    name: "Group Dance",
    tagline: "Unite, dance, and set the stage on fire!",
    description:
      "A high-energy group dance competition where teams showcase their coordination, energy, and stage presence.",
    date: "April 7, 2025",
    time: "5:00 PM - 8:00 PM",
    venue: "Main Stage",
    category: "Cultural",
    image: "/events/group-dance.jpeg",
    rules: [
      "Team size: 4-12 members.",
      "Performance time limit: 5-8 minutes.",
      "Participants must bring their own music track.",
      "Props are allowed but must be arranged by the team.",
      "Judging criteria: Synchronization (30%), Choreography (25%), Energy (20%), Expressions (15%), Overall Impact (10%).",
    ],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "Online Registration",
      deadline: "April 6, 2025",
      fee: "₹800 per team",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹20,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹10,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Priya Verma",
        contact: "98234 56789",
        email: "priya@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we use props?",
        answer: "Yes, props are allowed but must be arranged by the team.",
      },
      {
        question: "Are stunts and lifts allowed?",
        answer: "Yes, but they should be executed with safety in mind.",
      },
    ],
    maxTeamSize: 12,
    minTeamSize: 4,
    featured: false,
    gradient: "from-green-500 to-blue-400",
  },
  {
    slug: "mime",
    name: "Mime",
    tagline: "Express without words",
    description:
      "A silent yet powerful storytelling competition where teams convey emotions, messages, and narratives through expressive actions and facial expressions.",
    date: "April 8, 2025",
    time: "2:00 PM - 4:00 PM",
    venue: "Auditorium",
    category: "Cultural",
    image: "/events/mime.jpeg",
    rules: [
      "Team size: 3-8 members.",
      "Performance time limit: 5-7 minutes.",
      "No dialogues or verbal sounds are allowed.",
      "Participants can use background music and sound effects.",
      "Face painting and minimal props are allowed.",
      "Judging criteria: Creativity (30%), Expressions (30%), Storyline (20%), Synchronization (20%).",
    ],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "Online Registration",
      deadline: "April 7, 2025",
      fee: "₹500 per team",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹10,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹5,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Rahul Singh",
        contact: "98765 43221",
        email: "rahul@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we use props?",
        answer: "Yes, minimal props and face painting are allowed.",
      },
      {
        question: "Is background music allowed?",
        answer: "Yes, background music and sound effects can be used.",
      },
    ],
    maxTeamSize: 8,
    minTeamSize: 3,
    featured: false,
    gradient: "from-gray-500 to-black",
  },
  {
    slug: "mad-ads",
    name: "Mad Ads",
    tagline: "Creative advertising with a twist",
    description:
      "An entertaining event where teams create humorous and exaggerated advertisements for fictional or real products.",
    date: "April 8, 2025",
    time: "4:00 PM - 6:00 PM",
    venue: "Auditorium",
    category: "Cultural",
    image: "/events/mad-ads.jpeg",
    rules: [
      "Team size: 3-6 members.",
      "Performance time limit: 3-5 minutes.",
      "Advertisements should be humorous but not offensive.",
      "Minimal props allowed; costumes encouraged.",
      "Judging criteria: Creativity (30%), Humor (30%), Delivery (20%), Audience Engagement (20%).",
    ],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "Online Registration",
      deadline: "April 7, 2025",
      fee: "₹400 per team",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹8,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹4,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Aisha Khan",
        contact: "87654 32188",
        email: "aisha@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/women/52.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we use pre-recorded audio?",
        answer: "No, all dialogues must be performed live.",
      },
      {
        question: "Can we mimic real brands?",
        answer:
          "Yes, but ensure it's done in a respectful and humorous manner.",
      },
    ],
    maxTeamSize: 6,
    minTeamSize: 3,
    featured: false,
    gradient: "from-yellow-500 to-orange-400",
  },
  {
    slug: "photography",
    name: "Photography",
    tagline: "Capture the moment, tell a story",
    description:
      "A photography contest to showcase your skills in capturing stunning images with creativity and composition.",
    date: "April 9, 2025",
    time: "All Day",
    venue: "College Campus",
    category: "Artistic",
    image: "/events/photography.jpeg",
    rules: [
      "Each participant can submit up to 3 photographs.",
      "Photos must be original and taken within the event timeframe.",
      "Basic editing (brightness, contrast, cropping) is allowed.",
      "Judging criteria: Composition (30%), Creativity (30%), Storytelling (20%), Technical Skills (20%).",
    ],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "Online Registration",
      deadline: "April 8, 2025",
      fee: "₹150 per participant",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹5,000",
        description: "Cash prize + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹3,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Vikram Joshi",
        contact: "98765 33210",
        email: "vikram@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/men/60.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we use DSLR or mobile cameras?",
        answer: "Yes, both DSLR and mobile cameras are allowed.",
      },
      {
        question: "Are filters allowed?",
        answer: "Yes, but excessive editing will be penalized.",
      },
    ],
    maxTeamSize: 1,
    minTeamSize: 1,
    featured: false,
    gradient: "from-blue-500 to-gray-400",
  },
  {
    slug: "short-film",
    name: "Short Film",
    tagline: "Lights, camera, action!",
    description:
      "A filmmaking competition where participants create a short film that tells a compelling story within a limited time frame.",
    date: "April 10, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "Auditorium",
    category: "Artistic",
    image: "/events/short-film.jpeg",
    rules: [
      "Team size: 2-6 members.",
      "Film duration: 3-7 minutes.",
      "Films can be in any language, but subtitles in English are mandatory.",
      "Plagiarized content will lead to disqualification.",
      "Use of copyrighted music or visuals is prohibited.",
      "Judging criteria: Storytelling (30%), Cinematography (25%), Editing (20%), Creativity (15%), Overall Impact (10%).",
    ],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "Online Registration",
      deadline: "April 9, 2025",
      fee: "₹500 per team",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹15,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹7,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Rohan Mehta",
        contact: "78965 43211",
        email: "rohan@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/men/70.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we use stock footage?",
        answer: "No, all footage must be original.",
      },
      {
        question: "Can animation be used?",
        answer: "Yes, but it must be created by the team.",
      },
    ],
    maxTeamSize: 6,
    minTeamSize: 2,
    featured: false,
    gradient: "from-red-500 to-black",
  },
  {
    slug: "treasure-hunt",
    name: "Treasure Hunt",
    tagline: "Solve clues, find the treasure!",
    description:
      "A fun and adventurous event where teams race against time to solve riddles and complete tasks to find the final treasure.",
    date: "April 11, 2025",
    time: "11:00 AM - 3:00 PM",
    venue: "College Campus",
    category: "Adventure",
    image: "/events/treasure-hunt.jpeg",
    rules: [
      "Team size: 3-5 members.",
      "Each clue leads to the next location.",
      "Teams must check in at every checkpoint.",
      "No use of mobile phones or internet is allowed.",
      "If caught cheating, the team will be disqualified.",
      "Judging criteria: Speed (40%), Accuracy (30%), Teamwork (20%), Strategy (10%).",
    ],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "On-spot Registration",
      deadline: "April 11, 2025",
      fee: "₹300 per team",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹8,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹4,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Sneha Kapoor",
        contact: "97865 43210",
        email: "sneha@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we use Google to solve clues?",
        answer: "No, mobile phones and internet use are strictly prohibited.",
      },
      {
        question: "What if we get stuck on a clue?",
        answer: "You can ask for a hint, but it will cost a time penalty.",
      },
    ],
    maxTeamSize: 5,
    minTeamSize: 3,
    featured: false,
    gradient: "from-green-500 to-yellow-400",
  },
  {
    slug: "fashion-show",
    name: "Fashion Show",
    tagline: "Walk the ramp, own the spotlight",
    description:
      "A glamorous event where teams showcase their fashion sense, style, and confidence on the runway.",
    date: "April 12, 2025",
    time: "7:00 PM - 10:00 PM",
    venue: "Main Stage",
    category: "Cultural",
    image: "/events/fashion-show.jpeg",
    rules: [
      "Team size: 5-12 members.",
      "Each team gets 10 minutes on stage.",
      "Themes must be pre-approved by the coordinators.",
      "No vulgar or inappropriate content is allowed.",
      "Judging criteria: Theme Interpretation (30%), Costume & Styling (30%), Walk & Confidence (20%), Creativity (20%).",
    ],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "Online Registration",
      deadline: "April 11, 2025",
      fee: "₹1000 per team",
      link: "#register",
    },
    prizes: [
      {
        position: "1st Prize",
        amount: "₹20,000",
        description: "Cash prize + Trophy + Certificate",
      },
      {
        position: "2nd Prize",
        amount: "₹10,000",
        description: "Cash prize + Certificate",
      },
    ],
    coordinators: [
      {
        name: "Ananya Sharma",
        contact: "98765 87654",
        email: "ananya@example.com",
        role: "Event Coordinator",
        image: "https://randomuser.me/api/portraits/women/60.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we use background music?",
        answer: "Yes, teams can bring their own music.",
      },
      {
        question: "Are props allowed?",
        answer: "Yes, but they must be managed by the team.",
      },
    ],
    maxTeamSize: 12,
    minTeamSize: 5,
    featured: false,
    gradient: "from-pink-500 to-purple-400",
  },
];
