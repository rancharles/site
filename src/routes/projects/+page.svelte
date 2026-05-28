<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import GithubIcon from '$lib/icons/Github.svelte';
	import { SITE } from '$lib/config.js';

	const colorMap: Record<string, string> = {
		red: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
		purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
		yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
		green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
		blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
		dark: 'bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200'
	};

	const projects: App.Project[] = [
		{
			title: 'Virtual Olympiad',
			subtitle: 'Science Olympiad Platform & APIs',
			date: '2023–Present',
			description: 'Hosted platforms, APIs and tools for Science Olympiads. VODB maintains a massive schemaful database of indexed contest problems, fully categorized. VOJ hosts a community platform and an online judge. Arena allows users to compete in public/private realtime multiplayer lobbies with computer-generated contest problemsets.',
			imageSrc: '/projects/voly.png',
			link: 'https://volympiad.org',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/virtual-olympiad/' }],
			technologies: [
				{ name: 'SvelteKit', color: 'red' }, { name: 'React', color: 'red' },
				{ name: 'Tailwind', color: 'red' }, { name: 'SASS', color: 'red' },
				{ name: 'WebSocket', color: 'purple' }, { name: 'Express', color: 'purple' },
				{ name: 'Supabase', color: 'purple' }, { name: 'Docker', color: 'purple' },
				{ name: 'Cloudflare', color: 'yellow' }, { name: 'Node', color: 'green' },
				{ name: 'Typescript', color: 'green' }
			]
		},
		{
			title: 'CERXA',
			subtitle: 'Web Computer Graphics Engine',
			date: '2021–Present',
			description: 'Custom P5.js and WebGL Graphics Engines implemented from scratch in GLSL, supporting Rasterization and Volumetric Raytracing. Features ambient, diffuse and specular lighting, hard shadows, a dynamic camera system and support for distance-estimated fractal rendering.',
			imageSrc: '/projects/cerxa.png',
			link: 'https://cerxa.polarity.sh',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/cerxa' }],
			technologies: [
				{ name: 'WebGL', color: 'red' }, { name: 'P5.js', color: 'red' },
				{ name: 'HTML/CSS', color: 'red' }, { name: 'Shadertoy', color: 'yellow' },
				{ name: 'GLSL', color: 'green' }, { name: 'Javascript', color: 'green' }
			]
		},
		{
			title: 'UBC ICPC',
			subtitle: 'Official University ICPC Site',
			date: '2024–Present',
			description: 'Professional website for the official University of British Columbia ICPC competitive programming team and club with custom modern UI elements and interactivity. The backend features a dynamic authenticated CMS with backup redundancy, built on SQLite and self-hosted with Docker.',
			imageSrc: '/projects/ubc-icpc.png',
			link: 'https://icpc.cs.ubc.ca',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/ubc-icpc' }],
			technologies: [
				{ name: 'SvelteKit', color: 'red' }, { name: 'Figma', color: 'red' },
				{ name: 'Tailwind', color: 'red' }, { name: 'SQLite', color: 'purple' },
				{ name: 'Docker', color: 'purple' }, { name: 'Linux', color: 'purple' },
				{ name: 'Cloudflare', color: 'yellow' }, { name: 'Node', color: 'green' },
				{ name: 'Typescript', color: 'green' }
			]
		},
		{
			title: 'Sap',
			subtitle: 'Java Pathtracing Engine',
			date: '2025–Present',
			description: 'Highly modular and robust Java raytracing engine specifically built for educational purposes. Written "completely mathematically from scratch" with a clear and extensible foundation for experimenting with a wide range of common rendering techniques and features.',
			imageSrc: '/projects/sap.png',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/sap' }],
			technologies: [
				{ name: 'Java Swing', color: 'red' }, { name: 'JUnit', color: 'yellow' },
				{ name: 'Maven', color: 'green' }, { name: 'Java', color: 'green' }
			]
		},
		{
			title: 'BrawlTrack',
			subtitle: 'Statistics Tracker',
			date: '2021–2022',
			description: 'Progression statistics tracker for the mobile game Brawl Stars. Server periodically fetches and stores Brawl Stars public API data in MongoDB, calculating progression changes displayed in a custom game-esque UI. Used by 10+ esports organizations with over 4000 total players.',
			imageSrc: '/projects/brawltrack.png',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/brawltrack' }],
			technologies: [
				{ name: 'Embedded JS', color: 'red' }, { name: 'HTML/CSS', color: 'red' },
				{ name: 'Express', color: 'purple' }, { name: 'MongoDB', color: 'purple' },
				{ name: 'Node', color: 'green' }, { name: 'Javascript', color: 'green' }
			]
		},
		{
			title: 'Aesthete',
			subtitle: 'Math Parser & API Wrapper',
			date: '2023–Present',
			description: 'Typescript HTML parser module supporting TeX in the web, allowing conversion to an intermediate HTML/TeX-like language for rich full-text search and rendering to KaTeX/MathML. Also an API wrapper for the Art of Problem Solving Website.',
			imageSrc: '/projects/aesthete.png',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/virtual-olympiad/aesthete' }],
			technologies: [
				{ name: 'NPM', color: 'red' }, { name: 'Cheerio', color: 'purple' },
				{ name: 'KaTeX', color: 'purple' }, { name: 'Typescript', color: 'green' }
			]
		},
		{
			title: 'Minesweeper Battles',
			subtitle: 'Multiplayer Online Game',
			date: '2021',
			description: 'Online minesweeper with a multiplayer twist. Host public/private games and face off in live minesweeper, solving the same board side-by-side. Clicking a bomb penalizes with a short time freeze.',
			imageSrc: '/projects/minesweeper.png',
			link: 'https://minesweeper.polarity.sh',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/minesweeper-battles' }],
			technologies: [
				{ name: 'P5.js', color: 'red' }, { name: 'jQuery', color: 'red' },
				{ name: 'Express', color: 'purple' }, { name: 'WebSocket', color: 'purple' },
				{ name: 'Node', color: 'green' }, { name: 'Javascript', color: 'green' }
			]
		},
		{
			title: 'Vires',
			subtitle: 'Fractal Analysis Software',
			date: '2023',
			description: 'Image processing pipeline and algorithm suite for fractal analysis. Developed for research purposes in the Canadian Young Physicists Tournament, Vires uses Julia and OpenCV to analyze images of real-world fractal phenomena.',
			imageSrc: '/projects/vires.png',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/vires' }],
			technologies: [
				{ name: 'Plots', color: 'red' }, { name: 'OpenCV', color: 'purple' },
				{ name: 'Julia', color: 'green' }
			]
		}
	];
</script>

<svelte:head>
	<meta property="og:title" content="Projects" />
	<meta property="og:description" content="{SITE.owner.firstName}'s featured projects" />
</svelte:head>

<div class="max-w-5xl w-full py-8">
	<h1 class="text-4xl font-serif font-bold text-foreground mb-2">Featured Projects</h1>
	<p class="text-muted-foreground mb-2">
		See my <a href="/redirect/github" class="underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">GitHub</a> for all public projects.
	</p>
	<Separator class="mb-8" />

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
		{#each projects as { title, subtitle, date, description, link, links, imageSrc, technologies }}
			<Card class="flex flex-col">
				<CardHeader class="pb-3">
					<img src={imageSrc} alt="{title}: {subtitle}" class="mb-3 h-40 w-full object-cover rounded-md" />
					<CardTitle class="font-serif text-xl">
						{title}
						{#if subtitle}
							<span class="text-sm font-sans font-normal text-muted-foreground ml-1">{subtitle}</span>
						{/if}
					</CardTitle>
				</CardHeader>
				<CardContent class="flex-1 pb-3">
					<p class="text-sm text-muted-foreground leading-relaxed mb-3">{@html description}</p>
					{#if date}
						<p class="text-xs font-mono text-muted-foreground mb-2">{date}</p>
					{/if}
					<div class="flex flex-wrap gap-1">
						{#each technologies as { name, color = 'dark' }}
							<Badge class="text-xs {colorMap[color] ?? colorMap.dark}">{name}</Badge>
						{/each}
					</div>
				</CardContent>
				<CardFooter class="pt-0 gap-2 flex-wrap">
					{#each links as { icon: IconComponent, label, href }}
						<Button size="sm" variant="outline" {href}>
							<IconComponent size={14} />
							{label}
						</Button>
					{/each}
					{#if link}
						<Button size="sm" href={link} class="ml-auto">Visit</Button>
					{/if}
				</CardFooter>
			</Card>
		{/each}
	</div>
</div>
