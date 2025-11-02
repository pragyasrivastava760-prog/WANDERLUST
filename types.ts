export enum Mood {
  Calm = 'Calm',
  Creative = 'Creative',
  Social = 'Social',
  Secluded = 'Secluded',
}

export interface Stay {
  id: number;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  moods: Mood[];
}

export interface Experience {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface CommunityMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}
