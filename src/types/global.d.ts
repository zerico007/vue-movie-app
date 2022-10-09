interface Image {
  url: string;
  id: string;
  width: number;
  height: number;
}

interface Certificate {
  certificate: string;
  certificateNumber: number;
  ratingReason: string;
  ratingsBody: string;
  country: string;
}

interface Rating {
  rating: number;
  ratingCount: number;
  canRate: boolean;
  topRank: number;
  otherRanks?: Array<{
    id: string;
    label: string;
    rank: number;
    rankType: string;
  }>;
}
interface Movie {
  id: string;
  image?: Image;
  title: string;
  titleType: string;
  year: number;
  disambiguation?: string;
  proOnly?: boolean;
}

interface DetailsTitle extends Movie {
  runningTimeInMinutes: number;
  nextExpisode?: string;
  numberOfEpisodes?: number;
  seriesEndYear?: number;
  seriesStartYear?: number;
}

interface MovieDetails {
  id: string;
  title: DetailsTitle;
  certificates: Record<string, Certificate[]>;
  ratings: Rating;
  plotOutline: {
    id: string;
    text: string;
  };
  releaseDate: string;
  genres: string[];
  plotSummary?: {
    author: string;
    text: string;
    id: string;
  };
}

declare module "vue-spinner/src/RingLoader.vue";
declare module "vue-select";
