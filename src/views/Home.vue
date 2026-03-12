<template>
  <div class="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:py-14">
    <div class="mb-8 border-b border-black/10 dark:border-white/10 pb-8 ">
      <p class="mb-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-blue-400">Portfolio personal</p>
      <div class="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
        <h1 class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl ">
          Hola, soy Iker
        </h1>
        <div class="inline-flex items-center gap-2 rounded-full border border-gray-400/10 dark:border-white/10 bg-gray-400/5 dark:bg-white/5 px-3 py-1.5 ">
          <span class="relative inline-flex h-2.5 w-2.5 items-center justify-center">
            <span v-if="isAvailableForWork"
              class="absolute inset-0 rounded-full bg-emerald-400/70 animate-radar-slow"></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full"
              :class="isAvailableForWork ? 'bg-emerald-400' : 'bg-red-400'"></span>
          </span>
          <p class="text-sm font-medium text-gray-700 dark:text-gray-200 "
            :class="isAvailableForWork ? 'text-emerald-400!' : 'text-red-400!'">
            {{ isAvailableForWork ? 'Disponible para trabajar' : 'No disponible' }}
          </p>
        </div>
      </div>
      <p class="mt-3 max-w-3xl text-base font-light text-gray-600 dark:text-gray-300 sm:text-lg ">
        Desarrollador fullstack centrado en aplicaciones web de gestion, productos claros y experiencias rapidas para
        usuarios reales.
      </p>

    </div>

    
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ArrowUpRightIcon } from '@heroicons/vue/16/solid'
import { useProfileStore } from '../stores/profile'

const profileStore = useProfileStore()
const { isAvailableForWork } = storeToRefs(profileStore)
</script>

<style scoped>
.animate-radar-slow {
  transform-origin: center;
  animation: radar-slow 3s cubic-bezier(0, 0, 0, 1) infinite;
}

@keyframes radar-slow {

  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>