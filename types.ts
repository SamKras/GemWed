
export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  category: 'Cinematography' | 'Photography' | 'Full Production' | 'LeroMovie' | 'Personal';
  title: string;
  location: string;
  imageUrl: string;
  videoId?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface QuoteData {
  guestCount: number;
  duration: number;
  services: string[];
}
