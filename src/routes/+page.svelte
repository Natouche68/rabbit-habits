<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Rabbit Habits</h1>

<p>
	You are logged in as {data.user?.username}
</p>

<form action="/login?/logout" method="POST">
	<button type="submit">Logout</button>
</form>
