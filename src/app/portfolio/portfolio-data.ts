export interface Video {
  src: string;
  caption: string;
  link?: string | null;
}

export interface PortfolioSection {
  sectionTitle: string;
  videos: Video[];
}

export const portfolioData: PortfolioSection[] = [
  {
    sectionTitle: 'PYTHON',
    videos: [
      {
        src: 'assets/img/vidz/promo.mp4',
        caption: 'Will send a message to each number on that list.',
        link: null,
      },
      {
        src: 'assets/img/vidz/repsender.mp4',
        caption: 'Special request, auto reporter.',
        link: null,
      },
    ],
  },
  {
    sectionTitle: 'WEB',
    videos: [
      {
        src: 'assets/img/vidz/agrnode.mp4',
        caption: 'Agriculture Innovations website.',
        link: 'https://agri-innovate.com',
      },
      {
        src: 'assets/img/vidz/tarteel.mp4',
        caption: 'A website designed for a clinic.',
        link: 'https://tarteelclinic.com',
      },
    ],
  },
];
