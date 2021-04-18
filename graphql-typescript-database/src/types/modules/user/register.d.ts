import { User } from "../../entity/user";
import { RegisterInput } from "./register/RegisterInputs";
export declare class RegisterResolver {
    HelloWorld(): Promise<string>;
    register({ email, firstName, lastName, password }: RegisterInput): Promise<User>;
}
//# sourceMappingURL=../../../src/maps/modules/user/register.d.ts.map