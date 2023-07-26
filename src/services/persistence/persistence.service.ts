import { IPersistenceService } from ".";
import actors from "./data/actors";
import movies from "./data/movies";
import relation from "./data/relation";
import { DB_TYPES } from "./persistence.model";

class PersistenceService implements IPersistenceService {
  private dataRouter: { [key: string]: any } = {
    [DB_TYPES.ACTORS]: actors,
    [DB_TYPES.MOVIES]: movies,
    [DB_TYPES.RELATION]: relation,
  };

  get<T>(type: DB_TYPES): T {
    return this.dataRouter[type];
  }
}

export default new PersistenceService() as IPersistenceService;
