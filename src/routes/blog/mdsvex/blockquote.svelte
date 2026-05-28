<script lang="ts">
	let { children } = $props();
</script>

<blockquote class="border-l-4 border-border pl-4 my-6 italic text-muted-foreground">
	{@render children()}
</blockquote>
