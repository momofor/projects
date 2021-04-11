import { Arg, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/user";
import { RegisterInput } from "./register/RegisterInputs";

@Resolver(User)
export class RegisterResolver {
	@Query(() => String)
	async HelloWorld() {
		return "Hello world";
	}

	@Mutation(() => User)
	async register(
		@Arg("data") { email, firstName, lastName, password }: RegisterInput
	): Promise<User> {
		const hashedPassword = await bcrypt.hash(password, 12);
		const user = await User.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		}).save();

		return user;
	}
}
