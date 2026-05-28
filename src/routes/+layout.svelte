<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SITE } from '$lib/config.js';

	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:site_name" content={SITE.name} />
</svelte:head>

<ModeWatcher />

<div class="flex min-h-screen flex-col bg-background text-foreground">
	<Navbar />
	<main class="flex flex-1 flex-col items-center px-4 py-12 w-full">
		{@render children()}
	</main>
	<Footer />
</div>
