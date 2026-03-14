<template>
    <div class="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:py-14">

        <div class="mb-10 border-b border-black/10 dark:border-white/10 pb-8 ">
            <p class="mb-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-purple-400">Portfolio</p>
            <h1 class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl ">Proyectos
            </h1>
            <p class="mt-3 text-base font-light text-gray-500 dark:text-gray-400 ">Una selección de proyectos que he
                desarrollado.</p>
        </div>

        <div class="flex flex-col gap-5">
            <div class="flex flex-col justify-center items-center gap-2 md:flex-row md:items-center md:justify-between">
                <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <input type="text" v-model="search" placeholder="Buscar proyectos..."
                        class="bg-white/40 dark:bg-black/40 text-gray-500 dark:text-gray-400 placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-black/10 dark:border-white/10 focus:ring-1 focus:ring-blue-500 focus:outline-none px-3 py-2 rounded-xl">

                    <div ref="selectRef">
                        <p class="w-full bg-white/40 dark:bg-black/40 text-gray-500 dark:text-gray-400 border border-black/10 dark:border-white/10 px-3 py-2 rounded-xl inline-flex items-center justify-between gap-2 cursor-pointer select-none relative text-nowrap"
                            :class="{ 'ring-1 ring-blue-500 outline-none': showSelect }"
                            @click="showSelect = !showSelect">
                            {{ selectedStack }}
                            <ChevronDownIcon v-if="!showSelect"
                                class="w-5 h-5 text-gray-500 dark:text-gray-400 pointer-events-none" />
                            <ChevronUpIcon v-else
                                class="w-5 h-5 text-gray-500 dark:text-gray-400 pointer-events-none" />
                        </p>
                        <transition enter-active-class="transition ease-out duration-300"
                            enter-from-class="-translate-y-10" enter-to-class="translate-y-0" leave-active-class=""
                            leave-from-class="" leave-to-class="">
                            <div v-if="showSelect"
                                class="overflow-hidden absolute mt-1 rounded-2xl shadow-lg z-2 w-50 max-h-80">
                                <div
                                    class="bg-white/40 dark:bg-black/40 backdrop-blur-2xl max-h-80 overflow-y-auto custom-scroll">
                                    <ul class="">
                                        <li @click="selectedStack = 'Todas las tecnologías'; showSelect = false"
                                            class="cursor-pointer transition-none px-3 py-2 hover:bg-gray-200 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400">
                                            Todas las tecnologías
                                        </li>
                                        <li v-for="stack in stackOptions" :key="stack"
                                            @click="selectedStack = stack; showSelect = false"
                                            class="cursor-pointer transition-none px-3 py-2 hover:bg-gray-200 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400">
                                            {{ stack }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <button @click="ordenDesc = !ordenDesc"
                        class="w-full cursor-pointer md:w-auto bg-white/40 dark:bg-black/40 text-gray-500 dark:text-gray-400 border border-black/10 dark:border-white/10 px-3 py-2 rounded-xl inline-flex items-center justify-center gap-2">
                        <ArrowDownIcon v-if="ordenDesc" class="w-5 h-5" />
                        <ArrowUpIcon v-else class="w-5 h-5" />
                    </button>
                </div>

                <p v-if="proyectosFiltrados.length > 1" class="text-sm text-gray-500 dark:text-gray-400">
                    {{ proyectosFiltrados.length }} proyectos encontrados
                </p>
                <p v-else-if="proyectosFiltrados.length === 1" class="text-sm text-gray-500 dark:text-gray-400">
                    1 proyecto encontrado
                </p>
                <p v-else class="text-sm text-gray-500 dark:text-gray-400">
                    No se encontraron proyectos
                </p>
            </div>

            <Proyecto v-for="(proyecto, idx) in proyectosFiltrados" :key="proyecto.id" :index="idx + 1"
                :name="proyecto.name" :desc="proyecto.desc" :image="proyecto.image" :github="proyecto.github"
                :demo="proyecto.demo" :stack="proyecto.stack" :date="proyecto.date" />
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
import axios from 'axios'
import Proyecto from '../components/Proyecto.vue'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/16/solid'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/24/solid'

const proyectos = ref([])
const search = ref('')
const selectedStack = ref('Todas las tecnologías')
const showSelect = ref(false)
const selectRef = ref(null)
const ordenDesc = ref(true)

const stackOptions = computed(() => {
    const stacks = new Set()
    proyectos.value.forEach(proyecto => {
        proyecto.stack.forEach(tech => stacks.add(tech))
    })
    return Array.from(stacks).sort()
})


const proyectosFiltrados = computed(() => {
    return proyectos.value
        .filter(proyecto => {
            const matchesSearch = proyecto.name.toLowerCase().includes(search.value.toLowerCase()) ||
                proyecto.desc.toLowerCase().includes(search.value.toLowerCase())
            const matchesStack = selectedStack.value === 'Todas las tecnologías' || proyecto.stack.includes(selectedStack.value)
            return matchesSearch && matchesStack
        })
        .sort((a, b) => {
            if (a.date !== b.date) {
                return ordenDesc.value ? b.date - a.date : a.date - b.date
            }
            return ordenDesc.value ? b.id - a.id : a.id - b.id
        })
})

const handleClickOutside = (event) => {
    if (selectRef.value && !selectRef.value.contains(event.target)) {
        showSelect.value = false;
    }
};

const dataProjects = async () => {
    try {
        const res = await axios.get('/projects.json')
        proyectos.value = res.data
    } catch (e) {
        console.error('Error cargando proyectos:', e)
    }
}

onMounted(() => {
    dataProjects()
    document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
});
</script>