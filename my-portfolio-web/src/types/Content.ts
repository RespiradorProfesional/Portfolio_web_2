
export type Content = {
  id: number;
  title: string;
  description: string;
  technologies: string[];

  // Opcionales o nullables según el tipo
  duration?: number | null;
  company?: string | null;
  creationDate?: string | null;
  link?: string | null;
  finished?: boolean | null;
};
