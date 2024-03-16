<script lang="ts">
	import type { PageData } from "./$types";
	import { enhance } from "$app/forms";
	import { createTabs, melt } from "@melt-ui/svelte";

	export let data: PageData;

	const {
		elements: { root, list, content, trigger },
	} = createTabs({
		defaultValue: "sign-up",
	});
</script>

<h1>Rabbit Habits</h1>

{#if data.user}
	<p>Hello, {data.user.username}!</p>
	<form action="?/logout" method="POST" use:enhance>
		<button type="submit">Log Out</button>
	</form>
{:else}
	<div use:melt={$root}>
		<div use:melt={$list}>
			<button use:melt={$trigger("sign-up")}>Sign Up</button>
			<button use:melt={$trigger("log-in")}>Log In</button>
		</div>
		<div use:melt={$content("sign-up")}>
			<form action="?/signup" method="POST" use:enhance>
				<div>
					<label for="username">Username</label>
					<input type="text" name="username" id="username" required />
				</div>
				<div>
					<label for="password">Password</label>
					<input type="password" name="password" id="password" required />
				</div>
				<div>
					<label for="confirm-password">Confirm password</label>
					<input
						type="password"
						name="confirm-password"
						id="confirm-password"
						required
					/>
				</div>
				<button type="submit">Sign Up</button>
			</form>
		</div>
		<div use:melt={$content("log-in")}>
			<form action="?/login" method="POST" use:enhance>
				<div>
					<label for="username">Username</label>
					<input type="text" name="username" id="username" required />
				</div>
				<div>
					<label for="password">Password</label>
					<input type="password" name="password" id="password" required />
				</div>
				<button type="submit">Log In</button>
			</form>
		</div>
	</div>
{/if}
