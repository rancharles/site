<script lang="ts">
	import { Rss, BookOpen } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	function formatDate(date: string, dateStyle: Blog.DateStyle = 'medium', locales = 'en') {
		const dateToFormat = new Date(date.replaceAll('-', '/'));
		return new Intl.DateTimeFormat(locales, { dateStyle }).format(dateToFormat);
	}

	import { SITE } from '$lib/config.js';

	let { data } = $props();

	let hoveredIndex = $state(-1);
	let visiblePosts = $derived(data.posts.filter((p: Blog.Post) => !p.journalOnly));
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" href="/rss.xml" />
	<title>Blog | {SITE.name}</title>
	<meta property="og:url" content="{SITE.url}/blog" />
	<meta property="og:title" content="Blog | {SITE.name}" />
	<meta property="og:description" content="A collection of pseudorandom thoughts by {SITE.owner.name}." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="py-8">
	<div class="flex items-baseline justify-between gap-4 mb-8">
		<h1 class="text-4xl font-display font-semibold text-foreground">Blog</h1>
		<div class="flex items-center gap-3 shrink-0">
			<a href="/blog/category/problem-journal" class="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
				<BookOpen class="h-3.5 w-3.5" />
				Problem Solving Journal
			</a>
			<span class="w-px h-3.5 bg-border shrink-0"></span>
			<a href="/blog/rss.xml" class="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors" aria-label="RSS Feed">
				<Rss class="h-3.5 w-3.5" />
				RSS
			</a>
		</div>
	</div>

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
</div>
