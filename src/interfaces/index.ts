export interface IFeature {
  duration: string;
  level: string;
  keySkills: string[];
  prerequisites: string[];
}

export interface ICategory {
  name: string;
  href: string;
}

export interface IPrice {
  original: number;
  discountedPrice: number;
}

export interface ICourse {
  slug: string;
  title: string;
  description: string;
  category: ICategory;
  href: string;
  imageUrl: string;
  features?: IFeature;
  price: IPrice;
  duration?: number;
  durationUnit: string;
  featured?: boolean;
  showOnCoursesDropdown?: boolean;
  icon?: any;
}

export interface IRoundedBadge {
  text: string;
  color: string;
}

export interface ISupportLinks {
  name: string;
  href?: string;
  description: string;
  icon: any;
}

export interface IFeatureCardSection {
  mainText: string;
  secondaryText: string;
  highlightText?: string;
  supportLinks: ISupportLinks[];
}

export interface ILargeImageSplitCard {
  cardHeader: string;
  cardBody: string;
}

export interface ISimpleOnBrand {
  mainText: string;
  secondaryText: string;
  className?: string;
}
