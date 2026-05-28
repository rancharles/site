<script lang="ts">
	let { src, alt } = $props();
</script>

<img {src} {alt} title={alt} class="max-w-xl mx-auto rounded-md my-6" />
