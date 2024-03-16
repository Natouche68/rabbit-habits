<script lang="ts">
	import { enhance } from "$app/forms";
	import { createTabs, melt } from "@melt-ui/svelte";

	const {
		elements: { root, list, content, trigger },
	} = createTabs({
		defaultValue: "sign-up",
	});
</script>

<div
	class="h-dvh pt-24 flex flex-col justify-start items-center gap-12 bg-orange-400"
>
	<h1 class="text-5xl text-center text-balance font-bold">Rabbit Habits</h1>

	<div
		use:melt={$root}
		class="mx-4 bg-white py-4 px-8 rounded-3xl border-black border-8 shadow-lg"
	>
		<div use:melt={$list} class="mb-4 flex justify-around items-center text-lg">
			<button
				use:melt={$trigger("sign-up")}
				class="
					w-1/2
					py-2
					rounded-xl
					border-black
					data-[state=active]:font-medium
					data-[state=active]:bg-amber-400
					data-[state=active]:border-4
					data-[state=active]:shadow-md
					transition"
			>
				Sign Up
			</button>
			<button
				use:melt={$trigger("log-in")}
				class="
					w-1/2
					py-2
					rounded-xl
					border-black
					data-[state=active]:font-medium
					data-[state=active]:bg-amber-400
					data-[state=active]:border-4
					data-[state=active]:shadow-md
					transition"
			>
				Log In
			</button>
		</div>
		<div use:melt={$content("sign-up")}>
			<form action="?/signup" method="POST" use:enhance>
				<div class="mb-2">
					<label for="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						required
						class="
							w-full
							my-1
							py-1
							px-2
							text-lg
							font-medium
							border-black
							border-4
							rounded-xl
							focus:border-amber-400
							focus:text-amber-400
							focus:shadow-md
							focus:shadow-amber-400
							focus:-translate-x-[2px]
							focus:-translate-y-[2px]
							outline-none
							transition"
					/>
				</div>
				<div class="mb-2">
					<label for="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
						class="
							w-full
							my-1
							py-1
							px-2
							text-lg
							font-medium
							border-black
							border-4
							rounded-xl
							focus:border-amber-400
							focus:text-amber-400
							focus:shadow-md
							focus:shadow-amber-400
							focus:-translate-x-[2px]
							focus:-translate-y-[2px]
							outline-none
							transition"
					/>
				</div>
				<div class="mb-2">
					<label for="confirm-password">Confirm password</label>
					<input
						type="password"
						name="confirm-password"
						id="confirm-password"
						required
						class="
							w-full
							my-1
							py-1
							px-2
							text-lg
							font-medium
							border-black
							border-4
							rounded-xl
							focus:border-amber-400
							focus:text-amber-400
							focus:shadow-md
							focus:shadow-amber-400
							focus:-translate-x-[2px]
							focus:-translate-y-[2px]
							outline-none
							transition"
					/>
				</div>
				<button
					type="submit"
					class="
						w-full
						my-2
						py-2
						text-lg
						font-semibold
						bg-amber-400
						rounded-xl
						border-black border-4
						hover:shadow-md
						hover:-translate-x-[2px]
						hover:-translate-y-[2px]
						transition"
				>
					Sign Up
				</button>
			</form>
		</div>
		<div use:melt={$content("log-in")}>
			<form action="?/login" method="POST" use:enhance>
				<div class="mb-2">
					<label for="log-username">Username</label>
					<input
						type="text"
						name="username"
						id="log-username"
						required
						class="
							w-full
							my-1
							py-1
							px-2
							text-lg
							font-medium
							border-black
							border-4
							rounded-xl
							focus:border-amber-400
							focus:text-amber-400
							focus:shadow-md
							focus:shadow-amber-400
							focus:-translate-x-[2px]
							focus:-translate-y-[2px]
							outline-none
							transition"
					/>
				</div>
				<div class="mb-2">
					<label for="log-password">Password</label>
					<input
						type="password"
						name="password"
						id="log-password"
						required
						class="
							w-full
							my-1
							py-1
							px-2
							text-lg
							font-medium
							border-black
							border-4
							rounded-xl
							focus:border-amber-400
							focus:text-amber-400
							focus:shadow-md
							focus:shadow-amber-400
							focus:-translate-x-[2px]
							focus:-translate-y-[2px]
							outline-none
							transition"
					/>
				</div>
				<button
					type="submit"
					class="
						w-full
						my-2
						py-2
						text-lg
						font-semibold
						bg-amber-400
						rounded-xl
						border-black border-4
						hover:shadow-md
						hover:-translate-x-[2px]
						hover:-translate-y-[2px]
						transition"
				>
					Log In
				</button>
			</form>
		</div>
	</div>
</div>
