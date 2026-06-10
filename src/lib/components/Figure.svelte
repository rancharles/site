<script lang="ts">
	let { src, alt = '', caption = '', width = '100%' }: {
		src: string;
		alt?: string;
		caption?: string;
		width?: string;
	} = $props();
</script>

<figure class="my-8 mx-auto flex flex-col gap-3" style="max-width: {width};">
	<img {src} {alt} loading="lazy" class="w-full h-auto block rounded-md" />
	{#if caption}
		<figcaption class="text-center text-sm italic text-muted-foreground max-w-[65ch] mx-auto">
			{caption}
		</figcaption>
	{/if}
</figure>
