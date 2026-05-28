<script lang="ts">
	let { children } = $props();
</script>

<ol class="list-decimal list-outside ml-6 space-y-1 my-4 text-foreground/90">{@render children()}</ol>
