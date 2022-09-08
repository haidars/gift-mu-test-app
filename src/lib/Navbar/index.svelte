<script>
    import { page } from '$app/stores';

    $: ({
        url: { pathname },
    } = $page);

    $: console.log({ pathname });
</script>

<nav class="fixed left-0 right-0 top-0 z-10">
    <div
        class="w-full h-16 bg-stone-100 shadow-md flex items-center justify-end px-4"
    >
        <a
            href={pathname === '/' ? '/todos' : '/'}
            class="flex items-center justify-center bg-blue-500 ring-blue-300 ring-offset-white shadow-md px-3 py-2 rounded-3xl text-white transition-all duration-200 ease-in-out hover:bg-blue-400 focus:ring focus:ring-offset-2 active:ring active:ring-offset-0"
        >
            <span
                >{pathname === '/'
                    ? 'Try my To do list here'
                    : 'Home page'}</span
            >
        </a>
    </div>
</nav>
