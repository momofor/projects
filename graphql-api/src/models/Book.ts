import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Book extends BaseEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: String;

	@Field(() => String)
	@Column()
	author: string;

	@Field(() => String)
	@Column()
	title: string;
	@Field(() => Boolean)
	@Column({ default: false })
	isPublished: boolean;
}
