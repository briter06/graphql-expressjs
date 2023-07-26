import { MessageResult } from "./echo.model";

export interface IEchoService {
    greet(name: string): MessageResult
}