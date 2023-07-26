import actorService from "@services/actor/actor.service";
import { Resolver } from "../resolver";
import movieService from "@services/movie/movie.service";

class ActorResolver extends Resolver {
  getResolvers() {
    return {
      Query: {
        actors: (obj: any, args: any) => {
          return actorService.getAllActors([]);
        },
      },
      Actor: {
        movies: (obj: any, args: any) => {
          return movieService.getAllMovies(obj.movies);
        },
      },
    };
  }
}

export default new ActorResolver();
