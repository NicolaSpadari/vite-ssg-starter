<route>
{
    name: "Home"
}
</route>

<template>
	<div class="container text-center mt-20">
		<p class="text-3xl mb-4">
			This page is: {{ $route.name }}
		</p>

		<button @click="current++">
			next
		</button>

		<div>
			{{ res }}
		</div>
	</div>
</template>

<script lang="ts" setup>
	const current = ref<number>(1);
	const endpoint = "https://jsonplaceholder.typicode.com/posts";
	const res = ref<string>();

	useHead({
		title: String(useRoute().name),
		meta: [
			{
				name: "description",
				content: "Homepage description"
			}
		]
	});

	const fetcher = async(url: string) => {
		const { data } = await axios.get(url);
		res.value = data;
	};

	watch(current, (val) => {
		fetcher(`${endpoint}/${current.value}`);
	});

	// if (!res.value) {
	// 	fetcher(`${endpoint}/${current.value}`);
	// }

	onServerPrefetch(async() => {
		await fetcher(`${endpoint}/${current.value}`);
	});

</script>
