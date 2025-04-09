<script>
    import { Link } from "@inertiajs/svelte";
    import axios from "axios";

    let { list } = $props();
    let _list = $state(list);

    const init = () => {
        for (const item of _list) {
            item.actions = {};
            item.actions.greeting = (name) => {
                console.log(`Hello ${name}, I am ${item.name}`);
            };
        }
    };

    init();
</script>

{#each _list as item}
    <div>
        <h2>{item.name}</h2>
        <p>Age: {item.age}</p>
    </div>
{/each}

<Link href={route("foo")}>To foo</Link>
<br />
<button onclick={() => _list[1].actions.greeting("sam")}>Greet Jane</button>
