export interface Post {
  id: string;
  slug: string;

  publishDate: Date;
  title: string;
  description?: string;

  image?: string;

  canonical?: string | URL;
  permalink?: string;

  draft?: boolean;

  excerpt?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;

  Content: unknown;
  content?: string;

  readingTime?: number;
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}

export interface TestimonialList {
  fields: TestimonialListFields;
}

export interface TestimonialListFields {
  name: string;
  description: string;
  list: Testimonial[];
}

export interface Testimonial {
  fields: TestimonialFields;
}

export interface TestimonialFields {
  title: string;
  description: string;
  name: string;
}

export interface WebsiteDetails {
  fields: {
    websiteName: string;
    websiteDescription: string;
    socialMediaLinks: string[];
    retailHours: string;
    wholesaleHours: string;
    phone: string;
    email: string;
    seoImage: ContentfulImage;
    contactImage: ContentfulImage;
  };
}

interface ContentfulImage {
  fields: { file: { url: string } };
}

export interface ServicesSection {
  fields: {
    name: string;
    description: string;
    list: {
      fields: {
        serviceName: string;
        serviceDescription?: string;
        serviceImage: ContentfulImage;
      };
    }[];
  };
}

export interface ContentfulAboutSection {
  fields: {
    sectionName: string;
    sectionDescription: string;
    rightSideImage: ContentfulImage;
    leftSideImage: ContentfulImage;
  };
}

export interface ContentfulHeroSection {
  fields: {
    heroImage: ContentfulImage;
    mainText: string;
    secondaryText: string;
  };
}
