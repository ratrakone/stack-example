<script>
    import { Link } from "@inertiajs/svelte";
    import axios from "axios";

    let list = $state([
        {
            name: "John Doe",
            age: 30,
        },
        {
            name: "Jane Smith",
            age: 25,
            greeting: async () => {
                try {
                    const res = await axios.get(route("bar"));
                    console.log(res.data);
                } catch (e) {
                    console.error(e);
                }
            },
        },
    ]);
</script>

{#each list as item}
    <div>
        <h2>{item.name}</h2>
        <p>Age: {item.age}</p>
    </div>
{/each}

<Link href={route("foo")}>To foo</Link>
<br />
<button onclick={() => list[1].greeting()}>Greet Jane</button>
