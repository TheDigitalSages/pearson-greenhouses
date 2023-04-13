import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Landing",
      links: [
        {
          text: "Sass",
          href: getPermalink("/landing/saas"),
        },
        {
          text: "Startup",
          href: getPermalink("/landing/startup"),
        },
        {
          text: "Mobile App",
          href: getPermalink("/landing/mobile-app"),
        },
      ],
    },
    {
      text: "Pages",
      links: [
        {
          text: "Features",
          href: "#",
        },
        {
          text: "Pricing",
          href: "#",
        },
        {
          text: "About us",
          href: "#",
        },
        {
          text: "Contact",
          href: "#",
        },
        {
          text: "Terms",
          href: getPermalink("/terms"),
        },
        {
          text: "Privacy policy",
          href: getPermalink("/privacy"),
        },
      ],
    },
    {
      text: "Widgets",
      href: "#",
    },
    {
      text: "Blog",
      href: getBlogPermalink(),
    },
  ],
  actions: [{ type: "button", text: "Download", href: "https://github.com/onwidget/astrowind" }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: "Twitter", icon: "tabler:brand-twitter", href: "#" },
    { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "#" },
    { ariaLabel: "Facebook", icon: "tabler:brand-facebook", href: "#" },
    { ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },
    { ariaLabel: "Github", icon: "tabler:brand-github", href: "https://github.com/onwidget/astrowind" },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://edwardbeazer.com/"> The Digital Sages</a> · All rights reserved.
  `,
};
