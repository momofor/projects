import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput {
	@Field()
	@Length(1, 15)
	firstName!: string;

	@Field()
	@Length(1, 15)
	lastName!: string;

	@Field()
	@IsEmail()
	email!: string;

	@Field()
	password!: string;
}
