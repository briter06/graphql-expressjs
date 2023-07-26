import movieService from "@services/movie/movie.service";
import { Resolver } from "../resolver";
import actorService from "@services/actor/actor.service";

class MovieResolver extends Resolver {
  getResolvers() {
    return {
      Query: {
        movies: (obj: any, args: any) => {
          return movieService.getAllMovies([]);
        },
      },
      Movie: {
        cast: (obj: any, args: any) => {
          return actorService.getAllActors(obj.cast);
        },
      },
    };
  }
}

export default new MovieResolver();
