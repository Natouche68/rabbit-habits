import type { Handle } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { users } from "$lib/server/schema";
import { eq, and } from "drizzle-orm";
import { randomBytes } from "crypto";

export const handle: Handle = async ({ event, resolve }) => {
	const userId = event.cookies.get("user_id");
	const authorizationCode = event.cookies.get("authorization_code");

	if (userId && authorizationCode) {
		const user = await db
			.select()
			.from(users)
			.where(
				and(
					eq(users.id, Number(userId)),
					eq(users.authorization_code, authorizationCode)
				)
			);

		if (user.length > 0) {
			if (Number(user[0].time_at_last_code) + 60 * 60 * 1000 > Date.now()) {
				const updatedUser = await db
					.update(users)
					.set({
						authorization_code: randomBytes(16).toString("hex"),
						time_at_last_code: Date.now().toString(),
					})
					.where(eq(users.id, user[0].id))
					.returning();

				event.locals.user = updatedUser[0];
				event.cookies.set(
					"authorization_code",
					updatedUser[0].authorization_code!,
					{
						path: "/",
					}
				);
			} else {
				event.locals.user = user[0];
			}
		}
	}

	return resolve(event);
};
