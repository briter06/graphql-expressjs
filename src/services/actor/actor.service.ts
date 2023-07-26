import { IActorService } from ".";
import persistenceService from "@services/persistence/persistence.service";
import { DB_TYPES } from "@services/persistence/persistence.model";
import { Actor } from "@services/persistence/models/actor";

class ActorService implements IActorService {
  getAllActors(ids: number[]): Actor[] {
    const actors = persistenceService.get<Actor>(DB_TYPES.ACTORS);
    return ids.length === 0
      ? actors
      : actors.filter((actor) => ids.includes(actor.id));
  }
}

export default new ActorService() as IActorService;
