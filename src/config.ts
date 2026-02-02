export const SITE = {
  website: "https://jamessutton600613.github.io",
  author: "James R. F. Sutton",
  profile: "https://github.com/jamessutton600613-png",
  desc: "GQR / QGE — a geometry-first research programme spanning quantum systems, catalysis, and information-curvature dynamics.",
  title: "GQR / QGE",
  ogImage: "og-image.jpg",

  lightAndDarkMode: true,

  postPerIndex: 4,
  postPerPage: 4,

  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes

  showArchives: true,
  showBackButton: true,

  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/jamessutton600613-png/JamesSutton600613.github.io/edit/main/",
  },

  dynamicOgImage: true,

  dir: "ltr",
  lang: "en",
  timezone: "Europe/London",
} as const;
