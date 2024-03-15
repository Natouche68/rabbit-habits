declare global {
	namespace App {
		interface Locals {
			user: {
				username: string;
				password: string;
				id: number;
				image: string | null;
				authorization_code: string | null;
				time_at_last_code: string | null;
				friends: number[] | null;
			};
		}
	}
}

export {};
