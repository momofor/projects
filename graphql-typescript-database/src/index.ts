import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { RegisterResolver } from "./modules/user/register";

const main = async () => {
	await createConnection();

	const schema = await buildSchema({ resolvers: [RegisterResolver] });

	const server = new ApolloServer({ schema });

	const app = Express();
	const port = 8080;

	server.applyMiddleware({ app });
	app.listen(port, () =>
		console.log(`server live on http://localhost:${port}`)
	);
};

main();
