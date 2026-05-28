<script lang="ts">
	import { Heart } from '@lucide/svelte';

	let { badges }: { badges: App.Badge[] } = $props();
</script>

{#each badges as { slug, name = slug, logoColor = 'white', loved = false, color }}
	<div class="relative inline-block">
		<img
			alt={name}
			src={`https://img.shields.io/badge/-${encodeURIComponent(name)}-${color}?logo=${slug}&logoColor=${logoColor}&style=for-the-badge`}
		/>
		{#if loved}
			<span class="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background">
				<Heart class="h-2.5 w-2.5 fill-red-500 text-red-500" />
			</span>
		{/if}
	</div>
{/each}
