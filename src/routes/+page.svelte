<script lang="ts">
	import { enhance } from "$app/forms";
	import { createTabs, melt } from "@melt-ui/svelte";

	const {
		elements: { root, list, content, trigger },
	} = createTabs({
		defaultValue: "sign-up",
	});
</script>

<h1>Rabbit Habits</h1>

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
