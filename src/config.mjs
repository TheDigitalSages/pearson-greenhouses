import defaultImage from "./assets/images/default.png";

const CONFIG = {
  name: "Pearson Greenhouses",

  origin: "https://www.pearsonsgreenhouses.com",
  basePathname: "/",
  trailingSlash: false,

  title: "Pearson Greenhouses",
  description:
    "🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.",
  defaultImage: defaultImage,

  defaultTheme: "system",

  language: "en",
  textDirection: "ltr",

  dateFormatter: new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }),
};

export const SITE = { ...CONFIG, blog: undefined };

export const DATE_FORMATTER = CONFIG.dateFormatter;
