import { IActorService } from ".";
import persistenceService from "@services/persistence/persistence.service";
import { DB_TYPES } from "@services/persistence/persistence.model";
import { Actor } from "@services/persistence/models/actor";
import { mapAndFilter } from "@utils/utils";
import { Relation } from "@services/persistence/models/relation";

class ActorService implements IActorService {
  getAllActors(ids: number[]): Actor[] {
    const actors = persistenceService.get<Actor>(DB_TYPES.ACTORS);
    actors.forEach((actor) => {
        actor.movies = mapAndFilter(
          persistenceService.get<Relation>(DB_TYPES.RELATION),
          (r: Relation) => r.actor === actor.id,
          (r: Relation) => r.movie
        );;
    });
    return ids.length === 0
      ? actors
      : actors.filter((actor) => ids.includes(actor.id));
  }
}

export default new ActorService() as IActorService;
