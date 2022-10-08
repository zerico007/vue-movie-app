interface Movie {
  id: string;
  image?: {
    id: string;
    url: string;
    width: number;
    height: number;
  };
  title: string;
  titleType: string;
  year: number;
  disambiguation?: string;
  proOnly?: boolean;
}
