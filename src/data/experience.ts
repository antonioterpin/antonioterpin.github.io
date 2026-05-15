export interface ExperienceEntry {
  year: string;
  organization: string;
  url?: string;
  role?: string;
  location?: string;
  description: string;
  tags?: string[];
  kind: "internship" | "consulting" | "freelance";
}

export const experience: ExperienceEntry[] = [
  {
    year: "2025",
    organization: "Hanomi",
    url: "https://www.hanomi.ai/",
    role: "Technical and strategic consultant",
    description: "Technical and strategic consulting.",
    kind: "consulting",
  },
  {
    year: "2022",
    organization: "Verity",
    url: "https://verity.net",
    role: "Intern",
    description:
      "Verity's inventory management system uses self-flying drones to create true zero-error warehouses. Improved the path planning algorithms (yielding up to 10–100× speed-up) and developed support tools for the deployment team that reduced related tickets by 50%.",
    tags: ["C++", "Python"],
    kind: "internship",
  },
  {
    year: "2021",
    organization: "Robotics and Perception Group, UZH",
    url: "https://rpg.ifi.uzh.ch",
    role: "Intern",
    description:
      'Worked with <a href="https://danielgehrig18.github.io" target="_blank" rel="noopener">Daniel Gehrig</a> and <a href="https://rpg.ifi.uzh.ch/people_scaramuzza.html" target="_blank" rel="noopener">Davide Scaramuzza</a> on the open-sourcing of an <a href="https://github.com/uzh-rpg/rpg_dvs_evo_open" target="_blank" rel="noopener">event-based visual odometry pipeline</a>.',
    kind: "internship",
  },
  {
    year: "2018",
    organization: "Inuru",
    url: "https://www.inuru.com",
    role: "Intern",
    description:
      "Inuru's patented electronic films enable electronic labels and packaging for consumer marketing. Designed and implemented the algorithm to automate the design of the electronic circuit, and built the backend for the web application that captures packaging information.",
    tags: ["Java", "AWS"],
    kind: "internship",
  },
  {
    year: "2017",
    organization: "ISEL",
    url: "https://www.isel.pt",
    role: "Intern",
    description:
      "Worked on a medical support application for nephrology diagnostics, specifically Acute Kidney Injury (AKI) diagnosis.",
    tags: ["Java"],
    kind: "internship",
  },
  {
    year: "2019",
    organization: "PlanetAutomation",
    location: "Udine",
    description:
      "Developed the web service for scheduling and tracking the maintenance of industrial machines.",
    tags: ["NodeJS", "AWS"],
    kind: "freelance",
  },
  {
    year: "2018",
    organization: "BLE beacons for indoor navigation",
    description:
      "Built the software infrastructure for an indoor navigation system based on Bluetooth Low Energy beacons. Deployed during a local event in Brașov, Romania.",
    tags: ["NodeJS", "AWS", "Kotlin"],
    kind: "freelance",
  },
  {
    year: "2018",
    organization: "Torneo delle frazioni di Buja",
    url: "https://appadvice.com/app/torneo-frazioni-buja/1385383296",
    location: "Udine",
    description:
      "Android app to handle and support a yearly football tournament in Udine, with an AWS backend (S3, Cognito, Lambda).",
    tags: ["Android", "Java", "AWS"],
    kind: "freelance",
  },
  {
    year: "2017",
    organization: "Vodafone EICMA eBike",
    url: "https://www.youtube.com/watch?v=89QFku1-rdQ",
    location: "Udine",
    description:
      "Android application for the moto presented by Vodafone at EICMA 2017.",
    tags: ["Java"],
    kind: "freelance",
  },
];
