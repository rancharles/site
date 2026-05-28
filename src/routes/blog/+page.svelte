<script lang="ts">
	import { Rss } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import {
		Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator
	} from '$lib/components/ui/breadcrumb/index.js';

	function formatDate(date: string, dateStyle: Blog.DateStyle = 'medium', locales = 'en') {
		const dateToFormat = new Date(date.replaceAll('-', '/'));
		return new Intl.DateTimeFormat(locales, { dateStyle }).format(dateToFormat);
	}

	import { SITE } from '$lib/config.js';

	let { data } = $props();
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" href="/rss.xml" />
	<meta property="og:title" content="{SITE.owner.firstName}'s Blog" />
	<meta property="og:description" content="A collection of pseudorandom thoughts" />
</svelte:head>

<div class="max-w-3xl w-full py-8">
	<div class="flex items-center justify-between gap-4 mb-8 flex-wrap">
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbPage>Blog</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
		<div class="flex items-center gap-2">
			<Button size="xs" variant="outline" href="/blog/category/problem-journal">
				Problem Solving Journal
			</Button>
			<a href="/blog/rss.xml" class="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors" aria-label="RSS Feed">
				<Rss class="h-3.5 w-3.5" />
				RSS
			</a>
		</div>
	</div>

	{#each data.posts as { title, slug, description, date, categories, problems = null, journalOnly = false }}
		{#if !journalOnly}
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
</div>
