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
      { title: "IELTS Mock Tests", tag: "IELTS", description: "Practice with IELTS-style test simulations online.", url: "https://www.ieltstestsimulation.com/", keywords: "english ielts mock test simulation" }
    ]
  },
  {
    id: "books", name: "Books", icon: "▤", subtitle: "Free reading resources",
    description: "Discover useful reading resources.",
    resources: [
      { title: "WeLib", tag: "Books", description: "Explore free reading resources from your collection.", url: "https://welib.org/", keywords: "books free welib reading" }
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
      { title: "CodeWithHarry", tag: "Cheatsheets", description: "Programming tutorials, notes and quick-reference material.", url: "https://www.codewithharry.com/", keywords: "programming cheatsheet codewithharry coding" }
    ]
  },
  {
    id: "chinese", name: "Chinese", icon: "文", subtitle: "Language & HSK",
    description: "Practice Mandarin and prepare for HSK.",
    resources: [
      { title: "Mandarin Bean", tag: "Chinese", description: "Chinese reading practice and HSK-oriented learning.", url: "https://mandarinbean.com/", keywords: "chinese mandarin hsk mandarinbean language" }
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
    ]
  }
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
*/
