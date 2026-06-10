<script lang="ts">
	import '../app.css';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { onMount } from 'svelte';
	import { OverlayScrollbars } from 'overlayscrollbars';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SITE } from '$lib/config.js';

	let { children } = $props();

	onMount(() => {
		const instance = OverlayScrollbars(
			{
				target: document.body,
				cancel: { nativeScrollbarsOverlaid: false, body: false }
			},
			{
				scrollbars: {
					theme: 'os-theme-firefox',
					autoHide: 'never'
				}
			}
		);

		const html = document.documentElement;
		let timer: ReturnType<typeof setTimeout>;

		const onActivity = () => {
			html.classList.add('scrollbar-visible');
			clearTimeout(timer);
			timer = setTimeout(() => html.classList.remove('scrollbar-visible'), 1200);
		};

		const events = ['mousemove', 'keydown', 'wheel', 'pointerdown', 'touchstart'] as const;
		events.forEach(e => window.addEventListener(e, onActivity, { passive: true }));

		return () => {
			instance?.destroy();
			events.forEach(e => window.removeEventListener(e, onActivity));
			clearTimeout(timer);
		};
	});
</script>

<svelte:head>
	<meta property="og:site_name" content={SITE.name} />
</svelte:head>

<ModeWatcher />

<div class="flex min-h-screen flex-col bg-background text-foreground">
	<Navbar />
	<main class="flex flex-1 flex-col w-full">
		<div class="mx-auto w-full max-w-3xl px-4">
			{@render children()}
		</div>
	</main>
	<Footer />
</div>
