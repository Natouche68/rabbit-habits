import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ locals, url }) => {
	if (locals.user) {
		return {
			user: locals.user,
		};
	} else if (url.pathname !== "/login") {
		redirect(302, "/login");
	}
};
