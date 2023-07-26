import { Movie } from "@services/persistence/models/movies";
import { IMovieService } from ".";
import persistenceService from "@services/persistence/persistence.service";
import { DB_TYPES } from "@services/persistence/persistence.model";

class MovieService implements IMovieService {
  getAllMovies(ids: number[]): Movie[] {
    const movies = persistenceService.get<Movie>(DB_TYPES.MOVIES);
    return ids.length === 0
      ? movies
      : movies.filter((movie) => ids.includes(movie.id));
  }
}

export default new MovieService() as IMovieService;
