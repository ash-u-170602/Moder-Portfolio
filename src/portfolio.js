/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashad's Portfolio",
  description:
    "I am an aspiring engineer. I base my personality on technology and science happily. I generally code through Intellij, VS Code, and Android Studio, and use spaces instead of tabs.I try to stay on a constant streak of learning and trying new stuff, using internet as a resource.I like using Linux rather than Windows or MACos.",
  og: {
    title: "Ashad Naushad Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Ashad Naushad",
  logo_name: "Ashad Naushad",
  nickname: "👉👈",
  subTitle:
    "I am an aspiring engineer. I base my personality on technology and science happily. I generally code through Intellij, VS Code, and Android Studio, and use spaces instead of tabs.I try to stay on a constant streak of learning and trying new stuff, using internet as a resource.I like using Linux rather than Windows or MACos.",
  resumeLink: "",
  portfolio_repository: "",
  githubProfile: "https://github.com/ash-u-170602",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ash-u-170602",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashadnaushad/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mohda170602@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ashad_naushad",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/ashad.naushad.3/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ash_u._/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Android Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing and designing highly-functional and user-friendly mobile applications for Android using Java and Kotlin",
        "⚡ Experience in utilizing Android SDK and Android Studio for app development and testing. Implementing various forms of data storage such as SQLite databases and cloud storage.",
        "⚡ Utilizing Android APIs for accessing device functionality such as the camera, GPS, and accelerometer. Implementing push notifications and background services. Incorporating third-party libraries for added functionality",
        "⚡ Implementing and utilizing testing frameworks for app testing. Publishing and maintaining app updates on the Google Play Store.",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "logos:android-vertical",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos-firebase",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin-icon",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos-flutter",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "skill-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "CyberSecurity",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Identifying and mitigating potential security threats through the use of various security tools and techniques.",
        "⚡ Performing penetration testing and vulnerability assessments to identify weaknesses in systems and networks.",
        "⚡ Implementing security measures such as firewalls, intrusion detection and prevention systems, and encryption protocols to protect against cyber attacks.",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Mint",
          fontAwesomeClassname: "logos:linux-mint",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Burpsuite",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Metasploit",
          fontAwesomeClassname: "simple-icons:meta",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Video Editing",
      fileName: "DesignImg",
      skills: [
        "⚡ Manipulating and editing video footage using industry-standard software such as Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve.",
        "⚡ Creating visually compelling and engaging content through the use of visual effects, color correction, and audio mixing.",
        "⚡ Collaborating with clients and other members of a production team to achieve desired creative vision and deliver high-quality final product.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Adobe Premiere Pro",
          fontAwesomeClassname: "simple-icons:adobepremierepro",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Adobe",
          fontAwesomeClassname: "simple-icons:adobe",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Shotcut",
          fontAwesomeClassname: "simple-icons:shotcut",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Adobe After Effects",
          fontAwesomeClassname: "simple-icons:adobeaftereffects",
          style: {
            color: "#336791",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/ash_u_/",
    },
    {
      siteName: "Geek for Geeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/mohda170602/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jamia Hamdard University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "Jamia_Hamdard_Logo.svg.png",
      alt_name: "JHU",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I am studying basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I am also in courses on Android Development, Machine Learning, DevOps and Full Stack Development.",
        "⚡ I am selected for Merit cum Means Scholarship which is given to top 10% of students in college.",
        "⚡ I have participated in many hackathons and events in Delhi NCR.",
      ],
      website_link: "http://jamiahamdard.edu/",
    },
    {
      title: "Aakash Institute",
      subtitle: "Preparation gap for JEE Competetive Exam",
      logo_path: "aakash1.png",
      alt_name: "DAV37",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Scored 93 percentile in jee mains.",
        "⚡ Scored 98.2 percentile in Physics alone.",
        "⚡ Had 60432 rank in general category.",
      ],
      website_link: "http://dav37.edu.in/",
    },

    {
      title: "D.A.V. Public School",
      subtitle: "Primary and High School",
      logo_path: "DAV.png",
      alt_name: "DAV37",
      duration: "2005 - 2020",
      descriptions: [
        "⚡ Achieved high academic performance, scoring above 90% in 12th and above 85% in 10th.",
        "⚡ Participated and won in various academic Olympiads like IMO and NASA's Olympiad.",
        "⚡ Served as head boy of a school club and participated in few hackathons.",
      ],
      website_link: "http://dav37.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Hack The Mountains",
      subtitle: "- Jai Sadana",
      logo_path: "HTM.png",
      certificate_link:
        "https://certificate.givemycertificate.com/c/93f250d4-7409-4943-b6e6-9de4836bcc4d",
      alt_name: "Hack The Mountains",
      color_code: "#8C151599",
    },
    {
      title: "Hack Miner",
      subtitle: "- Ceo Social",
      logo_path: "GDSCpng.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "Hack Miner",
      color_code: "#00000099",
    },
    {
      title: "Nasa Space App Challenge",
      subtitle: "- Dr. Keith Gaddis",
      logo_path: "nasa.png",
      certificate_link:
        "https://media.licdn.com/dms/image/C4D22AQHnRr57jDdzKQ/feedshare-shrink_800/0/1668627291309?e=1677715200&v=beta&t=ztzP5gHywJRNFgUrYY22RKlRVZB4HhoEGrxxlhDMFNE",
      alt_name: "Nasa",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with some evolving startups as SDE ,Designer and Software Architect. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - Aug 2021",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Android Developer Intern",
          company: "Accenture",
          company_url: "https://www.accenture.com/in-en",
          logo_path: "original.img.png",
          duration: "Sep 2022 - Dec 2022",
          location: "Work from home",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        {
          title: "Google Developer Students Club Member",
          company: "GDSC JH",
          company_url: "https://www.linkedin.com/company/gdsc-jh/",
          logo_path: "GDSCpng.png",
          duration: "Jan 2022 - PRESENT",
          location: "Jamia Hamdard, New Delhi",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "HackClub Android Development Mentor",
          company: "HackClub JH",
          company_url: "https://hackclub-jh.github.io/",
          logo_path: "hackclub.png",
          duration: "Aug 2021 - PRESENT",
          location: "Jamia Hamdard, Delhi",
          description:
            "As a HackClub Android Development Mentor, I have experience mentoring students in the areas of Android Development, including app design and development, data storage, and device functionality. I have also helped students to understand the importance of version control, testing frameworks and collaboration using Git.",
          color: "#D83B01",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2021 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like HackClub's website, Read me files and many more. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create discord bots and deploy them to web applications using dicord's sdk.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Android, React, Python and Opensource Development.",
  },
  // blogSection: {
  //   title: "",
  //   subtitle:
  //     "",
  //   link: "",
  //   avatar_image_path: "",
  // },
  // addressSection: {
  //   title: "",
  //   subtitle:
  //     "",
  //   avatar_image_path: "",
  //   location_map_link: "",
  // },
  // phoneSection: {
  //   title: "",
  //   subtitle: "",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
