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
		return '';
	}
</script>

<a
	href={parseRoute()}
	class={`rounded-md py-2 px-4 text-left font-bold capitalize text-gray-400 ${isCurrentPage()} hover:text-white`}
>
	{name}
</a>
