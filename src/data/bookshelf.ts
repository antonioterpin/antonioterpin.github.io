export interface Book {
  title: string;
  favourite?: boolean;
}

export const books: Book[] = [
  { title: "The art of doing science and engineering", favourite: true },
  { title: "The computer and the brain" },
  { title: "Chip war" },
  { title: "The structure of scientific revolutions" },
  { title: "Skin in the game" },
  { title: "The black swan" },
  { title: "Antifragile" },
  { title: "The bed of procrustes" },
  { title: "Anna", favourite: true },
  { title: "Alan Turing: The Enigma" },
  { title: "Walt Disney" },
  { title: "Building moonshot" },
  { title: "Atomic habits" },
  { title: "The lean startup" },
  { title: "The almanack of Naval Ravikant" },
  { title: "The solitude of prime numbers" },
  { title: "Sapiens" },
  { title: "Six easy pieces" },
  { title: "Pressure" },
  { title: "Invention and innovation" },
  { title: "The three-body problem" },
  { title: "The dark forest" },
  { title: "Death's end" },
  { title: "Work" },
  { title: "Why greatness cannot be planned", favourite: true },
  { title: "The art of war", favourite: true },
  { title: "I am a strange loop" },
  { title: "Gödel, Escher, Bach" },
  { title: "Stranger in a strange land" },
  { title: "The diamond age" },
  { title: "Dune" },
  { title: "The art of electronics" },
  { title: "When the Heavens went on sale" },
  { title: "Range", favourite: true },
  { title: "Where is my flying car" },
  { title: "Poor Charlie's almanack" },
  { title: "Radical candor" },
  { title: "Elon Musk" },
  { title: "Steve Jobs" },
  { title: "How to be a founder" },
  { title: "The mom test" },
  { title: "Build" },
  { title: "Security analysis" },
  { title: "The intelligent investor" },
  { title: "Lessons of History", favourite: true },
  { title: "From zero to one", favourite: true },
  {
    title: "The british industrial revolution in global perspective",
    favourite: true,
  },
  { title: "Entangled life", favourite: true },
  { title: "The defining decade", favourite: true },
  { title: "Fierce conversations", favourite: true },
  { title: "Outliers", favourite: true },
  { title: "How the world really works", favourite: true },
];

export interface ReadingPick {
  year: number;
  text: string;
}

export const readingPicks: ReadingPick[] = [
  {
    year: 2025,
    text: "The Computer and the Brain (von Neumann), Build (Fadell).",
  },
  {
    year: 2024,
    text:
      "Elementary fluid dynamics (Acheson), The art of doing science and engineering (Hamming), Biology (Campbell), Why Greatness Cannot Be Planned (Stanley, Lehman), Lessons of History (Durant).",
  },
  {
    year: 2023,
    text:
      "Optimization by Vector Space methods (Luenberger), Variational Analysis (Rockafellar), Gradient Flows (Ambrosio, Gigli and Savaré), The British Industrial Revolution in Global Perspective (Allen), Entangled Life (Sheldrake), How To Be a Founder (Bentinck), The defining decade (Jay), Radical Candor (Scott).",
  },
];
