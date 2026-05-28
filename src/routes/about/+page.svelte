<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '$lib/components/ui/tooltip/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Github from '$lib/icons/Github.svelte';
	import Youtube from '$lib/icons/Youtube.svelte';
	import Discord from '$lib/icons/Discord.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Mail from '$lib/icons/Mail.svelte';
	import { SITE } from '$lib/config.js';

	const aliases = ['cranberry128', 'polarity', 'mango'];
</script>

<svelte:head>
	<meta property="og:title" content="About" />
	<meta property="og:description" content="About {SITE.owner.firstName}" />
	<meta property="og:type" content="profile" />
	<meta property="profile:first_name" content={SITE.owner.firstName} />
	<meta property="profile:last_name" content="Ran" />
</svelte:head>

<div class="flex flex-col items-center gap-6 max-w-2xl w-full py-8">
	<!-- Profile header -->
	<div class="flex items-center gap-4">
		<img src="/mango_v3.svg" class="h-16 w-16 rounded-full" alt={SITE.owner.name} />
		<div>
			<div class="flex items-center gap-2 flex-wrap">
				<h1 class="text-xl font-serif font-semibold text-foreground">{SITE.owner.name}</h1>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							{#snippet child({ props })}
								<span {...props} class="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5 cursor-default">aka</span>
							{/snippet}
						</TooltipTrigger>
						<TooltipContent>
							Also known as
							{#each aliases as alias, i}
								<span class="font-semibold">{alias}</span>{i < aliases.length - 1 ? ', ' : ''}
							{/each}
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			<p class="text-sm text-muted-foreground">@cran</p>
		</div>
	</div>

	<!-- Social buttons -->
	<TooltipProvider>
		<div class="flex items-center gap-2 flex-wrap justify-center">
			<Button href="/redirect/github" variant="outline" size="sm">
				<Github size={15} />
				GitHub
			</Button>
			<Button href="/redirect/youtube" variant="outline" size="sm">
				<Youtube size={15} />
				YouTube
			</Button>
			<Tooltip>
				<TooltipTrigger>
					{#snippet child({ props })}
						<Button {...props} variant="outline" size="sm" onclick={() => navigator.clipboard.writeText(SITE.social.discord.username)}>
							<Discord size={15} />
							Discord
						</Button>
					{/snippet}
				</TooltipTrigger>
				<TooltipContent>@{SITE.social.discord.username} (click to copy)</TooltipContent>
			</Tooltip>
			<Button href="/redirect/linkedin" variant="outline" size="sm">
				<LinkedIn size={15} />
				LinkedIn
			</Button>
			<Button href="/redirect/email" variant="outline" size="sm">
				<Mail size={15} />
				Email
			</Button>
		</div>
	</TooltipProvider>

	<!-- Bio -->
	<div class="text-center space-y-3 max-w-xl">
		<p class="text-muted-foreground leading-relaxed">
			Hi! I'm <span class="font-semibold text-foreground">{SITE.owner.firstName}</span>, a second-year undergraduate at the
			University of British Columbia studying
			<a href="/dev" class="underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">Computer Science</a>
			and
			<a href="/research" class="underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">Math</a>.
			I'm broadly interested in Deep Learning, Algorithms, Combinatorics, and Number Theory.
		</p>
		<p class="text-muted-foreground leading-relaxed">
			I enjoy running, reading, and playing Tetris in my free time.
		</p>
	</div>

	<Separator class="w-24" />
</div>
