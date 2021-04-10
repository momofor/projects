import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateBookInput } from "../inputs/CreateBookInput";
import { Book } from "../models/Book";

@Resolver()
export class BookResolver {
	@Query(() => [Book])
	books() {
		return Book.find();
	}

	@Query(() => Book)
	book(@Arg("id") id: string) {
		return Book.findOne({ where: { id } });
	}

	@Mutation(() => Book)
	async createBook(@Arg("data") data: CreateBookInput) {
		const book = Book.create(data);
		await book.save();
		return book;
	}
}
