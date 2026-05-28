<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Technologies from './Technologies.svelte';
	import { SITE } from '$lib/config.js';
</script>

<svelte:head>
	<meta property="og:title" content="Dev" />
	<meta property="og:description" content="{SITE.owner.firstName}'s software interests" />
</svelte:head>

<div class="max-w-2xl w-full py-8">
	<h1 class="text-4xl font-serif font-bold text-foreground">Software</h1>
	<p class="my-4 text-muted-foreground leading-relaxed">
		I am broadly interested in <span class="text-foreground font-medium">Deep Learning</span> and
		<span class="text-foreground font-medium">Algorithm Design</span>.
	</p>
	<p class="my-4 text-muted-foreground leading-relaxed">
		I participate in Competitive Programming. I am a ICPC World Finalist for the
		<a href="https://icpc.cs.ubc.ca/team#2026" class="underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">UBC team</a>,
		and you can find me on
		<a href="/redirect/codeforces" class="underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">Codeforces</a>
		and some
		<a href="https://clist.by/coder/polarity/" class="underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">other platforms</a>.
	</p>
	<p class="my-4 text-muted-foreground leading-relaxed">
		I also have lots of experience with <span class="text-foreground font-medium">Fullstack Web Development</span>:
		web frameworks, UI design, APIs, servers, auth, realtime, many DB paradigms, infrastructure design and more.
	</p>

	<Separator class="my-8" />

	<h2 class="text-2xl font-serif font-semibold text-foreground">Technologies</h2>
	<p class="my-4 text-muted-foreground leading-relaxed">
		Some of the notable technologies I've worked with. Personal favorites are hearted!
	</p>

	<Technologies />

	<Separator class="my-8" />

	<h2 class="text-2xl font-serif font-semibold text-foreground">Projects</h2>
	<p class="my-4 text-muted-foreground leading-relaxed">
		I have developed many software projects for fun.
		<a
			href="/projects"
			class="inline-flex items-center gap-1 text-foreground underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors"
		>
			View my projects
			<ArrowRight class="h-3.5 w-3.5" />
		</a>
	</p>
</div>
