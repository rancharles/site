<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '$lib/components/ui/tooltip/index.js';
	import Github from '$lib/icons/Github.svelte';
	import Youtube from '$lib/icons/Youtube.svelte';
	import Discord from '$lib/icons/Discord.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import Mail from '$lib/icons/Mail.svelte';
	import { SITE } from '$lib/config.js';
</script>

<svelte:head>
	<meta property="og:title" content="Home" />
	<meta property="og:description" content={SITE.description} />
	<meta property="og:type" content="profile" />
	<meta property="profile:first_name" content={SITE.owner.firstName} />
	<meta property="profile:last_name" content="Ran" />
	<meta property="profile:username" content="polarity" />
</svelte:head>

<div class="my-auto flex flex-col items-center text-center gap-6 py-16">
	<div>
		<h1 class="text-5xl font-serif font-bold tracking-tight text-foreground md:text-6xl">
			{SITE.owner.name}
		</h1>
		<p class="mt-3 text-base text-muted-foreground">Student · Developer · Mathematician</p>
	</div>

	<TooltipProvider>
		<div class="flex items-center gap-5">
			<a href="/redirect/github" aria-label="GitHub" class="text-muted-foreground transition-colors hover:text-foreground">
				<Github size={22} />
			</a>
			<a href="/redirect/youtube" aria-label="YouTube" class="text-muted-foreground transition-colors hover:text-foreground">
				<Youtube size={22} />
			</a>
			<Tooltip>
				<TooltipTrigger>
					{#snippet child({ props })}
						<button
							{...props}
							onclick={async () => await navigator.clipboard.writeText(SITE.social.discord.username)}
							aria-label="Copy Discord username"
							class="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
						>
							<Discord size={22} />
						</button>
					{/snippet}
				</TooltipTrigger>
				<TooltipContent>@{SITE.social.discord.username}</TooltipContent>
			</Tooltip>
			<a href="/redirect/linkedin" aria-label="LinkedIn" class="text-muted-foreground transition-colors hover:text-foreground">
				<LinkedIn size={22} />
			</a>
			<a href="/redirect/email" aria-label="Email" class="text-muted-foreground transition-colors hover:text-foreground">
				<Mail size={22} />
			</a>
		</div>
	</TooltipProvider>

	<Button href="/about" variant="outline">About Me</Button>
</div>
