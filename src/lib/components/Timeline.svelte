<script lang="ts">
	let { achievements }: { achievements: App.Achievement[] } = $props();
</script>

<ol class="relative ml-3 border-l border-border space-y-6">
	{#each achievements as { title, date, description }}
		<li class="ml-6">
			<span class="absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-muted ring-2 ring-background border border-border"></span>
			<time class="block text-xs text-muted-foreground mb-0.5">{date}</time>
			<h3 class="text-sm font-medium text-foreground">{title}</h3>
			{#if description}
				<p class="text-xs text-muted-foreground mt-0.5">{description}</p>
			{/if}
		</li>
	{/each}
</ol>
