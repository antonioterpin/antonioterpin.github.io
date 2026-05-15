export interface Patent {
  title: string;
  authors: string[];
  year: number;
  jurisdiction: string;
  url: string;
}

export const patents: Patent[] = [
  {
    title: "Path planning for UAV in warehouses",
    authors: ["<b>A. Terpin</b>", "T. Horvat", "M. Hehn"],
    year: 2024,
    jurisdiction: "US patent",
    url: "https://patents.google.com/patent/US20240118089A1/en",
  },
];
