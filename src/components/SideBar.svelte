<script lang="ts">
	import NavBtn from './NavBtn.svelte';
	import LightBulbOff from './icons/LightBulbOff.svelte';
	import LightBulbOn from './icons/LightBulbOn.svelte';
	import IconWrapper from './icons/IconWrapper.svelte';

	export let pageUrl: string;
	$: currPage = pageUrl.slice(1);

	const btns = ['home', 'work', 'blog'];
	$: isDarkMode = true;

	function toggleMode() {
		isDarkMode = !isDarkMode;
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<aside class="fixed ml-[30%] mt-20 text-center">
	<IconWrapper
		on:click={toggleMode}
		on:keydown={toggleMode}
	>
		{#if isDarkMode}
			<LightBulbOff />
		{:else}
			<LightBulbOn />
		{/if}
	</IconWrapper>

	<nav class="flex flex-col">
		{#each btns as btnName}
			<NavBtn
				name={btnName}
				page={currPage}
			/>
		{/each}
	</nav>
</aside>
