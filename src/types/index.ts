export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work' | 'achievement';
}

export interface AboutData {
  name: string;
  title: string;
  bio: string;
  highlights: string[];
  timeline: TimelineItem[];
  image: string;
}
