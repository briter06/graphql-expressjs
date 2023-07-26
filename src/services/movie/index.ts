import { Movie } from "@services/persistence/models/movies";

export interface IMovieService {
    getAllMovies(): Movie[]
}