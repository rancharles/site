<script lang="ts">
	import Timeline from '$lib/components/Timeline.svelte';

	let { achievements }: { achievements: App.Achievement[] } = $props();
</script>

<Timeline {achievements} />
