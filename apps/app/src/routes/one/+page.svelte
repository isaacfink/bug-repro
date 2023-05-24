<script lang="ts">
	import { getRandomString } from '@bug-repro/utils';

	let id = getRandomString();
</script>

<p>This page should not work since it's using a function imported from the local packages</p>
<p>{id}</p>
