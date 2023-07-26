import { Movie } from "@services/persistence/models/movies";

export interface IMovieService {
    getAllMovies(ids: number[]): Movie[]
}