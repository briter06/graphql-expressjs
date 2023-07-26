import { DB_TYPES } from "./persistence.model";

export interface IPersistenceService {
    get<T>(type: DB_TYPES): T[]
}