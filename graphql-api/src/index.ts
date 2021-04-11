import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import Express from "express";
import { BookResolver } from "./resolvers/BookResolver";

async function main() {
	await createConnection();
	const schema = await buildSchema({ resolvers: [BookResolver] });
	const server = new ApolloServer({ schema });

	const app = Express();
	const port = 8080;
	server.applyMiddleware({ app });

	app.listen(port, () =>
		console.log(`server started on http://localhost:${port}/graphql`)
	);
}

main();
