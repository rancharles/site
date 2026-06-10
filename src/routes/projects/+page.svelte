<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { FileText } from '@lucide/svelte';
	import GithubIcon from '$lib/icons/Github.svelte';
	import { SITE } from '$lib/config.js';

	let hoveredIndex = $state(-1);

	const projects: App.Project[] = [
		{
			title: 'Virtual Olympiad',
			subtitle: 'Science Olympiad Platform & APIs',
			date: '2022-2025',
			description: 'A suite of platforms and tools for Science Olympiad competitors. Includes a large indexed database of categorized contest problems, an online judge and community platform, and a real-time multiplayer arena where users compete on auto-generated problem sets.',
			imageSrc: '/projects/voly.png',
			link: 'https://volympiad.org',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/virtual-olympiad/' }],
			technologies: [
				{ name: 'SvelteKit' }, { name: 'React' }, { name: 'Tailwind' }, { name: 'SASS' },
				{ name: 'WebSocket' }, { name: 'Express' }, { name: 'Supabase' }, { name: 'Docker' },
				{ name: 'Cloudflare' }, { name: 'Node' }, { name: 'Typescript' }
			]
		},
		{
			title: 'CLVSA',
			subtitle: 'Variational Seq2Seq ConvLSTM with Attention',
			date: '2026',
			description: 'Implementation and extension of <a href="https://doi.org/10.24963/ijcai.2019/514" class="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">Wang et al. (2019)</a>\'s CLVSA model for financial time-series prediction. Combines a ConvLSTM seq2seq design with self- and inter-attention, a variational component with KL divergence regularization, and a training pipeline evaluated on OHLCV equities and futures data.',
			imageSrc: '/projects/clvsa.png',
			links: [
				{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/clvsa' },
				{ icon: FileText, label: 'Report', href: '/clvsa.pdf' }
			],
			technologies: [
				{ name: 'PyTorch' }, { name: 'Hugging Face' }, { name: 'Pandas' },
				{ name: 'Scikit-Learn' }, { name: 'Python' }
			]
		},
        {
			title: 'CERXA',
			subtitle: 'Volumetric Raytracing Engine',
			date: '2020-2021',
			description: 'A WebGL volumetric raytracer written in GLSL from scratch. Supports ambient, diffuse and specular lighting, hard shadows, a free camera, and distance-estimated fractal rendering.',
			imageSrc: '/projects/cerxa.png',
			link: 'https://cerxa.charlesran.com',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/cerxa' }],
			technologies: [
				{ name: 'WebGL' }, { name: 'GLSL' }, { name: 'Shadertoy' },
                { name: 'Vanilla JS' }
			]
		},
		{
			title: 'UBC ICPC',
			subtitle: 'University Club Website',
			date: '2024–Present',
			description: 'Official website for the UBC ICPC competitive programming club. Includes an authenticated CMS for content management, backed by SQLite and self-hosted with Docker.',
			imageSrc: '/projects/ubc-icpc.png',
			link: 'https://icpc.cs.ubc.ca',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/ubc-icpc' }],
			technologies: [
				{ name: 'SvelteKit' }, { name: 'Figma' }, { name: 'Tailwind' },
				{ name: 'SQLite' }, { name: 'Docker' },
				{ name: 'Cloudflare' }, { name: 'Node' }, { name: 'Typescript' }
			]
		},
		{
			title: 'Sap',
			subtitle: 'Pathtracing Engine',
			date: '2025',
			description: 'A Java pathtracing engine written from the math up, designed to be readable and easy to extend. The code maps closely to the underlying rendering theory, built for learning.',
			imageSrc: '/projects/sap.png',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/sap' }],
			technologies: [
				{ name: 'Java Swing' }, { name: 'JUnit' }, { name: 'Maven' }, { name: 'Java' }
			]
		},
		{
			title: 'BrawlTrack',
			subtitle: 'Statistics Tracker',
			date: '2021–2022',
			description: 'Statistics tracker for the mobile game Brawl Stars. Periodically syncs with the public API to track progression over time, displayed in a custom UI styled to match the game. Once used by 10+ esports organizations and over 4000 players.',
			imageSrc: '/projects/brawltrack.png',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/brawltrack' }],
			technologies: [
				{ name: 'Embedded JS' }, { name: 'Express' },
				{ name: 'MongoDB' }, { name: 'Node' }
			]
		},
		/*
		{
			title: 'Aesthete',
			subtitle: 'Math Parser & API Wrapper',
			date: '2023',
			description: 'Typescript HTML parser module supporting TeX in the web, allowing conversion to an intermediate HTML/TeX-like language for rich full-text search and rendering to KaTeX/MathML. Also an API wrapper for the Art of Problem Solving Website.',
			imageSrc: '/projects/aesthete.png',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/virtual-olympiad/aesthete' }],
			technologies: [
				{ name: 'NPM' }, { name: 'Cheerio' }, { name: 'KaTeX' }, { name: 'Typescript' }
			]
		},
		*/
		{
			title: 'Minesweeper Battles',
			subtitle: 'Multiplayer Online Game',
			date: '2021',
			description: 'Online minesweeper with a multiplayer twist. Host public/private games and face off in live minesweeper, solving the same board side-by-side. Clicking a bomb penalizes with a short time freeze.',
			imageSrc: '/projects/minesweeper.png',
			link: 'https://minesweeper.charlesran.com',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/minesweeper-battles' }],
			technologies: [
				{ name: 'P5.js' }, { name: 'jQuery' }, { name: 'Express' },
				{ name: 'WebSocket' }, { name: 'Node' }
			]
		},
		/*
		{
			title: 'Vires',
			subtitle: 'Fractal Analysis Software',
			date: '2023',
			description: 'Image processing pipeline and algorithm suite for fractal analysis. Developed for research purposes in the Canadian Young Physicists Tournament, Vires uses Julia and OpenCV to analyze images of real-world fractal phenomena.',
			imageSrc: '/projects/vires.png',
			links: [{ icon: GithubIcon, label: 'Source Code', href: 'https://github.com/rancharles/vires' }],
			technologies: [
				{ name: 'Plots' }, { name: 'OpenCV' }, { name: 'Julia' }
			]
		}
		*/
	];
</script>

<svelte:head>
	<title>Projects | {SITE.name}</title>
	<meta property="og:title" content="Projects" />
	<meta property="og:description" content="{SITE.owner.firstName}'s featured projects" />
</svelte:head>

<div class="py-8">
	<h1 class="text-4xl font-display font-semibold text-foreground mb-4">Projects</h1>
	<div class="space-y-3 text-[0.925rem] leading-relaxed text-muted-foreground mb-2">
		<p>
			I have a background in fullstack web development, working mostly in TypeScript, Node.js, and SvelteKit. Here are some things I've built.
		</p>
		<p>
			See my <a href="/redirect/github" class="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">GitHub</a> for all public work.
		</p>
	</div>
	<div class="mt-8">
		{#each projects as { title, subtitle, date, description, link, links, imageSrc, technologies }, i}
			<Separator class="transition-[margin-left,width] duration-150 {hoveredIndex >= 0 && (hoveredIndex === i || hoveredIndex === i - 1) ? '-ml-4 !w-[calc(100%+2rem)]' : ''}" />
			<div
				class="relative isolate flex gap-6 py-7 group"
				role="article"
				onmouseenter={() => hoveredIndex = i}
				onmouseleave={() => hoveredIndex = -1}
			>
				<div class="absolute inset-y-0 -inset-x-4 bg-muted/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10"></div>
				<!-- Text: left side, takes all remaining space -->
				<div class="flex flex-col gap-3 flex-1 min-w-0">
					<div class="flex items-baseline justify-between gap-4 flex-wrap">
						<h3 class="font-serif text-xl text-foreground leading-tight">
							{title}
							{#if subtitle}
								<span class="text-sm font-sans font-normal text-muted-foreground ml-1.5">{subtitle}</span>
							{/if}
						</h3>
					</div>
					<p class="text-sm text-muted-foreground leading-relaxed">{@html description}</p>
					<p class="text-xs text-muted-foreground">
						{technologies.map(t => t.name).join(' · ')}
					</p>
					<div class="flex items-center gap-4">
						{#each links as { icon: IconComponent, label, href }}
							<a {href} class="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
								<IconComponent size={13} />
								{label}
							</a>
						{/each}
						{#if link}
							<a href={link} class="text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto">
								Visit ↗
							</a>
						{/if}
					</div>
				</div>
				<!-- Image: right side, stretches to card height -->
				<div class="hidden sm:block sm:w-44 sm:shrink-0 sm:self-stretch">
					<img src={imageSrc} alt={title} class="w-full h-full object-cover rounded-md opacity-85" />
				</div>
			</div>
		{/each}
	</div>
</div>
