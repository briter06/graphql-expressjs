import { Movie } from "@services/persistence/models/movies";
import { IMovieService } from ".";
import persistenceService from "@services/persistence/persistence.service";
import { DB_TYPES } from "@services/persistence/persistence.model";

class MovieService implements IMovieService {
  getAllMovies(): Movie[] {
    return persistenceService.get<Movie>(DB_TYPES.MOVIES)
  }
}

export default new MovieService() as IMovieService;
