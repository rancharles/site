<script lang="ts">
	let { href, children } = $props();
</script>

<a {href} class="underline underline-offset-4 decoration-muted-foreground hover:decoration-foreground transition-colors">{@render children()}</a>
