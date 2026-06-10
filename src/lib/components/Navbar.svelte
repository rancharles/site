<script lang="ts">
	import { page } from '$app/state';
	import { Moon, Sun, Menu } from '@lucide/svelte';
	import { toggleMode, mode } from 'mode-watcher';
	import { SITE } from '$lib/config.js';

	const navLinks = [
		{ href: '/research', label: 'Research' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/redirect/gallery', label: 'Gallery' },
		{ href: '/redirect/resume', label: 'Resume' },
	];

	let mobileOpen = $state(false);
	let headerEl: HTMLElement;

	function isActive(href: string) {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}

	function onWindowClick(e: MouseEvent) {
		if (mobileOpen && headerEl && !headerEl.contains(e.target as Node)) {
			mobileOpen = false;
		}
	}
</script>

<svelte:window onclick={onWindowClick} />

<header bind:this={headerEl} class="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm relative">
	<div class="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
		<!-- Logo -->
		<a href="/" aria-label="Home" class="flex items-center shrink-0">
			<img src="/mango_v3.svg" class="h-7 w-7" alt={SITE.owner.name} />
		</a>

		<!-- Nav + controls grouped on the right -->
		<div class="flex items-center gap-1">
			<!-- Desktop nav links -->
			<nav class="hidden md:flex items-center gap-1">
				{#each navLinks as { href, label }}
					<a
						{href}
						class="px-3 py-1.5 rounded-md text-sm transition-colors {isActive(href)
							? 'text-foreground font-medium'
							: 'text-muted-foreground hover:text-foreground hover:bg-accent'}"
					>
						{label}
					</a>
				{/each}
			</nav>

			<!-- Dark mode toggle -->
			<button onclick={toggleMode} aria-label="Toggle theme" class="p-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
				{#if mode.current === 'dark'}
					<Sun class="h-4 w-4" />
				{:else}
					<Moon class="h-4 w-4" />
				{/if}
			</button>

			<!-- Mobile hamburger -->
			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label="Open menu"
				aria-expanded={mobileOpen}
				class="md:hidden p-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
			>
				<Menu class="h-4 w-4" />
			</button>
		</div>
	</div>

	<!-- Full-width mobile dropdown -->
	{#if mobileOpen}
		<div class="absolute left-0 right-0 top-full bg-background/95 backdrop-blur-sm border-b border-border md:hidden">
			<div class="mx-auto max-w-3xl px-4 py-1.5">
				{#each navLinks as { href, label }, i}
					{#if i === 3}
						<div class="border-t border-border/50 my-1"></div>
					{/if}
					<a
						{href}
						onclick={() => (mobileOpen = false)}
						class="block py-2.5 text-sm transition-colors {isActive(href)
							? 'text-foreground font-medium'
							: 'text-muted-foreground hover:text-foreground'}"
					>
						{label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>
