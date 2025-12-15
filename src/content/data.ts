export interface Platform {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

type Language = 'de' | 'en';

const platformsByLang: Record<Language, Platform[]> = {
  de: [
    {
      id: 'instagram',
      name: 'Instagram',
      description: 'Folge meinen kreativen Momenten und Einblicken in meinen Alltag',
      icon: 'Instagram',
      url: 'https://instagram.com/placeholder',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      description: 'Entdecke meine Tutorials und kreativen Projekte in Video-Form',
      icon: 'Youtube',
      url: 'https://youtube.com/placeholder',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Vernetze dich mit mir beruflich und erfahre mehr über meine Expertise',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/placeholder',
      color: 'from-blue-500 to-blue-700'
    }
  ],
  en: [
    {
      id: 'instagram',
      name: 'Instagram',
      description: 'Follow my creative moments and behind-the-scenes',
      icon: 'Instagram',
      url: 'https://instagram.com/placeholder',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      description: 'Discover my tutorials and creative projects in video form',
      icon: 'Youtube',
      url: 'https://youtube.com/placeholder',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Connect with me professionally and learn about my expertise',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/placeholder',
      color: 'from-blue-500 to-blue-700'
    }
  ]
};

export function getPlatforms(language: Language): Platform[] {
  return platformsByLang[language] || platformsByLang.de;
}

const projectsByLang: Record<Language, Project[]> = {
  de: [
    {
      id: 'project-1',
      title: 'Kreatives Webdesign',
      description: 'Moderne und benutzerfreundliche Websites, die deine Marke zum Leben erwecken',
      image: '/placeholder/project-1.jpg',
      tags: ['Webdesign', 'UI/UX', 'Responsive'],
      url: '#'
    },
    {
      id: 'project-2',
      title: 'Brand Identity',
      description: 'Einzigartige Markenidentitäten, die dein Unternehmen unvergesslich machen',
      image: '/placeholder/project-2.jpg',
      tags: ['Branding', 'Logo Design', 'Corporate Identity'],
      url: '#'
    },
    {
      id: 'project-3',
      title: 'Social Media Content',
      description: 'Engagierende Inhalte für deine Social Media Kanäle',
      image: '/placeholder/project-3.jpg',
      tags: ['Social Media', 'Content Creation', 'Marketing'],
      url: '#'
    },
    {
      id: 'project-4',
      title: 'Fotografie',
      description: 'Professionelle Fotografie für deine persönlichen und geschäftlichen Anlässe',
      image: '/placeholder/project-4.jpg',
      tags: ['Fotografie', 'Portrait', 'Event'],
      url: '#'
    },
    {
      id: 'project-5',
      title: 'Illustration',
      description: 'Kreative Illustrationen, die Geschichten erzählen und Emotionen wecken',
      image: '/placeholder/project-5.jpg',
      tags: ['Illustration', 'Digital Art', 'Kreativ'],
      url: '#'
    },
    {
      id: 'project-6',
      title: 'Print Design',
      description: 'Druckmaterialien, die Aufmerksamkeit erregen und deine Botschaft vermitteln',
      image: '/placeholder/project-6.jpg',
      tags: ['Print', 'Flyer', 'Broschüren'],
      url: '#'
    }
  ],
  en: [
    {
      id: 'project-1',
      title: 'Creative Web Design',
      description: 'Modern, user-friendly websites that bring your brand to life',
      image: '/placeholder/project-1.jpg',
      tags: ['Web design', 'UI/UX', 'Responsive'],
      url: '#'
    },
    {
      id: 'project-2',
      title: 'Brand Identity',
      description: 'Unique brand identities that make your business unforgettable',
      image: '/placeholder/project-2.jpg',
      tags: ['Branding', 'Logo design', 'Corporate identity'],
      url: '#'
    },
    {
      id: 'project-3',
      title: 'Social Media Content',
      description: 'Engaging content for your social media channels',
      image: '/placeholder/project-3.jpg',
      tags: ['Social media', 'Content creation', 'Marketing'],
      url: '#'
    },
    {
      id: 'project-4',
      title: 'Photography',
      description: 'Professional photography for your personal and business occasions',
      image: '/placeholder/project-4.jpg',
      tags: ['Photography', 'Portrait', 'Event'],
      url: '#'
    },
    {
      id: 'project-5',
      title: 'Illustration',
      description: 'Creative illustrations that tell stories and evoke emotion',
      image: '/placeholder/project-5.jpg',
      tags: ['Illustration', 'Digital art', 'Creative'],
      url: '#'
    },
    {
      id: 'project-6',
      title: 'Print Design',
      description: 'Printed materials that capture attention and communicate your message',
      image: '/placeholder/project-6.jpg',
      tags: ['Print', 'Flyers', 'Brochures'],
      url: '#'
    }
  ]
};

export function getProjects(language: Language): Project[] {
  return projectsByLang[language] || projectsByLang.de;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/placeholder',
    icon: 'Instagram'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/placeholder',
    icon: 'Youtube'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/placeholder',
    icon: 'Linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/placeholder',
    icon: 'Twitter'
  }
];
