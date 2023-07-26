
import { IEchoService } from ".";
import { MessageResult } from "./echo.model";

class EchoService implements IEchoService {

    greet(name: string): MessageResult {
        return {
            message: `Hi ${name}!`
        }
    }

}

export default new EchoService() as IEchoService