export const personalData = {
  name: "Srinu Maripi",
  title: "Senior Software Engineer",
  email: "srinumaripi.nitsri@gmail.com", // Replace with actual email
  phone: "+91-9014326315", // Replace with actual phone
  location: "Hyderabad, India", // Replace with actual location
  about: "Senior Software Engineer with extensive experience in full-stack development, specializing in building scalable Web & Mobile applications and creating educational content. Passionate about solving complex problems and sharing knowledge with the developer community.",
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
      { name: "Testing", level: 90 },
      { name: "Performance Optimization", level: 90 }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Lycho Seeds",
    description: "An e-commerce platform for organic seeds with detailed product information",
    image: "https://images.pexels.com/photos/7728083/pexels-photo-7728083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "React", "TailwindCSS", "Node.js", "MongoDB"],
    liveUrl: "https://www.lychoseeds.com/",
    codeUrl: "#", // Replace with actual GitHub repo
    featured: true
  },
  {
    id: 2,
    title: "Glory Divine Gallery",
    description: "A modern Christian products store with advanced filtering",
    image: "https://images.pexels.com/photos/20384/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "React", "TailwindCSS", "Node.js", "MongoDB", "AWS"],
    liveUrl: "https://glorydivinegallery.vercel.app/",
    codeUrl: "#", // Replace with actual GitHub repo
    featured: true
  },
  {
    id: 3,
    title: "Rowdy Coders",
    description: "Educational platform providing coding tutorials, articles, and resources for developers of all skill levels.",
    image: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Wordpress"],
    liveUrl: "https://rowdycoders.com/",
    codeUrl: "#", // Replace with actual GitHub repo
    featured: true
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Interactive weather application with real-time updates, forecasts, and location-based services.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "JavaScript", "API Integration", "CSS"],
    liveUrl: "#", // Replace with actual URL
    codeUrl: "#", // Replace with actual GitHub repo
    featured: false
  }
];

export const contentCreationData = {
  youtube: {
    channel: "Rowdy Coders",
    url: "https://www.youtube.com/@RowdyCoders",
    subscribers: "6K+", // Replace with actual number
    videos: "90+", // Replace with actual number
    description: "Educational content focused on web development tutorials, coding tips, and industry insights.",
    featuredVideos: [
      {
        title: "Building a Next.js Portfolio from Scratch",
        url: "https://www.youtube.com/@RowdyCoders",
        thumbnail: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Advanced React Hooks Tutorial",
        url: "https://www.youtube.com/@RowdyCoders",
        thumbnail: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Mastering TailwindCSS in 2023",
        url: "https://www.youtube.com/@RowdyCoders",
        thumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ]
  },
  blog: {
    title: "Rowdy Coders Blog",
    url: "https://rowdycoders.com/blog",
    description: "Technical articles and tutorials on web development, programming best practices, and industry trends.",
    featuredPosts: [
      {
        title: "Understanding React Server Components",
        url: "https://rowdycoders.com/blog",
        date: "June 10, 2023"
      },
      {
        title: "Building Accessible Web Applications",
        url: "https://rowdycoders.com/blog",
        date: "May 22, 2023"
      },
      {
        title: "Next.js 13: What's New and Improved",
        url: "https://rowdycoders.com/blog",
        date: "April 15, 2023"
      }
    ]
  }
};

export const experienceData = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Software Engineer",
    duration: "2020 - Present",
    description: "Lead development of enterprise web applications, mentoring junior developers, and implementing best practices for code quality and performance.",
    achievements: [
      "Reduced load time by 40% through performance optimizations",
      "Led the migration from legacy systems to modern React architecture",
      "Implemented CI/CD pipelines improving deployment efficiency by 60%"
    ]
  },
  {
    company: "WebSolutions LLC",
    position: "Full Stack Developer",
    duration: "2017 - 2020",
    description: "Developed and maintained multiple client applications using React, Node.js, and various databases. Collaborated with UX designers to implement responsive interfaces.",
    achievements: [
      "Developed RESTful APIs serving 1M+ requests daily",
      "Created reusable component library reducing development time by 30%",
      "Implemented automated testing reducing bugs in production by 45%"
    ]
  },
  {
    company: "Digital Creators Co.",
    position: "Frontend Developer",
    duration: "2015 - 2017",
    description: "Built responsive web interfaces and implemented design systems. Collaborated with backend developers to integrate APIs and services.",
    achievements: [
      "Developed company's first design system and component library",
      "Improved accessibility across all web properties",
      "Mentored junior developers in modern JavaScript practices"
    ]
  }
];

export const educationData = [
  {
    institution: "University of Technology",
    degree: "Master of Computer Science",
    duration: "2013 - 2015",
    description: "Specialized in Web Technologies and Distributed Systems"
  },
  {
    institution: "State University",
    degree: "Bachelor of Science in Computer Engineering",
    duration: "2009 - 2013",
    description: "Graduated with honors, participated in ACM programming competitions"
  }
];

export const testimonialsData = [
  {
    name: "Jane Smith",
    position: "CTO, Tech Innovations",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "Srinuvasarao is an exceptional developer who consistently delivers high-quality code. His problem-solving skills and attention to detail make him a valuable asset to any team."
  },
  {
    name: "Mark Johnson",
    position: "Product Manager, WebSolutions",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "Working with Srinuvasarao was a pleasure. He not only understood our technical requirements but also provided valuable insights that improved our product significantly."
  },
  {
    name: "Sarah Williams",
    position: "CEO, Digital Creators",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonial: "Srinuvasarao's expertise in modern web technologies helped transform our digital presence. His educational content has also been invaluable for our development team."
  }
];