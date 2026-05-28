<script lang="ts">
	import { page } from '$app/state';
	import { Moon, Sun, Menu } from '@lucide/svelte';
	import { toggleMode, mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '$lib/components/ui/sheet/index.js';
	import { SITE } from '$lib/config.js';

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/dev', label: 'Dev' },
		{ href: '/research', label: 'Research' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/redirect/gallery', label: 'Gallery' },
		{ href: '/redirect/resume', label: 'Resume' },
	];

	let mobileOpen = $state(false);

	function isActive(href: string) {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

<header class="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
	<div class="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 shrink-0">
			<img src="/mango_v3.svg" class="h-7 w-7" alt={SITE.owner.name} />
			<span class="font-serif font-semibold text-foreground hidden sm:inline">{SITE.owner.name}</span>
		</a>

		<!-- Desktop nav -->
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

		<div class="flex items-center gap-1">
			<!-- Dark mode toggle -->
			<Button variant="ghost" size="icon" onclick={toggleMode} aria-label="Toggle theme">
				{#if mode.current === 'dark'}
					<Sun class="h-4 w-4" />
				{:else}
					<Moon class="h-4 w-4" />
				{/if}
			</Button>

			<!-- Mobile hamburger -->
			<Sheet bind:open={mobileOpen}>
				<SheetTrigger>
					{#snippet child({ props })}
						<Button {...props} variant="ghost" size="icon" class="md:hidden" aria-label="Open menu">
							<Menu class="h-4 w-4" />
						</Button>
					{/snippet}
				</SheetTrigger>
				<SheetContent side="right" class="w-64">
					<SheetHeader>
						<SheetTitle class="font-serif text-left">Navigation</SheetTitle>
					</SheetHeader>
					<nav class="mt-6 flex flex-col gap-1">
						{#each navLinks as { href, label }}
							<a
								{href}
								onclick={() => (mobileOpen = false)}
								class="px-3 py-2 rounded-md text-sm transition-colors {isActive(href)
									? 'text-foreground font-medium bg-accent'
									: 'text-muted-foreground hover:text-foreground hover:bg-accent'}"
							>
								{label}
							</a>
						{/each}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	</div>
</header>
