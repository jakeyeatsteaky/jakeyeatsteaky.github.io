<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<script>
	let numbers = $state([1, 2, 3, 4]);
	let summed = $derived(numbers.reduce((x,y) => x+y))
	
	function addNumber() {
		let length = numbers.length;
		numbers.push(numbers.length + 1);
    }

</script>

<p>{numbers.join(' + ')} = {summed}</p>

<button onclick={addNumber}>
	Add a number
</button>


