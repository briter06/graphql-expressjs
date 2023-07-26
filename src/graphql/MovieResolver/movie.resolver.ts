import movieService from "@services/movie/movie.service";
import { Resolver } from "../resolver";

class MovieResolver extends Resolver {
  getResolvers() {
    return {
      Query: {
        movies: (obj: any, args: any) => {
          return movieService.getAllMovies();
        },
      },
    };
  }
}

export default new MovieResolver();
