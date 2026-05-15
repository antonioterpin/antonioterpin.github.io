export interface Student {
  name: string;
  project: string;
  year: number;
  ongoing?: boolean;
  description?: string;
  acknowledgment?: string;
}

export const students: Student[] = [
  // Ongoing
  {
    name: "Leander Hoffmann",
    project:
      "Advanced diffuser design for a low-cost, tabletop water channel",
    year: 2026,
    ongoing: true,
  },
  {
    name: "Alexander Przybysz",
    project:
      "Designing a morphing airfoil for fluid control in a tabletop water channel",
    year: 2026,
    ongoing: true,
  },
  {
    name: "Federico De Giorgi",
    project:
      "Designing a multi-element wing for fluid control in a tabletop water channel",
    year: 2026,
    ongoing: true,
  },
  {
    name: "Mattia De Martino",
    project:
      "Hard-constrained reinforcement learning with orthogonal projection layers for fluid control",
    year: 2026,
    ongoing: true,
  },

  // Completed
  {
    name: "Jan A. Kamm",
    project: "Bachelor Thesis — Multi-agent path planning (Way of Water)",
    year: 2025,
    description:
      "Jan worked on multi-agent path planning within the Way of Water (WoW) project. Two publications in preparation.",
  },
  {
    name: "Francesco Banelli",
    project:
      "Semester Project — ART of PIV: Agentic real-time optical-flow PIV",
    year: 2026,
    description:
      'Publication in preparation. Earlier with me: ADMM for PIV refinement (<a href="https://activefluidcontrol.com/research#piv-admm" target="_blank" rel="noopener">PIV-ADMM</a>) and Real-time PIV for fluid control (contributed to <a href="https://activefluidcontrol.com/research#synthpix" target="_blank" rel="noopener">SynthPix</a> and <a href="https://activefluidcontrol.com/research#flow-gym" target="_blank" rel="noopener">Flow Gym</a>).',
  },
  {
    name: "Alan Bonomi",
    project:
      "Semester Project — FlowGames: software stack for adversarial fluid control",
    year: 2026,
    description:
      'Publication in preparation. Earlier with me: ADMM for PIV refinement (<a href="https://activefluidcontrol.com/research#piv-admm" target="_blank" rel="noopener">PIV-ADMM</a>) and Real-time PIV for fluid control (contributed to <a href="https://activefluidcontrol.com/research#synthpix" target="_blank" rel="noopener">SynthPix</a> and <a href="https://activefluidcontrol.com/research#flow-gym" target="_blank" rel="noopener">Flow Gym</a>).',
  },
  {
    name: "Max Stoll",
    project:
      "Semester Project — Prediction step in particle-tracking pipelines",
    year: 2026,
    description: "Publication in preparation.",
  },
  {
    name: "Oscar Von Löhneysen",
    project:
      "Master Thesis — Semi-Explicit MPC with Hard-Constrained Neural Networks",
    year: 2025,
    description:
      "Oscar implemented and tested the Pinet architecture for model predictive control, showcasing its application on several physical systems, including the magic box.",
  },
  {
    name: "Fabian Weber",
    project:
      "Master Thesis — Design improvement and realization of a tabletop water channel",
    year: 2025,
    description:
      'Fabian contributed to the design and realization of version 2.0 of the tabletop water channel used in our <a href="https://activefluidcontrol.com/hardware/v1" target="_blank" rel="noopener">fluids experiments</a>. He joined Raff\'s group as a research assistant.',
  },
  {
    name: "Alain Schöbi",
    project:
      "Master Thesis — Distributionally Robust Linear Quadratic Regulator",
    year: 2025,
    description:
      'During his master thesis, Alain joined our project on <a href="https://arxiv.org/abs/2410.22826" target="_blank" rel="noopener">distributionally robust control</a>, contributing substantially to the development of theoretical results and numerical algorithms. He was awarded the <a href="https://ethz.ch/en/the-eth-zurich/education/awards/eth-medal.html" target="_blank" rel="noopener">ETH Medal</a> for his thesis and is joining Daniel Kuhn\'s group for his PhD.',
  },
  {
    name: "Anthony N. Czubarow",
    project: "Master Thesis — The magic box",
    year: 2025,
    description:
      "Anthony realized the first prototype of the magic box, a physical system that will create wonder when completed. The work has been submitted for publication, and he is joining Raff's group in January 2026 for his PhD.",
  },
  {
    name: "Nicola Taddei",
    project: "Semester Project — The 1D ARC challenge",
    year: 2025,
    description:
      "Nicola implemented and tested several algorithms to solve a 1D version of the ARC challenge. He is going to do his master thesis with me as well.",
  },
  {
    name: "Maximilian Stralz",
    project: "Semester Project — Baselines for closed-loop fluid control",
    year: 2025,
    description:
      "Max contributed to the proof of concept of the baseline collection pipeline for our fluids control experiment. He joined Gioele Zardini's group for his master thesis at MIT.",
  },
  {
    name: "Philip Pawlowsky",
    project: "Semester Project — Volumetric fluid-flow estimation",
    year: 2025,
    description: "Publication in preparation.",
  },
  {
    name: "Alessandro Bretecher",
    project: "Semester Project — CFD analysis of a tabletop water channel",
    year: 2025,
  },
  {
    name: "Youran Wu",
    project:
      "Semester Project — Preliminary design of particle seeding for a tabletop water channel",
    year: 2025,
    description:
      "Youran built a proof of concept of a system to automatically regulate seeding density in a tabletop water channel, enabling high-quality flow visualization.",
  },
  {
    name: "Alessandro B. Villanueva",
    project: "Semester Project — Analysis of a tabletop water channel (v0)",
    year: 2024,
    description:
      'Alessandro analyzed a first version of the tabletop water channel used in our <a href="https://activefluidcontrol.com/hardware/v0" target="_blank" rel="noopener">fluids experiments</a>.',
  },
  {
    name: "Martin Gadea",
    project:
      "Semester Project — Learning diffusion at lightspeed: an application to single-cell dynamics prediction",
    year: 2023,
    description:
      'Martin\'s work was part of the <a href="https://jkonet-star.readthedocs.io/en/latest/" target="_blank" rel="noopener">Learning diffusion at lightspeed</a> project.',
  },
];

export const studentAcknowledgments = [
  {
    name: "Anthony",
    text: "My deepest thanks go to my supervisor, Antonio Terpin, whose mentorship has shaped this thesis in more ways than I can count. Time and again, he reminded me that curiosity should guide us to push boundaries and approach problems with an open mind, an ethos reflected in his own openness, creativity, and formidable analytical insight that allowed ideas to truly flourish. His feedback was never mere correction but transformation, clarifying and elevating my work in ways beyond measure. Beyond this, I am fortunate to call Antonio not only a mentor but also a friend, one who cared deeply about my growth not just as a researcher but as a person, and for that, I am especially grateful.",
  },
  {
    name: "Fabian",
    text: "Working with Antonio as supervisor was a privilege. His feedback was consistently precise, swift, and essential. Nothing was considered complete until it met a high standard, and although this often meant additional labour (not always greeted with enthusiasm), the result would not have reached its current quality without his guidance.",
  },
  {
    name: "Alain",
    text: "I reached out to Antonio, with whom I had previously collaborated, and I am deeply grateful for his responsiveness, support, and trust in accepting to supervise my thesis and for offering me this opportunity. During my master's thesis, I was then jointly supervised by Nicolas and Antonio, whose continuous guidance, constructive feedback, and encouragement shaped the experience from the very beginning. While giving me the freedom to explore ideas independently, they were always there to offer help and insightful advice, creating an inspiring and motivating environment. Their support not only fostered my scientific development but also helped me grow as an individual. Their wit, insight, and passion for research inspired me greatly, and I will always cherish the exciting whiteboard sessions with Antonio — wishing there had been more!",
  },
];

export interface TeachingPosition {
  course: string;
  url?: string;
  years: string;
  role: string;
  instructor?: string;
  notes?: string;
  team?: string[];
}

export const teachingPositions: TeachingPosition[] = [
  {
    course: "Programming and Optimal Control",
    url: "https://idsc.ethz.ch/education/lectures/optimal-control.html",
    years: "2023–2024",
    role: "Head TA",
    instructor: "Raff D'Andrea",
    notes:
      "Responsible for material, exercises, and exam. The class grew from ~200 students in 2023 to more than 450 in 2025.",
    team: [
      "Alain Schöbi (2023)",
      "Philip Pawlowsky (2023–2024)",
      "Cara Koepele (2023)",
      "Maximilian Stralz (2024)",
      "Nicola Taddei (2024–2025)",
      "Marius Baumann (2025)",
      "Gennaro Guidone (2025)",
    ],
  },
  {
    course: "Applied Compositional Thinking for Engineers I & II",
    url: "https://applied-compositional-thinking.engineering",
    years: "2022–2023",
    role: "Teaching Assistant",
    instructor: "Andrea Censi",
  },
  {
    course: "Linear System Theory",
    url: "https://federico-ramponi.unibs.it/docs/linsys2014.pdf",
    years: "2021",
    role: "Teaching Assistant",
  },
  {
    course: "Control Systems",
    url: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=147945&semkez=2021W&ansicht=LEHRVERANSTALTUNGEN&lang=en",
    years: "2021",
    role: "Teaching Assistant",
    instructor: "Florian Dörfler",
  },
  {
    course: "Linear Algebra",
    years: "2020",
    role: "Teaching Assistant",
    notes: "In Udine.",
  },
];
