import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "kylehickman.net",
  DESCRIPTION: "Personal notes, projects, and writing from Kyle Hickman.",
  EMAIL: "hello@kylehickman.net",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal notes, projects, and writing from Kyle Hickman.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Notes, essays, and things I am learning.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of things I have built or worked on.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/kjhickman",
  },
  {
    NAME: "Bluesky",
    HREF: "https://bsky.app/profile/kylehickman.net",
  },
  {
    NAME: "Twitter",
    HREF: "https://twitter.com/kj_hickman",
  },
];
