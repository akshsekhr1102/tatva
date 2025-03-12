import { Event } from "@/lib/types";

export const evento: Event[] = [
  // solo singing
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
        name: "Harshini",
        contact: "8431480568",
        email: "tattva.vemanothsav@gmail.com",
        role: "Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
      },
      {
        name: "Yogeeta",
        contact: "8123997924",
        email: "tattva.vemanothsav@gmail.com",
        role: "Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
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
  // group singing
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
    image: "/events/image2.jpeg",
    rules: [
      "Team size: 3-8 members.",
      "Performance time limit is 5 minutes.",
      "Participants must bring their own karaoke/instrumental tracks.",
      "Live instruments are allowed but must be arranged by the participants.",
      "Judging criteria: Synchronization (30%), Vocal Quality (30%), Stage Presence (20%), Overall Performance (20%).",
    ],
    eligibility: [
      "Open to all college students with valid ID cards.",
      "Professional singers are not eligible.",
    ],
    registration: {
      method: "Online Registration",
      deadline: "April 3, 2025",
      fee: "₹269 per group",
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
        name: "Suchitha",
        contact: "8050671794",
        email: "tattva.vemanothsav@gmail.com",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
      },
      {
        name: "Vivek",
        contact: "9380818263",
        email: "tattva.vemanothsav@gmail.com",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/02.png",
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
  // solo dance
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
    image: "/events/image3.jpeg",
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
        name: "Shivani",
        contact: "7022062773",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
      },
      {
        name: "Shamitha",
        contact: "8147751063",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
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
  // duo dance
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
    image: "/events/image4.jpeg",
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
        name: "Meghana ",
        contact: "8310536099",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
      },
      {
        name: "Ashika  ",
        contact: "8073132073",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
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
  // group dance
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
    image: "/events/image5.jpeg",
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
        name: "Gouri ",
        contact: "8904233885",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
      },
      {
        name: "Mahima ",
        contact: "8660579490",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
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
  // mime
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
    image: "/events/image6.jpeg",
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
        name: "Shashwitha",
        contact: "74116 74933",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
      },
      {
        name: "Rachana ",
        contact: "7348864567",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
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
  // mad ads
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
    image: "/events/image7.jpeg",
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
        name: "Chaitra",
        contact: "9738485144",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
      },
      {
        name: "Sanjana ",
        contact: "9008419329",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
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
  // photography
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
    image: "/events/image9.jpeg",
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
        name: "Sagar",
        contact: "9880906923",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/02.png",
      },
      {
        name: "Akash ",
        contact: "9449658382",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/02.png",
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
  // short film
  {
    slug: "short-film",
    name: "Short Film",
    tagline: "Lights, camera, action!",
    description:
      "A filmmaking competition where participants create a short film that tells a compelling story within a limited time frame.",
    date: "April 10, 2025",
    time: "10:00 AM - 4:00 PM",
    venue: "IS seminar hall",
    category: "Artistic",
    image: "/events/image10.jpeg",
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
        name: "Sibi Varma P",
        contact: "8880211819",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/02.png",
      },
      {
        name: "Likith",
        contact: "6361165164",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/02.png",
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
  // treasure hunt
  {
    slug: "treasure-hunt",
    name: "Treasure Hunt",
    tagline: "Solve clues, find the treasure!",
    description:
      "A fun and adventurous event where teams race against time to solve riddles and complete tasks to find the final treasure.",
    date: "April 11, 2025",
    time: "11:00 AM - 3:00 PM",
    venue: "IS seminar hall [College Campus ]",
    category: "Adventure",
    image: "/events/image11.jpeg",
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
        name: "Sriviveka ",
        contact: "8088736282",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
      },
      {
        name: "Shreyas  ",
        contact: "7019444158",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/02.png",
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
  // fashion show
  {
    slug: "fashion-show",
    name: "Fashion Show",
    tagline: "Walk the ramp, own the spotlight",
    description:
      "A glamorous event where teams showcase their fashion sense, style, and confidence on the runway.",
    date: "April 3, 2025",
    time: "7:00 PM - 10:00 PM",
    venue: "Main Stage",
    category: "Cultural",
    image: "/events/image12.jpeg",
    rules: [],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "Online Registration",
      deadline: "April 1, 2025",
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
        name: "Akash Gowda",
        contact: "8762021044",
        email: "akashgowda1603@gmail.com",
        role: "Event Coordinator",
        image:
          "https://3bvv3yffqy.ufs.sh/f/zNuOBIssVhSAmMsxOZiZPeLlOQGu6bFfW35rgEjApN1BvtDJ",
      },
      {
        name: "Jiya agarwal",
        contact: "7349184674",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/01.png",
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
  // ad making
  {
    slug: "ad-making",
    name: "Ad Making Competition",
    tagline: "Create. Captivate. Convince.",
    description:
      "A creative challenge where teams conceptualize, script, and produce compelling advertisements within a given time frame.",
    date: "April 13, 2025",
    time: "2:00 PM - 5:00 PM",
    venue: "Media Hall",
    category: "Cultural",
    image: "/events/image8.jpeg",
    rules: [
      "Teams must create an advertisement based on the theme provided at the start of the event.",
      "The duration of the ad should be between 30 seconds to 1 minute.",
      "All content must be original and should not contain any copyrighted material.",
      "Teams must submit their final video before the given deadline.",
      "Use of offensive, obscene, or inappropriate content will lead to disqualification.",
      "Participants should bring their own devices for editing if required.",
      "Judgment will be based on creativity, originality, message clarity, and overall impact.",
    ],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "Online Registration",
      deadline: "April 12, 2025",
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
        name: "Nischal",
        contact: "7411405134",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/04.png",
      },
      {
        name: "Akash R",
        contact: "9449751537",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/02.png",
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
  // bigboss
  {
    slug: "bigg-boss",
    name: "Bigg Boss",
    tagline: "Survive. Strategize. Win.",
    description:
      "An intense reality-style competition where participants face strategic, social, and physical challenges while living under constant surveillance.",
    date: "April 3-4, 2025",
    time: "2:00 PM - 5:00 PM",
    venue: "Media Hall",
    category: "Entertainment",
    image: "/events/image13.jpeg",
    rules: [
      "Participants will be assigned various tasks and challenges to complete.",
      "Eliminations will take place at set intervals based on voting and performance.",
      "No external communication devices (phones, smartwatches, etc.) are allowed.",
      "Contestants must follow all house rules and respect fellow participants.",
      "Breaking any rules will result in immediate disqualification.",
      "Final winners will be decided based on audience votes and jury evaluation.",
    ],
    eligibility: ["Open to all college students with valid ID cards."],
    registration: {
      method: "Online Registration",
      deadline: "April 1, 2025",
      fee: "₹1000 per player",
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
        name: "Hanish ",
        contact: "9148982526",
        email: "",
        role: "Event Coordinator",
        image: "https://ui.shadcn.com/avatars/03.png",
      },
    ],
    faqs: [
      {
        question: "Can participants leave midway?",
        answer: "No, leaving midway will result in automatic disqualification.",
      },
      {
        question: "Will there be food provided?",
        answer: "Yes, meals and refreshments will be arranged.",
      },
    ],
    maxTeamSize: 5,
    minTeamSize: 1,
    featured: false,
    gradient: "from-pink-500 to-purple-400",
  },
];
