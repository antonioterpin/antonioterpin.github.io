export interface Award {
  year: number;
  title: string;
  url?: string;
  description?: string;
}

export const awards: Award[] = [
  {
    year: 2026,
    title: "ICLR oral presentation (top 1%)",
    url: "https://iclr.cc/virtual/2026/oral/10010691",
  },
  {
    year: 2025,
    title: "NeurIPS top reviewer (top 8%)",
  },
  {
    year: 2024,
    title: "NeurIPS oral presentation (top 0.39%)",
    url: "https://neurips.cc/virtual/2024/oral/97944",
  },
  {
    year: 2024,
    title: "SVOR/ASRO Award",
    url: "https://control.ee.ethz.ch/news-and-events/ifa-news/2024/06/masters-student-antonio-terpin-receives-eth-medal-willi-studer-prize-and-the-svorasro-award.html",
    description:
      'For my master thesis on <a href="https://arxiv.org/abs/2406.10676" target="_blank" rel="noopener">Optimization in Wasserstein Spaces</a>.',
  },
  {
    year: 2023,
    title: "Willi Studer Prize",
    url: "https://ethz.ch/en/the-eth-zurich/education/awards/willi-studer-prize.html",
    description: "Top graduate in the Robotics, Systems and Control MSc (GPA: 6.0/6.0).",
  },
  {
    year: 2023,
    title: "ETH Medal",
    url: "https://ethz.ch/en/the-eth-zurich/education/awards/eth-medal.html",
    description:
      'For my master thesis on <a href="https://www.research-collection.ethz.ch/handle/20.500.11850/635783" target="_blank" rel="noopener">Optimization in Wasserstein Spaces</a>.',
  },
  { year: 2022, title: "NeurIPS Scholar Award" },
  { year: 2022, title: "Student Travel Grant for the American Control Conference" },
  {
    year: 2018,
    title: "Superiore dell'Università di Udine",
    url: "https://superiore.uniud.it/it",
    description:
      "One of four winners of the national-level selection contest, awarded a five-year full scholarship.",
  },
  {
    year: 2017,
    title: "Italian Ministry of Education excellence records",
  },
  {
    year: 2015,
    title: "Best student award at ITST JF Kennedy, Pordenone",
    description:
      'Also <a href="/media/awards/Borsa di studio 20132014.jpeg" target="_blank">2014</a>, <a href="/media/awards/Borsa di studio 20142015.jpeg" target="_blank">2015</a>, and <a href="/media/awards/Borsa di studio 20162017.jpeg" target="_blank">2017</a>.',
  },
  {
    year: 2015,
    title: "Sport and School award at ITST JF Kennedy, Pordenone",
    url: "/media/awards/Sport Scolastico 2015.jpeg",
  },
];

export interface Talk {
  year: number;
  title: string;
  url?: string;
}

export const talks: Talk[] = [
  {
    year: 2026,
    title: "ICLR oral presentation (top 1%)",
    url: "https://iclr.cc/virtual/2026/oral/10010691",
  },
  {
    year: 2024,
    title: "NeurIPS oral presentation (top 0.39%)",
    url: "https://neurips.cc/virtual/2024/oral/97944",
  },
  {
    year: 2026,
    title: "SIAM OP26 — Variational Analysis and Applications",
  },
];
