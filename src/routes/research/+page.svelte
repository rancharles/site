<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Achievements from './Achievements.svelte';

	import { SITE } from '$lib/config.js';

	const achievements: App.Achievement[] = [
		{ title: '11th Place, ICPC NA Championship', date: '2026 March' },
		{ title: '3rd Place, ICPC NA West Regional', date: '2025 November' },
		{ title: 'Putnam Competition Top 200', date: '2024 December' },
		{ title: 'Canadian Open Math Competition Champion', date: '2023 October' }
	];
</script>

<svelte:head>
	<meta property="og:title" content="Research" />
	<meta property="og:description" content="{SITE.owner.firstName}'s research interests" />
</svelte:head>

<div class="max-w-2xl w-full py-8">
	<h1 class="text-4xl font-serif font-bold text-foreground">Research</h1>

	<p class="my-4 text-muted-foreground leading-relaxed">
		I am broadly interested in <span class="text-foreground font-medium">Deep Learning</span> and
		<span class="text-foreground font-medium">Algorithm Design</span>. In pure mathematics I am also
		interested in Combinatorics and Number Theory.
	</p>
	<p class="my-4 text-muted-foreground leading-relaxed">
		Currently I am doing some research in extremal combinatorics, on Erdős–Ko–Rado type problems
		and generalizations to finite vector spaces.
	</p>

	<Separator class="my-6" />

	<h2 class="text-xl font-serif font-semibold text-foreground mb-3">Coursework</h2>
	<ul class="list-disc list-outside ml-5 space-y-1 text-muted-foreground">
		<li>Multivariate Calculus, Differential Equations</li>
		<li>Linear, Group, Ring, Module Algebra</li>
		<li>Real, Complex Analysis</li>
		<li>Number Theory</li>
		<li>Graph Theory</li>
		<li>Algorithm Design and Data Structures</li>
		<li>Advanced Machine Learning</li>
		<li>Theory of Computation</li>
	</ul>

	<Separator class="my-6" />

	<h2 class="text-xl font-serif font-semibold text-foreground mb-3">Competitions</h2>
	<p class="my-4 text-muted-foreground leading-relaxed">
		I participate in Competitive Programming. I am a ICPC World Finalist for the
		<a href="https://icpc.cs.ubc.ca/team#2026" class="underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">UBC team</a>,
		and you can find me on
		<a href="/redirect/codeforces" class="underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">Codeforces</a>
		and some
		<a href="https://clist.by/coder/polarity/" class="underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">other platforms</a>.
	</p>

	<div id="achievements">
		<Achievements {achievements} />
	</div>
</div>
