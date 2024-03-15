import type { Handle } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { users } from "$lib/server/schema";
import { eq, and } from "drizzle-orm";

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
			event.locals.user = user[0];
		}
	}

	return resolve(event);
};
