import { Actor } from "@services/persistence/models/actor";

export interface IActorService {
    getAllActors(ids: number[]): Actor[]
}