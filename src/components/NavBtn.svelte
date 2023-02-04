<script lang="ts">
	export let name: string;
	export let page: string;

	function parseRoute() {
		if (name === 'home') return '/';
		return `/${name}`;
	}

	function isCurrentPage(): string {
		if (name === page) return 'bg-basegray text-white';
		if (name === 'home' && page === '') return 'bg-basegray text-white';
		return 'text-gray-400';
	}
</script>

<a
	href={parseRoute()}
	class={`rounded-md py-2 px-4 text-left font-extraboldbold capitalize font-medium ${isCurrentPage()} hover:text-white`}
>
	{name}
</a>
