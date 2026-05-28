<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import {
		Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator
	} from '$lib/components/ui/breadcrumb/index.js';

	function formatDate(date: string, dateStyle: Blog.DateStyle = 'medium', locales = 'en') {
		const dateToFormat = new Date(date.replaceAll('-', '/'));
		return new Intl.DateTimeFormat(locales, { dateStyle }).format(dateToFormat);
	}

	let { data } = $props();
	let { title, date, description, categories, slug, problems = null, published } = $derived(data.meta);
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" crossorigin="anonymous" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
</svelte:head>

<article class="w-full max-w-3xl py-8">
	<Breadcrumb class="mb-8">
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>{title}</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<h1 class="text-3xl font-serif font-bold text-foreground">{title}</h1>
	<p class="my-3 text-sm text-muted-foreground">
		{#if published}
			Published {formatDate(date)}
		{:else}
			Written {formatDate(date)}, Unpublished
		{/if}
	</p>
	<div class="flex flex-wrap gap-1 mb-4">
		{#each categories as category}
			<Badge variant="secondary" class="text-xs" href={'/blog/category/' + category}>
				#{category}
			</Badge>
		{/each}
	</div>
	{#if problems}
		<p class="text-sm text-muted-foreground mb-4">
			<span class="font-medium text-foreground">Problems:</span>
			{#each problems as problem, i}{i > 0 ? ' · ' : ''}{problem}{/each}
		</p>
	{/if}

	<div class="mt-6">
		<data.content />
	</div>

	<Separator class="my-8" />
</article>
