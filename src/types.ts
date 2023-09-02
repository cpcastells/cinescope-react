export interface MovieData {
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  id: number;
}

export interface SerieData {
  name: string;
  first_air_date: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  id: number;
}

export type MediaData = MovieData | SerieData;
