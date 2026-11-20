UNLOCK KNOWLEDGE — HOW TO EDIT (no coding needed)
==================================================
Open any file with Notepad / VS Code. Save, then refresh index.html in your browser.

FILES
  data/resources.js  -> ALL website links on the home page   (edit this most)
  data/notes.js      -> ALL notes on the Notes page
  index.html     -> light home page (hero, top picks, favorites, category cards)
  Resources.html -> the full "Learning resources" page (filled automatically from data/resources.js)
  Note.html      -> notes page
  style.css          -> colors & design (top of file: :root{ --blue:#1677ff ... })
  script.js          -> logic (search, favorites, filters). You rarely need this.

ADD A RESOURCE  (data/resources.js)
  Copy one line like this inside a category's  resources: [ ... ]  and edit it.
  Keep the comma between lines (no comma after the last one):
  { title: "Site Name", tag: "Short label", description: "One sentence.", url: "https://example.com", keywords: "words people may search" }
  TOP PICKS: at the very top of data/resources.js is a list called TOP_PICKS.
  Type the resource's exact title there to show it in "Top picks"; delete the name to remove it.

REMOVE A RESOURCE
  Delete its whole line (from { to }). Fix commas if needed.

ADD A CATEGORY
  Copy a whole category block  { id: "...", name: "...", ... resources: [ ... ] }
  Paste it after another block with a comma between. "id" must be unique, lowercase, no spaces.
  Icon can be any letter, symbol or emoji.

REMOVE A CATEGORY
  Delete its whole { ... } block.

CHANGE COLORS
  style.css, first line: change --blue (main color) and --navy (headings).

If the page goes blank after an edit, a comma or quote is missing in the file you edited.
Press F12 > Console in your browser; it shows the line number.

CHANGE THE GAP UNDER THE HOME HERO (above the search box)
  Open style.css, go to the very bottom and change:  --hero-gap:50px
  Smaller number = smaller gap.
