import actorService from "@services/actor/actor.service";
import { Resolver } from "../resolver";

class ActorResolver extends Resolver {
  getResolvers() {
    return {
      Query: {
        actors: (obj: any, args: any) => {
          return actorService.getAllActors();
        },
      },
    };
  }
}

export default new ActorResolver();
