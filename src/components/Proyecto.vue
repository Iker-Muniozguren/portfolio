<script setup>

defineProps({
    index: {
        type: Number,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    github: {
        type: String,
        default: null
    },
    demo: {
        type: String,
        default: null
    },
    stack: {
        type: Array,
        default: () => []
    },
    date: {
        type: String,
        default: null
    }
})

</script>

<template>
    <article
        class="group w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 shadow-lg shadow-white/30 dark:shadow-black/30 backdrop-blur-sm hover:-translate-y-0.5 hover:border-gray-300 dark:hover:border-white/20 ">

        <!-- Header -->
        <div class="flex items-center justify-between border-b border-black/10 dark:border-white/10 px-6 py-4 ">
            <div class="flex min-w-0 items-center gap-3">
                <span v-if="index !== null"
                    class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 font-mono text-xs text-gray-400 dark:text-gray-500 ">
                    {{ String(index).padStart(2, '0') }}
                </span>
                <h2 class="truncate text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-xl ">{{ name }}</h2>
                <span v-if="date" class="shrink-0 font-mono text-xs text-gray-400 dark:text-gray-500 ">{{ date }}</span>
            </div>
            <div class="ml-4 flex shrink-0 gap-2">
                <a v-if="github" :href="github" target="_blank" rel="noopener noreferrer"
                    class="inline-flex h-8 items-center rounded-lg border border-emerald-500/40 text-emerald-700 dark:border-emerald-300/25 bg-emerald-400/10 dark:text-emerald-200 px-3 text-xs font-medium hover:bg-emerald-400/20 dark:hover:bg-emerald-400/30 ">
                    GitHub
                </a>
                <a v-if="demo" :href="demo" target="_blank" rel="noopener noreferrer"
                    class="inline-flex h-8 items-center rounded-lg border border-cyan-500/40 text-cyan-700 dark:border-cyan-300/25 bg-cyan-400/10 dark:text-cyan-200 px-3 text-xs font-medium hover:bg-cyan-400/20 dark:hover:bg-cyan-400/30 ">
                    Demo
                </a>
            </div>
        </div>

        <!-- Body -->
        <div class="grid md:grid-cols-[minmax(0,1fr)_360px]">

            <!-- Description + stack -->
            <div class="flex flex-col justify-between gap-6 p-6">
                <p v-if="desc" class="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base ">{{ desc }}</p>
                <div v-if="stack && stack.length" class="flex flex-wrap gap-1.5">
                    <span v-for="tag in stack" :key="tag"
                        class="rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 ">
                        {{ tag }}
                    </span>
                </div>
            </div>

            <!-- Image -->
            <div v-if="image" class="border-t border-black/10 dark:border-white/10 md:border-l md:border-t-0 ">
                <img :src="image" :alt="name"
                    class="h-full max-h-56 w-full object-cover object-top opacity-80 transition-opacity duration-300 group-hover:opacity-100 md:max-h-full" />
            </div>

        </div>
    </article>
</template>

<style scoped></style>
