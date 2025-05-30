export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date?: string;
}

export interface Genre {
  id: number;
  name: string;
}
