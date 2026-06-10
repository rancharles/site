<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	function formatDate(date: string, dateStyle: Blog.DateStyle = 'medium', locales = 'en') {
		const dateToFormat = new Date(date.replaceAll('-', '/'));
		return new Intl.DateTimeFormat(locales, { dateStyle }).format(dateToFormat);
	}

	function formatTag(s: string) {
		if (s.toLowerCase() === 'problem-journal') return 'Problem Solving Journal';
		if (s.toLowerCase() === 'cs') return 'CS';
		return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
	}

	import { SITE } from '$lib/config.js';

	let { data } = $props();

	let hoveredIndex = $state(-1);
	let visiblePosts = $derived(
		(data.posts ?? []).filter((p: Blog.Post) => data.tag === 'problem-journal' || !p.journalOnly)
	);
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" href="/rss.xml" />
	<title>#{data.tag} | {SITE.name}</title>
	<meta property="og:title" content="{SITE.owner.firstName}'s Blog" />
	<meta property="og:description" content={"A collection of pseudorandom thoughts in " + formatTag(data.tag)} />
</svelte:head>

<div class="py-8">
	<div class="flex items-baseline justify-between mb-8">
		<h1 class="text-4xl font-display font-semibold text-foreground">{formatTag(data.tag)}</h1>
		<a href="/blog" class="text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0">← All posts</a>
	</div>

	{#if visiblePosts.length}
		{#each visiblePosts as { title, slug, description, date, categories, problems = null }, i}
			<Separator class="transition-[margin-left,width] duration-150 {hoveredIndex >= 0 && (hoveredIndex === i || hoveredIndex === i - 1) ? '-ml-4 !w-[calc(100%+2rem)]' : ''}" />
			<div
				class="relative isolate py-7 group"
				role="article"
				onmouseenter={() => hoveredIndex = i}
				onmouseleave={() => hoveredIndex = -1}
			>
				<div class="absolute inset-y-0 -inset-x-4 bg-muted/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10"></div>
				<h2 class="text-xl font-serif font-medium text-foreground mb-1.5">{title}</h2>
				<p class="text-sm text-muted-foreground mb-2">{formatDate(date)}</p>
				<div class="flex flex-wrap gap-1 mb-3">
					{#each categories as category}
						<Badge variant="secondary" class="text-xs" href={'/blog/category/' + category}>
							#{category}
						</Badge>
					{/each}
				</div>
				{#if description}
					<p class="text-muted-foreground text-sm leading-relaxed mb-3">{description}</p>
				{/if}
				{#if problems}
					<p class="text-sm text-muted-foreground mb-3">
						<span class="font-medium text-foreground">Problems:</span>
						{#each problems as problem, j}{j > 0 ? ' · ' : ''}{problem}{/each}
					</p>
				{/if}
				<a href={'/blog/post/' + slug} class="text-sm text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">
					Read more →
				</a>
			</div>
		{/each}
	{:else}
		<p class="text-muted-foreground text-sm">No posts in this category yet.</p>
	{/if}
</div>
