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
}
