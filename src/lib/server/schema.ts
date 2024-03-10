import {
	decimal,
	integer,
	json,
	pgTable,
	serial,
	varchar,
	text,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	username: varchar("username").notNull().unique(),
	password: text("password").notNull(),
	image: varchar("image"),
	authorization_code: varchar("authorization_code"),
	time_at_last_code: varchar("time_at_last_code"),
	friends: json("friends").$type<number[]>(),
});

export const tasks = pgTable("tasks", {
	id: serial("id").primaryKey(),
	user_id: integer("user_id")
		.notNull()
		.references(() => users.id),
	name: varchar("name").notNull(),
	completed_dates: json("completed_dates").$type<string[]>(),
	rabbit_id: integer("rabbit_id")
		.notNull()
		.unique()
		.references(() => rabbits.id),
	color: varchar("color").notNull(),
});

export const rabbits = pgTable("rabbits", {
	id: serial("id").primaryKey(),
	user_id: integer("user_id")
		.notNull()
		.references(() => users.id),
	name: varchar("name").notNull(),
	happiness: decimal("happiness").notNull(),
	color: varchar("color").notNull(),
	ear: varchar("ear").notNull(),
});
