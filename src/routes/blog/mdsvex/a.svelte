<script lang="ts">
	let { href, children } = $props();
</script>

<a {href} class="text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">{@render children()}</a>
