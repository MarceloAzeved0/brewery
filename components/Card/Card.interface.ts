export interface Badge {
  type: any;
  name: string;
}

export interface CardProps {
  address: string | undefined;
  title: string;
  description: string;
  badge: Badge
  href: string | undefined;
  country: string | undefined;
}


