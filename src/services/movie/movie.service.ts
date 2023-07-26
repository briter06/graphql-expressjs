import { Movie } from "@services/persistence/models/movies";
import { IMovieService } from ".";
import persistenceService from "@services/persistence/persistence.service";
import { DB_TYPES } from "@services/persistence/persistence.model";
import { Relation } from "@services/persistence/models/relation";
import { mapAndFilter } from "@utils/utils";

class MovieService implements IMovieService {
  getAllMovies(ids: number[]): Movie[] {
    const movies = persistenceService.get<Movie>(DB_TYPES.MOVIES);
    movies.forEach((movie) => {
      movie.cast = mapAndFilter(
        persistenceService.get<Relation>(DB_TYPES.RELATION),
        (r: Relation) => r.movie === movie.id,
        (r: Relation) => r.actor
      );
    });
    return ids.length === 0
      ? movies
      : movies.filter((movie) => ids.includes(movie.id));
  }
}

export default new MovieService() as IMovieService;
