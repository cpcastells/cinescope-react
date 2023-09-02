import { MovieData, SerieData } from "../types";

export const movieMock: MovieData = {
  id: 43234,
  overview: "The fantabulous movie of Barbie",
  title: "Barbie",
  poster_path: "/w342/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  release_date: "2023-07-19",
  vote_average: 7.391,
};

export const movieWithNoInfoMock: MovieData = {
  id: 43234,
  overview: "The fantabulous movie of Barbie",
  title: "Barbie",
  poster_path: "",
  release_date: "",
  vote_average: 7.391,
};

export const serieMock: SerieData = {
  id: 432643,
  overview: "The fantabulous serie of One Piece",
  name: "One Piece",
  poster_path: "/ac9qFnVrUzhzMjEW2sAiyPDce8w.jpg",
  first_air_date: "2023-08-31",
  vote_average: 8.239,
};
