import { IActorService } from ".";
import persistenceService from "@services/persistence/persistence.service";
import { DB_TYPES } from "@services/persistence/persistence.model";
import { Actor } from "@services/persistence/models/actor";

class ActorService implements IActorService {
  getAllActors(): Actor[] {
    return persistenceService.get<Actor>(DB_TYPES.ACTORS);
  }
}

export default new ActorService() as IActorService;
