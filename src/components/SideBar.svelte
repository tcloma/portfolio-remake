<script lang="ts">
	import NavBtn from './NavBtn.svelte';
	export let pageUrl: string;

	const btns = ['home', 'work', 'blog'];
	$: currPage = pageUrl.slice(1);
</script>

<aside class="fixed ml-[30%] mt-20 text-center">
	<span class="text-4xl font-bold text-secondary">Ty</span>
	<nav class="flex flex-col">
		{#each btns as btnName}
			<NavBtn name={btnName} page={currPage}/>
		{/each}
	</nav>
</aside>
