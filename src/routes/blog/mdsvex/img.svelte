<script lang="ts">
	let { src, alt } = $props();
</script>

<img {src} {alt} title={alt} class="block w-full max-w-xl min-w-0 h-auto mx-auto rounded-md my-6" />
