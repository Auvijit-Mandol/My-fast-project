// ============================================================
// UNLOCK KNOWLEDGE — NOTES DATA
// Add a collection by copying one whole collection object.
// Add a topic by copying one object inside its topics array.
// Put the exact Google Drive / Docs URL in the "url" field.
// Use url: "" if a topic is not ready yet.
// ============================================================
window.NOTE_COLLECTIONS = [
  {
    id: "english-notes", name: "English", icon: "Aa", tag: "Language",
    description: "English learning notes and resources.",
    topics: [
      { title: "English Notes", description: "Main English study collection.", url: "https://drive.google.com/drive/folders/1WNvOxntoPUynaGlxqGtLoySfcDYI6yjl", keywords: "english language notes" }
    ]
  },
  {
    id: "books-notes", name: "Books", icon: "▤", tag: "Books",
    description: "Book notes and reading material.",
    topics: [
      { title: "Books Collection", description: "Add your Drive link when this collection is ready.", url: "", keywords: "books reading notes" }
    ]
  },
  {
    id: "programming-notes", name: "Programming", icon: "</>", tag: "Coding",
    description: "Programming notes and study resources.",
    topics: [
      { title: "Programming Notes", description: "Main programming study collection.", url: "https://drive.google.com/drive/folders/1sH0PH5dO_6dDF28f2ZAS5KOIDGhkO4B6", keywords: "programming coding notes" },
      { title: "Programming Chatsheet", description: "Main programming study collection.", url: "https://drive.google.com/drive/folders/1mw_fvgLYdqEsTie5dnCxYu7ZanGLr-Xv", keywords: "programming coding notes 2" }
      
    ]
  },
  {
    id: "chinese-notes", name: "Chinese Language", icon: "文", tag: "Language",
    description: "Chinese learning and HSK-related material.",
    topics: [
      { title: "Chinese Notes", description: "Chinese and HSK study material.", url: "https://drive.google.com/drive/folders/1JF2Nco_76u2UtfLdC09tb7jOYMPRHD_B", keywords: "chinese language hsk notes" }
    ]
  },
  {
    id: "ielts-notes", name: "IELTS Materials", icon: "◎", tag: "IELTS",
    description: "IELTS preparation collections and study packs.",
    topics: [
      { title: "1st IELTS Materials", description: "IELTS study material collection.", url: "https://drive.google.com/drive/folders/1RP5ICcWKgHBsWVrMRu_ttRS8qeEKbo-K", keywords: "ielts 1st first materials" },
      { title: "3rd IELTS Materials", description: "IELTS study material collection.", url: "https://drive.google.com/drive/folders/1-QFiAlfogBDVLUqO0MfnJVxXVBm5t0-F", keywords: "ielts 3rd third materials" },
      { title: "4th IELTS Materials", description: "IELTS material hosted in Google Docs.", url: "https://docs.google.com/document/d/1ijY3W83PohUpOVYEwUfRA-TsbJTWrfpRPANIYXf5UfY/edit?tab=t.0", keywords: "ielts 4th fourth materials docs" }
    ]
  }
];

/* EXAMPLE — NEW COLLECTION
,
{
  id: "physics-notes", name: "Physics", icon: "⚛", tag: "Science",
  description: "Physics notes and study materials.",
  topics: [
    { title: "Mechanics", description: "Motion, force and energy.", url: "YOUR_GOOGLE_DRIVE_LINK", keywords: "physics mechanics force motion" },
    { title: "Thermodynamics", description: "Heat and thermodynamic laws.", url: "YOUR_GOOGLE_DRIVE_LINK", keywords: "physics thermodynamics heat" }
  ]
}
*/
