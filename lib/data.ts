export const personalData = {
  name: "Srinu Maripi",
  title: "Senior Software Engineer",
  email: "srinumaripi.nitsri@gmail.com", // Replace with actual email
  phone: "+91-9014326315", // Replace with actual phone
  location: "Hyderabad, India", // Replace with actual location
  about: `Results-driven Full Stack Developer with 5 years of experience building and
deploying scalable web and mobile applications. Successfully published
production-ready apps to Play Store, developed SEO-friendly web apps, and
deployed high-performance backend services. Proficient in React, React
Native, Next.js, Node.js, Express.js and Nest.js, with hands-on experience in AWS
for cloud deployments and infrastructure management. Passionate about
delivering clean, maintainable code and building end-to-end solutions that are
user-centric and business-focused.`,
  socialLinks: {
    github: "https://github.com/srinu6", // Replace with actual GitHub
    linkedin: "https://linkedin.com/in/srinuvasarao-maripi", // Replace with actual LinkedIn
    twitter: "https://twitter.com/MaripiSri", // Replace with actual Twitter
    youtube: "https://www.youtube.com/@RowdyCoders",
    website: "https://rowdycoders.com/"
  }
};

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "React Native", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "TailwindCSS", level: 90 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "Nest.js", level: 90 },
      { name: "Java", level: 70 },
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "REST API", level: 90 },
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 80 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 90 },
      { name: "Figma", level: 90 },
      { name: "Swagger", level: 90 },
      { name: "Performance Optimization", level: 90 }
    ]
  }
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 0,
    title: "GrabYourMeals",
    description: "A food delivery platform covering both Web, Mobile apps",
    image: "https://grabyourmeals.com/GrabYourMealsLogo.png",
    tags: ["React Native", "Next.js", "TailwindCSS", "Node.js", "ExpressJS", "MongoDB"],
    liveUrl: "https://grabyourmeals.com/",
    codeUrl: "",
    featured: true
  },
  {
    id: 1,
    title: "Lycho Seeds",
    description: "An e-commerce platform for organic seeds with detailed product information",
    image: "https://www.lychoseeds.com/lychoseeds.png",
    tags: ["Next.js", "React", "TailwindCSS", "Node.js", "MongoDB"],
    liveUrl: "https://www.lychoseeds.com/",
    codeUrl: "",
    featured: true
  },
  {
    id: 2,
    title: "Glory Divine Gallery",
    description: "A modern Christian products store with advanced filtering and Admin Portal",
    image: "https://glorydivinegallery.com/logo.png",
    tags: ["Next.js", "React", "TailwindCSS", "Node.js", "MongoDB", "AWS"],
    liveUrl: "https://glorydivinegallery.com/",
    codeUrl: "",
    featured: true
  },
  {
    id: 3,
    title: "Rowdy Coders",
    description: "Educational platform providing coding tutorials, articles, and resources for developers of all skill levels.",
    image: "https://rowdycoders.com/wp-content/uploads/logo.png",
    tags: ["Wordpress"],
    liveUrl: "https://rowdycoders.com/",
    codeUrl: "",
    featured: true
  },
  {
    id: 4,
    title: "Uniwearse",
    description: "A platform where fashion lovers can buy and sell pre-loved clothing, we're building a community that values sustainability, style, and smart consumption.",
    image: "https://uniwearse-frontend.vercel.app/static/media/logo.c802eb8d3d097f630edb.png",
    tags: ["ReactJS"],
    liveUrl: "https://uniwearse-frontend.vercel.app/",
    codeUrl: "",
    featured: true
  },
  {
    id: 5,
    title: "Connecting Freshers",
    description: "A Platform to connect freshers to seniors. Presented Connecting Freshers in the IDEA CHALLENGE 2017(National Level Competition) at NIT Srinagar, developed an application from scratch, got it funded by NIT Srinagar",
    image: "https://www.srinumaripi.tech/cf.jpg",
    tags: ["Wordpress", "HTML", "CSS", "Javascript", "PHP", "MySQL"],
    liveUrl: "https://connectingfreshers.com/about/",
    codeUrl: "",
    featured: true
  },
];

export const contentCreationData = {
  youtube: {
    channel: "Rowdy Coders",
    url: "https://www.youtube.com/@RowdyCoders",
    subscribers: "6K+", // Replace with actual number
    videos: "90+", // Replace with actual number
    description: "Educational content focused on Web & Mobile app development tutorials, Interview Preparation, coding tips, and industry insights.",
    featuredVideos: [
      {
        title: "Ultimate Guide to Conquering Frontend Interviews🧑‍💻 - Rowdy Coders🔥💥🌟",
        url: "https://www.youtube.com/watch?v=O8PWPnSmcR0",
        thumbnail: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Top 50 Most Asked JavaScript Logical Interview Questions",
        url: "https://youtu.be/65slMcTFSMM?si=W_f7vKcZRuLqn4gv",
        thumbnail: "https://www.srinumaripi.tech/javascriptquestions.png"
      },
      {
        title: "JavaScript Visualized - Promise, setTimeout and CallStack || Must Watch🤯😱",
        url: "https://youtu.be/Pp9Ir8iZsFA?si=gtCNRVlcz92cMM6I",
        thumbnail: "https://www.srinumaripi.tech/es6.jpeg"
      }
    ]
  },
  blog: {
    title: "Rowdy Coders Blog",
    url: "https://rowdycoders.com",
    description: "Technical articles and tutorials on web development, programming best practices, and industry trends.",
    featuredPosts: [
      {
        title: "Implement an Event Emitter in JavaScript",
        url: "https://rowdycoders.com/implement-an-event-emitter-in-javascript",
        date: "May 27, 2024"
      },
      {
        title: "Converting a DOM Object to Real DOM Elements in JavaScript",
        url: "https://rowdycoders.com/converting-a-dom-object-to-real-dom-elements-in-javascript",
        date: "February 25, 2025"
      },
      {
        title: "Logging Access to Object Properties in JavaScript Using Proxy",
        url: "https://rowdycoders.com/logging-access-to-object-properties-in-javascript-using-proxy",
        date: "February 8, 2025"
      }
    ]
  }
};

export const experienceData = [
  {
    position: "Senior Software Engineer",
    company: "PalTech",
    duration: "2024 - Present",
    location: "Hyderabad",
    description: "Contributing to the development of mobile app tailored for Service Engineers to effectively manage their daily schedules and tasks, enabling seamless task tracking from assignment to completion.",
    technologies: ["React Native", "JavaScript", "TypeScript", "Redux", "RealmDB"],
    achievements: [
      "Implemented Image, Video compression solutions, optimizing storage and retrieval of media assets to significantly improve app performance",
      "Developed image editing features allowing engineers to focus specific areas in photos, enhancing user experience by improving visual clarity",
      "Created background location tracking functionality to monitor engineers' real time locations once tasks are assigned",
      "Trained organization mobile team extensively on React Native Expo"
    ]
  },
  {
    position: "Member of Technical Staff",
    company: "TechMojo Solutions Pvt Ltd",
    duration: "2022 - 2024",
    location: "Hyderabad",
    description: "Worked on the betting application from scratch, collaborated with seven cross functional teams, leveraging technical and domain expertise to accelerate the onboarding process.",
    technologies: ["ReactJS", "React Native", "JavaScript", "TypeScript", "Single SPA", "RxJs", "GoLang"],
    achievements: [
      "Addressed resiliency issues, graceful handling of multiple core components and optimized network calls from 3x to 1x across the app",
      "Integrated 81 sports into the betting application and integrated top markets for the user to bet on, which generated 80% of the total revenue",
      "Created Deep links for the entire application in a short deadline, facilitating the creation of Ad widgets",
      "Got the opportunity to contribute to backend as well"
    ]
  },
  {
    position: "Associate Software Engineer II",
    company: "Optum Global Solutions (UnitedHealth Group)",
    duration: "2020 - 2022",
    location: "Gurgaon, Haryana",
    description: "Worked on multiple features like Biometric login, Play/App Store reviews etc.",
    technologies: ["React Native", "JavaScript", "TypeScript", "Redux", "Java", "Objective C", "Jest", "Appium"],
    achievements: [
      "Got opportunity to contribute to the React Native core component, specifically 'react-native-slider' library",
      "Wrote native code for both Android & iOS devices, while also overseeing unit, automation testing for the application"
    ]
  },
  {
    position: "Founder, Full Stack Developer",
    company: "GrabYourMeals",
    duration: "2025 - Present",
    description: "Led the development of a food delivery platform with zero platform fees, serving thousands of users daily. Built both the web platform and mobile application.",
    achievements: [
      "Developed and launched the web platform (grabyourmeals.com) using Next.js, TypeScript, and Tailwind CSS",
      "Created and published the mobile app on Google Play Store using React Native",
      "Implemented real-time order tracking and delivery status updates",
      "Integrated secure payment gateways and multiple payment options",
      "Built a scalable backend system handling thousands of daily orders",
      "Achieved 4.8+ star rating on Play Store with 10,000+ downloads"
    ]
  },
  {
    position: "Research Intern (Deep Learning)",
    company: "Indian Institute of Science, Bangalore",
    duration: "2019",
    location: "Bangalore, Karnataka",
    description: "Worked on various 3D Object Detection methods for Autonomous Driving and implemented Stereo RCNN based 3D object detection algorithm.",
    technologies: ["Deep Learning", "Computer Vision", "Python", "PyTorch"],
    achievements: [
      "This algorithm offers 10x cost advantage than Tesla's Lidar based technology",
      "Defined future scope and improvements in the algorithm",
      "Documented the research in an understandable format for newbies",
      "Got Arctic Code Vault",
      "Repository: https://github.com/srinu6/Stereo-3D-Object-Detection-for-Autonomous-Driving"
    ]
  }
];

export const educationData = [
  {
    institution: "National Institute of Technology, Srinagar",
    degree: "Bachelor of Technology",
    duration: "2016 - 2020",
    description: "Completed B.Tech in Computer Science and Engineering"
  },
  {
    institution: "BIEAP",
    degree: "Intermediate Education (XI - XII)",
    duration: "2014 - 2016",
    description: "Score: 968/1000"
  },
  {
    institution: "BSEAP",
    degree: "Secondary School Certificate (X)",
    duration: "2013 - 2014",
    description: "GPA: 9.5/10"
  }
];

export const testimonialsData = [
  {
    name: "Manav Mandal",
    position: "SSE, Optum Global Solutions",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "Srinuvasarao is an exceptional developer who consistently delivers high-quality code. His problem-solving skills and attention to detail make him a valuable asset to any team."
  },
  {
    name: "Dr SN Omkar",
    position: "Cheif Research Scientist, IISc Bangalore",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "Working with Srinuvasarao was a pleasure. He not only understood our technical requirements but also provided valuable insights that improved our product significantly."
  }
];