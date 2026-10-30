// ============================================================
// TOP PICKS — type the exact resource title (from the lists below).
// Add a name to show it in "Top picks". Delete a name to remove it.
// Keep quotes and commas:  "Name",
// ============================================================
window.TOP_PICKS = [
  "Coddy",
  "Learn Anything",
  "The Toy Maker",
  "Floor796",
  //"OpenLearn"
];

// ============================================================
// UNLOCK KNOWLEDGE — RESOURCE DATA
// To add a category: copy one whole category object and edit it.
// To add a resource: copy one object inside that category's resources array.
// ============================================================
window.RESOURCE_CATEGORIES = [
  {
    id: "english", name: "English", icon: "Aa", subtitle: "Language & IELTS",
    description: "Improve your English and prepare for IELTS.",
    resources: [
      { title: "OpenLearn", tag: "English", description: "English skills learning resources from The Open University.", url: "https://www.open.edu/openlearn/education-development/english-skills-learning/", keywords: "english openlearn skills learning" },
      { title: "LanGeek", tag: "Vocabulary", description: "Build vocabulary with organized lessons and learning tools.", url: "https://langeek.co/en/vocab", keywords: "english langeek vocabulary vocab" },
      { title: "IELTS Mock Tests", tag: "IELTS", description: "Practice with IELTS-style test simulations online.", url: "https://www.ieltstestsimulation.com/", keywords: "english ielts mock test simulation" },
      { title: "PlayPhrase.me", tag: "English", description: "Type any sentence and watch movie clips that say it.", url: "https://bd.playphrase.me/", keywords: "english listening movie clips sentence pronunciation" },
      { title: "Loecsen", tag: "Any Language", description: "Learn useful phrases and vocabulary in dozens of languages.", url: "https://www.loecsen.com/en", keywords: "language phrases vocabulary travel anylearn" }
    ,{ title: "Ielts speaking question ", tag: "IELTS", description: "", url: "https://www.bestmytest.com/ielts/speaking ", keywords: "" },
   
    { title: "Ielts speaking question", tag: "IELTS", description: "", url: "https://www.ieltsadvantage.com/2023/02/19/ielts-speaking-questions/?gad_source=1&gad_campaignid=20119378253&gbraid=0AAAAADG84MUBCgBkcHVFfuErkniBJUt6j&gclid=CjwKCAiA24XJBhBXEiwAXElO3_0i5BoN7pT-xtto48LFL7VcUlFLr-0wkzE8gWfxarxoQBu0tvAJIBoCyRUQAvD_BwE  ", keywords: "" },
    { title: "Speaking practice", tag: "IELTS", description: "", url: "https://www.jumpinto.com/ielts/practice ", keywords: "" }

    ]
  },
  {
    id: "books", name: "Books", icon: "📚", subtitle: "Free reading resources",
    description: "Discover useful reading resources.",
    resources: [
      { title: "WeLib", tag: "Books", description: "Explore free reading resources from your collection.", url: "https://welib.org/", keywords: "books free welib reading" },
      { title: "Python book", tag: "", description: "", url: " https://inventwithpython.com/bigbookpython/ ", keywords: "" },
      { title: "Python Program Book", tag: "", description: "", url: "https://automatetheboringstuff.com/ - ", keywords: "" }
    ]
  },
  {
    id: "programming", name: "Programming", icon: "</>", subtitle: "Web & coding",
    description: "Learn web development, programming and coding concepts.",
    resources: [
      { title: "GeeksforGeeks", tag: "Programming", description: "Tutorials, coding concepts and programming practice.", url: "https://www.geeksforgeeks.org/", keywords: "programming geeksforgeeks coding" },
      { title: "HTML Tutorial", tag: "HTML", description: "Learn HTML fundamentals with TutorialsPoint.", url: "https://www.tutorialspoint.com/html/", keywords: "html tutorialspoint learn web" },
      { title: "W3Schools", tag: "Web Development", description: "Reference and tutorials for popular web technologies.", url: "https://www.w3schools.com/", keywords: "w3schools html css javascript web" },
      { title: "CodePen", tag: "CSS", description: "Experiment with front-end code and learn from examples.", url: "https://codepen.io/", keywords: "css design codepen frontend" },
      { title: "GoalKicker", tag: "Notes", description: "Programming notes and reference material.", url: "https://goalkicker.com/", keywords: "programming notes goal kicker books" },
      { title: "CodeWithHarry", tag: "Cheatsheets", description: "Programming tutorials, notes and quick-reference material.", url: "https://www.codewithharry.com/", keywords: "programming cheatsheet codewithharry coding" },
      { title: "Coddy", tag: "Interactive", description: "Learn programming with mini quizzes and hands-on AI-guided lessons.", url: "https://coddy.tech", keywords: "coding learn quiz interactive ai" },
      { title: "Diode", tag: "Electronics", description: "Build, program and simulate electronic circuits online.", url: "https://withdiode.com", keywords: "electronics circuit simulate build" },
      { title: "Uiverse", tag: "UI", description: "Ready-made interactive UI elements for your website.", url: "https://uiverse.io/", keywords: "ui css buttons components website" }
    ]
  },
  {
    id: "chinese", name: "Chinese", icon: "文", subtitle: "Language & HSK",
    description: "Practice Mandarin and prepare for HSK.",
    resources: [
      { title: "Mandarin Bean", tag: "Chinese", description: "Chinese reading practice and HSK-oriented learning.", url: "https://mandarinbean.com/", keywords: "chinese mandarin hsk mandarinbean language" }
     ,{ title: "", tag: "Lead Academy Chiness", description: "", url: "https://lead.academy/course/chinese-language-online-course  ", keywords: "" },
      { title: "", tag: "Class Central Chiness Course", description: "", url: "https://www.classcentral.com/classroom/youtube-learn-chinese-language-in-bangla-92497 ", keywords: "" }
    ]
  },
  
  {
    id: "science", name: "Science & Study", icon: "⚗", subtitle: "Medical, chemistry, math",
    description: "Interactive tools for science, medicine and maths.",
    resources: [
      { title: "Servier Medical Art", tag: "Medical", description: "Free medical illustrations for study and presentations.", url: "https://smart.servier.com/", keywords: "medical study illustration biology" },
      { title: "BioDigital Human", tag: "Anatomy", description: "Explore the human body in interactive 3D.", url: "https://human.biodigital.com/login?returnUrl=/explore", keywords: "anatomy biology human body 3d" },
      { title: "ChemEquations", tag: "Chemistry", description: "Balance and look up chemical equations.", url: "https://chemequations.com/en/", keywords: "chemistry equations balance" },
      { title: "Nobook Virtual Lab", tag: "Chemistry", description: "Do chemistry practicals virtually.", url: "https://chemistry-en.nobook.com/console/templates/resource", keywords: "chemistry lab practical virtual" },
      { title: "Cymath", tag: "Math", description: "Solve any math equation step by step.", url: "https://www.cymath.com/", keywords: "math equation solve calculator" },
      { title: "Paper2Gal", tag: "Study Game", description: "Study by playing a game.", url: "https://paper2gal.com/", keywords: "study game learn" },
    ]
  },
  //Music Added new Need Adjustment
  {
    id: "Music", name: "Music", icon: "🎵", subtitle: "Learning Music",
    description: "Learn Music And Musical Instrument.",
    resources: [
        { title: "JustinGuitar", tag: "Music", description: "Structured guitar lessons for independent learners.", url: "https://www.justinguitar.com/guitar-lessons", keywords: "guitar learning justinguitar music" },
      
      ]
  },
  {
    id: "design", name: "Design & Creative", icon: "✎", subtitle: "3D, animation, graphics",
    description: "Assets and tools for designers, makers and creators.",
    resources: [
      { title: "Pixie.haus", tag: "Pixel Art", description: "AI pixel art maker and animator.", url: "https://pixie.haus/", keywords: "pixel art ai animation game" },
      { title: "Thiings", tag: "3D Icons", description: "Find any 3D PNG icon.", url: "https://www.thiings.co/things", keywords: "3d png icons" },
      { title: "PNGimg", tag: "PNG", description: "High-resolution transparent PNG images.", url: "https://pngimg.com/", keywords: "png images transparent hd" },
      { title: "Sketchfab", tag: "3D Models", description: "Browse and download 3D models.", url: "https://sketchfab.com/", keywords: "3d models game assets" },
      { title: "Jitter", tag: "Motion", description: "Create high-quality motion graphics.", url: "https://jitter.video/", keywords: "graphics animation motion video" },
      { title: "Mult.dev", tag: "Animation", description: "Flite animation tool.", url: "https://mult.dev", keywords: "animation flite" },
      { title: "Paper Animator", tag: "Animation", description: "Make paper-style animations.", url: "https://paperanimator.com", keywords: "paper animation" },
      { title: "MoeWalls", tag: "Wallpapers", description: "Live wallpapers for your desktop.", url: "https://moewalls.com/", keywords: "live wallpaper desktop" },
      { title: "MotionBGs", tag: "Wallpapers", description: "4K live wallpapers.", url: "https://motionbgs.com", keywords: "4k live wallpaper" },
      { title: "Napkin AI", tag: "Visuals", description: "Turn text into flowcharts and visuals.", url: "https://napkin.ai", keywords: "flowchart diagram text visual ai" },
      { title: "MusicGPT", tag: "AI Music", description: "AI music maker.", url: "https://musicgpt.com", keywords: "music ai generate song" },
      { title: "Musicca", tag: "Music", description: "Learn music theory.", url: "https://musicca.com", keywords: "music theory learn" },
      { title: "Home by Me", tag: "Home Design", description: "Design a home in 3D.", url: "https://home.by.me/en/", keywords: "home design 3d interior" },
      { title: "IKEA Planner", tag: "Home Design", description: "Design your home online.", url: "https://ikea.com", keywords: "home design furniture room" },
      { title: "FreeSewing", tag: "Fashion", description: "Design your own clothes.", url: "https://freesewing.eu", keywords: "clothes sewing pattern fashion" },
      { title: "The Toy Maker", tag: "Paper Craft", description: "Make your own paper toys.", url: "https://www.thetoymaker.com/", keywords: "paper toy craft" },
      { title: "The Arts Cavenger", tag: "Vintage", description: "Printable digital vintage images.", url: "https://www.theartscavenger.com/", keywords: "vintage printable images art" },
      { title: "MyInstants", tag: "Sound", description: "Viral sound effects buttons.", url: "https://www.myinstants.com/", keywords: "sound effects meme viral" }
    ]
  },
  {
    id: "tools", name: "Handy Tools", icon: "⚙", subtitle: "Everyday utilities",
    description: "Free tools that save time on everyday tasks.",
    resources: [
      { title: "TypingClub", tag: "Typing", description: "Practice typing with structured lessons.", url: "https://www.typingclub.com/", keywords: "typing practice keyboard" },
      { title: "iFixit", tag: "Repair", description: "Guides to fix PCs, laptops and phones.", url: "https://www.ifixit.com/", keywords: "repair fix pc laptop mobile" },
      { title: "Vocal Remover", tag: "Audio", description: "Separate vocals and music from a song, no login.", url: "https://vocalremover.org/", keywords: "audio vocal remover music karaoke" },
      { title: "TinyWow", tag: "All-in-one", description: "Free image, PDF and video tools.", url: "https://tinywow.com", keywords: "pdf image video tools converter" },
      { title: "Sejda", tag: "PDF", description: "Edit PDF files online.", url: "https://sejda.com", keywords: "pdf edit" },
      { title: "SEO Studio Tools", tag: "Web", description: "Free SEO, text, image, YouTube and developer tools.", url: "https://seostudio.tools/", keywords: "seo text image youtube converter calculator" },
      { title: "City Roads", tag: "Maps", description: "Generate a PNG map of any area's roads.", url: "https://anvaka.github.io/city-roads/", keywords: "map png roads city" },
      { title: "ChefGPT", tag: "Food", description: "Enter your ingredients and get a recipe.", url: "https://www.chefgpt.xyz", keywords: "recipe food ingredients cooking ai" },
      { title: "ChatLLM", tag: "AI", description: "One AI app to build games, chat and more.", url: "https://chatllm.abacus.ai/", keywords: "ai chatbot games assistant" },
      { title: "Can You Run It", tag: "PC", description: "Type a game name and see if your PC can run it.", url: "https://www.systemrequirementslab.com/cyri", keywords: "pc game requirements" },
      { title: "BuildCores", tag: "PC", description: "Build your dream PC virtually.", url: "https://buildcores.com", keywords: "pc build computer parts" }
    ]
  },
  {
    id: "games", name: "Fun & Games", icon: "🎮", subtitle: "Beat the boredom",
    description: "Browser games and playful sites for a break.",
    resources: [
      { title: "GeoFS", tag: "Flight", description: "Fly planes in a browser flight simulator.", url: "https://www.geo-fs.com/", keywords: "flight simulator plane game" },
      { title: "Townscaper", tag: "Builder", description: "Relaxing little town builder.", url: "https://oskarstalberg.com/Townscaper/", keywords: "town builder relax game" },
      { title: "PlayGlenn", tag: "Game", description: "A fun browser game.", url: "https://playglenn.com/", keywords: "game boredom" },
      { title: "Neal.fun", tag: "Interactive", description: "Quirky interactive web toys.", url: "https://neal.fun/", keywords: "fun interactive boredom games" },
      { title: "Floor796", tag: "Explore", description: "A huge animated sci-fi scene to explore.", url: "https://floor796.com/", keywords: "animation explore boredom" },
      { title: "Veck.io", tag: "Game", description: "A fast browser game.", url: "https://veck.io", keywords: "game boredom shooter" },
      { title: "Slow Roads", tag: "Driving", description: "Relaxing endless driving.", url: "https://slowroads.io", keywords: "driving relax game" },
      { title: "BuildIt", tag: "Minecraft", description: "Learn to build anything in Minecraft.", url: "https://builditapp.com", keywords: "minecraft build" },
    { title: "Free Game Asset", tag: "G Asset", description: "", url: " https://itch.io/game-assets/free", keywords: "" },
    { title: "Free Game Asset", tag: "G Asset", description: "", url: "https://craftpix.net/sets/ ", keywords: "" }
    ]
  },
  {
    id: "explore", name: "Explore the World", icon: "🌍", subtitle: "Maps, space & history",
    description: "Travel, see cities in 3D and look back in time.",
    resources: [
      { title: "Driven & Listen", tag: "Travel", description: "Drive around the world virtually by picking a city.", url: "https://drivenlisten.com", keywords: "travel world drive city virtual" },
      { title: "F4 Map", tag: "3D Maps", description: "Explore any city in 3D.", url: "https://demo.f4map.com", keywords: "city 3d map explore" },
      { title: "Old Maps Online", tag: "History", description: "See maps from the past.", url: "https://www.oldmapsonline.org/en", keywords: "history old maps" },
      { title: "NASA Hubble Birthday", tag: "Space", description: "See what Hubble saw on your birthday.", url: "https://science.nasa.gov/specials/apps/what-did-hubble-see-on-your-birthday/", keywords: "space hubble nasa birthday" }
    ]
  },
  {
    id: "jobs", name: "Earn Online", icon: "$", subtitle: "AI & micro-task work",
    description: "Platforms that pay for AI training and online tasks. Always check terms and reviews first.",
    resources: [
      { title: "Remotasks", tag: "Job", description: "Online tasks and AI training work.", url: "https://remotasks.com", keywords: "job work ai tasks" },
      { title: "Neevo", tag: "Job", description: "Online task work.", url: "https://neevo.ai", keywords: "job work tasks" },
      { title: "Hive Micro", tag: "Job", description: "Get paid to train AI.", url: "https://hivemicro.com", keywords: "job ai training" },
      { title: "RWS", tag: "Job", description: "Get paid for feedback on AI apps.", url: "https://rws.com", keywords: "job ai feedback" },
      { title: "Clickworker", tag: "Job", description: "Micro-jobs and online tasks.", url: "https://clickworker.com", keywords: "job microtask" },
      { title: "Pareto", tag: "Job", description: "AI data work.", url: "https://pareto.ai", keywords: "job ai data" },
      { title: "Appen", tag: "Job", description: "Data and AI training projects.", url: "https://appen.com", keywords: "job ai data" }
    ]
  },
  // Job Added new Need some more Adjustment
  {
    id: "Job", name: "Jobs", icon: "💼", subtitle: "Find Job",
    description: "Find job national-international level and Job Related Like CV, Resume, Preaperation.",
    resources: [
    { title: "Job Internationa", tag: "", description: "", url: "https://wellfound.com/", keywords: "" }
    ,{ title: "Student resume ", tag: "", description: "", url: "https://zety.com/blog/student-resume/", keywords: "" },
    { title: "No Experiance resume", tag: "", description: "", url: " https://novoresume.com/career-blog/resume-advice-for-students-with-no-experience", keywords: "" },
    { title: "No Experiance Resume 2", tag: "", description: "", url: "https://www.myperfectresume.com/career-center/resumes/how-to/first-job-no-experience ", keywords: "" }
   ]
  },
  {
    id: "different", name: "Different Topics", icon: "✦", subtitle: "Skills & useful tools",
    description: "Useful learning tools and resources beyond the main categories.",
    resources: [
      { title: "JustinGuitar", tag: "Music", description: "Structured guitar lessons for independent learners.", url: "https://www.justinguitar.com/guitar-lessons", keywords: "guitar learning justinguitar music" },
      { title: "Forage", tag: "Career", description: "Free job simulations and virtual work experience.", url: "https://www.theforage.com/", keywords: "internship forage career free" },
      { title: "Social Blade", tag: "Analytics", description: "Explore public statistics for social media channels.", url: "https://socialblade.com/", keywords: "youtube instagram tiktok analyzer socialblade analytics" },
      { title: "MindLuster", tag: "Courses", description: "Browse online courses and learning topics.", url: "https://www.mindluster.com/", keywords: "online course certificate mindluster free" },
      { title: "ChatEDU", tag: "Study Tool", description: "Study-oriented tools for working with educational material.", url: "https://chatedu.io/en", keywords: "education file note exam question chatedu ai" },
      { title: "Symbolab", tag: "Mathematics", description: "Step-by-step tools for many types of mathematics problems.", url: "https://www.symbolab.com/", keywords: "math solve symbolab calculator" }
    ,{ title: "virus chack of file", tag: "Virus Checker", description: "", url: "https://www.virustotal.com/gui/home/upload ", keywords: "" },
   { title: "PC Repairing Software", tag: "PC Fix", description: "PC Data recover, boot without operating system install", url: "https://www.hirensbootcd.org/ ", keywords: "" }
    ]
  },
  {
    id: "AnyLearn", name: "Learn anything", icon: "🎓", subtitle: "Learning ",
    description: "Best Platform for Learning anything Free and Paid Courses.",
    resources: [
    { title: "Classcentral", tag: "online Course", description: "", url: "https://www.classcentral.com/ ", keywords: "" },
    { title: "lead.academy", tag: "online Course", description: "", url: "https://lead.academy/ ", keywords: "" },
    { title: "Learn Anything", tag: "Discovery", description: "Type a topic and get the best resources on the internet.", url: "https://learn-anything.xyz/", keywords: "learn topic resources roadmap" }
    
  ]
}

,
];

/* EXAMPLE — NEW CATEGORY
,
{
  id: "physics", name: "Physics", icon: "⚛", subtitle: "Theory & problem solving",
  description: "Physics learning resources.",
  resources: [
    { title: "My Physics Resource", tag: "Physics", description: "Short description.", url: "https://example.com", keywords: "physics mechanics" }
  ]
}

,
{
  id: "Game", name: "Game", icon: "🎮", subtitle: "Free Game Asset",
  description: "Physics learning resources.",
  resources: [
    { title: "Free Game Asset", tag: "", description: "", url: " https://itch.io/game-assets/free", keywords: "" },
    { title: "Free Game Asset", tag: "", description: "", url: "https://craftpix.net/sets/ ", keywords: "" }
    
  ]
}
*/
