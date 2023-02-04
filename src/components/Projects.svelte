<script lang="ts">
	import { projectData } from '../../public/data/projectData';
</script>

<section id="work">
	<ul>
		{#each projectData as { title, stack }}
			<li class="mb-2 flex justify-between border-b-2 pb-2">
				{title}
				<div class="flex gap-1">
					{#each stack as tech}
						<p class="rounded-full bg-neutral-700 px-2 font-light">{tech}</p>
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</section>
