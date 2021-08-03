export interface Badge {
  type: string;
  name: string;
}

export interface CardProps {
  address: string | undefined;
  title: string;
  description: string;
  badge: Badge
}


