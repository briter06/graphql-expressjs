import echoService from "@services/echo/echo.service";
import { Resolver } from "../resolver";

class EchoResolver extends Resolver {

    getResolvers() {
        return {
            Query: {
                greet: (obj:any, args:any) => {
                    return echoService.greet(args.person.name)
                }
            }
        }
    }

}

export default new EchoResolver()