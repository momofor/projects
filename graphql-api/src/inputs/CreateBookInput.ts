import { Field, InputType } from "type-graphql";

@InputType()
export class CreateBookInput {
	@Field()
	title: string;

	@Field()
	author: string;
}
