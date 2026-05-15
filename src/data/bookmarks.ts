export interface BookmarkLink {
  label: string;
  href: string;
  note?: string;
}

export const essays: BookmarkLink[] = [
  {
    label: "A Stroke of Genius: Striving for Greatness in All You Do",
    href: "/media/material/StrokeofGenius.pdf",
  },
  {
    label: "Paul Graham essays",
    href: "https://paulgraham.com/articles.html",
  },
  {
    label: "argmin blog (archive) and argmin substack",
    href: "https://www.argmin.net",
    note: "and the archive at https://archives.argmin.net",
  },
  {
    label: "Andrej Karpathy",
    href: "https://karpathy.ai",
  },
  {
    label: "The days are long but the decades are short — Sam Altman",
    href: "https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short",
  },
];

export const podcasts: BookmarkLink[] = [
  { label: "Founders", href: "https://www.founderspodcast.com" },
  { label: "Generally Intelligent", href: "https://imbue.com/podcast/" },
];

export const courses: BookmarkLink[] = [
  { label: "Leetcode", href: "https://leetcode.com" },
  {
    label: "Cryptography I",
    href: "https://www.coursera.org/learn/crypto/home/info",
  },
  {
    label: "Machine Learning",
    href: "https://www.coursera.org/learn/machine-learning-course/home/info",
  },
  {
    label: "Deep Learning Specialization",
    href: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    label: "Writing in the sciences",
    href: "https://www.coursera.org/learn/sciwrite/home/info",
  },
  {
    label: "Cisco Certified Network Associate Industrial (CCNA I)",
    href: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html",
  },
];
