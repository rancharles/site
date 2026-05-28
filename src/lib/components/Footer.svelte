<script lang="ts">
	import Mail from '$lib/icons/Mail.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Youtube from '$lib/icons/Youtube.svelte';
	import Discord from '$lib/icons/Discord.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '$lib/components/ui/tooltip/index.js';
	import { SITE } from '$lib/config.js';
</script>

<footer class="border-t border-border bg-background">
	<div class="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-6 sm:flex-row sm:justify-between">
		<span class="text-xs text-muted-foreground">
			© 2020–{new Date().getFullYear()} {SITE.owner.name}
		</span>
		<TooltipProvider>
			<div class="flex items-center gap-4">
				<a href="/redirect/github" aria-label="GitHub" class="text-muted-foreground transition-colors hover:text-foreground">
					<Github size={18} />
				</a>
				<a href="/redirect/youtube" aria-label="YouTube" class="text-muted-foreground transition-colors hover:text-foreground">
					<Youtube size={18} />
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
								<Discord size={18} />
							</button>
						{/snippet}
					</TooltipTrigger>
					<TooltipContent>@{SITE.social.discord.username}</TooltipContent>
				</Tooltip>
				<a href="/redirect/linkedin" aria-label="LinkedIn" class="text-muted-foreground transition-colors hover:text-foreground">
					<LinkedIn size={18} />
				</a>
				<a href="/redirect/email" aria-label="Email" class="text-muted-foreground transition-colors hover:text-foreground">
					<Mail size={18} />
				</a>
			</div>
		</TooltipProvider>
	</div>
</footer>
