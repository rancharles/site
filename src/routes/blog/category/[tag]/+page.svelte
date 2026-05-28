<script lang="ts">
	import { Tag } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import {
		Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator
	} from '$lib/components/ui/breadcrumb/index.js';

	function formatDate(date: string, dateStyle: Blog.DateStyle = 'medium', locales = 'en') {
		const dateToFormat = new Date(date.replaceAll('-', '/'));
		return new Intl.DateTimeFormat(locales, { dateStyle }).format(dateToFormat);
	}

	function formatTag(s: string) {
		if (s.toLowerCase() === 'problem-journal') return 'Problem Solving Journal';
		if (s.toLowerCase() === 'cs') return 'CS';
		return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
	}

	let { data } = $props();
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" href="/rss.xml" />
	<meta property="og:title" content="Polarity's Blog" />
	<meta property="og:description" content={"A collection of pseudorandom thoughts in " + formatTag(data.tag)} />
</svelte:head>

<div class="max-w-3xl w-full py-8">
	{#if data.posts?.length}
		<Breadcrumb class="mb-8">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/blog">
						<Tag class="h-3.5 w-3.5 mr-1 inline" />
						Blog
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>{formatTag(data.tag)}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>

		{#each data.posts as { title, slug, description, date, categories, problems = null, journalOnly }}
			{#if data.tag === 'problem-journal' || !journalOnly}
				<div class="mb-8">
					<h1 class="text-2xl font-serif font-bold text-foreground">{title}</h1>
					<p class="my-1.5 text-sm text-muted-foreground">{formatDate(date)}</p>
					<div class="flex flex-wrap gap-1 mb-3">
						{#each categories as category}
							<Badge variant="secondary" class="text-xs" href={'/blog/category/' + category}>
								#{category}
							</Badge>
						{/each}
					</div>
					{#if description}
						<p class="text-muted-foreground text-sm leading-relaxed mb-2">{description}</p>
					{/if}
					{#if problems}
						<p class="text-sm text-muted-foreground mb-2">
							<span class="font-medium text-foreground">Problems:</span>
							{#each problems as problem, i}{i > 0 ? ' · ' : ''}{problem}{/each}
						</p>
					{/if}
					<a href={'/blog/post/' + slug} class="text-sm underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">
						Read more →
					</a>
				</div>
				<Separator class="mb-8" />
			{/if}
		{/each}
	{:else}
		<p class="text-muted-foreground my-4">No category "{formatTag(data.tag)}" found.</p>
		<a href="/blog" class="text-sm underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">
			Back to blog home
		</a>
	{/if}
</div>
