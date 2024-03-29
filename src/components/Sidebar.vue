<script setup>
import {RouterLink, useRoute} from 'vue-router';
import {ref, watch} from 'vue';
import {routes} from '../router';

const route = useRoute();
const getFunctions = () =>
    routes
        .filter((r) => r.path.startsWith('/f/'))
        .map((r) => {
            r.isHome = routes.filter((r) => r.path === '/')[0].component === r.component;
            return r;
        });
const functions = ref(getFunctions());
const functionsFilter = ref(getFunctions());
const search = ref('');
const getClonedObject = (object) => JSON.parse(JSON.stringify(object));

watch(search, () => {
    if (search.value.trim() === '') {
        functionsFilter.value = getClonedObject(functions.value);
    } else {
        functionsFilter.value = getClonedObject(
            functions.value.filter((f) => f.name.trim().toLowerCase().includes(search.value.trim().toLowerCase()))
        );
    }
});
</script>

<template>
    <div class="flex items-center justify-between sm:hidden pt-2">
        <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
            <span class="sr-only">Open sidebar</span>
            <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
            </svg>
        </button>
        <RouterLink to="/" class="flex items-center space-x-1 mr-2">
            <div class="flex gap-1">
                <img src="@/assets/images/typescript.svg" class="h-6 sm:h-8" alt="TS" />
                <img src="@/assets/images/javascript.svg" class="h-6 sm:h-8" alt="JS" />
            </div>
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white"
                >Functions</span
            >
        </RouterLink>
    </div>

    <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow"
        aria-label="Sidenav"
    >
        <div
            class="overflow-y-auto py-5 px-3 h-full bg-gray-50 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        >
            <RouterLink to="/" class="hidden sm:flex items-center pl-2 mb-5 space-x-3">
                <div class="flex gap-1">
                    <img src="@/assets/images/typescript.svg" class="h-6 sm:h-8" alt="TS" />
                    <img src="@/assets/images/javascript.svg" class="h-6 sm:h-8" alt="JS" />
                </div>
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white"
                    >Functions</span
                >
            </RouterLink>
            <form class="flex items-center mb-4">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center px-3 pointer-events-none">
                        <svg
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="simple-search"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Search function"
                        required=""
                        v-model="search"
                    />
                </div>
            </form>
            <ul class="menu space-y-2">
                <li v-for="item in functionsFilter">
                    <RouterLink
                        :to="item.path"
                        :class="{
                            'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group': true,
                            'router-link-active': route.path === '/' && item.isHome
                        }"
                    >
                        <svg
                            class="w-[12px] h-[12px] text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 10 16"
                        >
                            <path
                                d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"
                            />
                        </svg>
                        <span class="ml-3">{{ item.name }}</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="absolute bottom-0 left-0 justify-center p-4 w-full z-20">
            <a
                href="https://github.com/dsabre"
                target="_blank"
                class="flex justify-between items-center p-2 my-4 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                <span class="sr-only">Show GitHub profile</span>
                <div class="flex items-center space-x-3">
                    <img src="https://github.com/dsabre.png" class="w-8 h-8 rounded-full" alt="Bonnie avatar" />
                    <div class="text-left">
                        <div class="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Daniele Sabre</div>
                    </div>
                </div>
            </a>
        </div>
    </aside>
</template>

<style scoped>
.menu .router-link-active {
    @apply bg-gray-100 dark:bg-gray-700;
}
</style>
