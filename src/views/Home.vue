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
        Desarrollador fullstack especializado en páginas web de gestión, landing pages, webs corporativas y soluciones digitales a medida. Mi objetivo es aportar valor a cualquier tipo de proyecto, optimizando procesos y mejorando la presencia digital de empresas y profesionales.
      </p>
    </div>

    <!-- Servicios principales -->
    <section class="mb-8 grid gap-6 md:grid-cols-3">
      <div class="rounded-2xl border border-blue-400/20 bg-white/40 dark:bg-black/40 p-6 flex flex-col items-center text-center shadow">
        <h2 class="text-lg font-semibold text-blue-500 mb-2">Desarrollo web</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300">Aplicaciones a medida para digitalizar y automatizar procesos empresariales: reservas, paneles, CRM, ERP, etc.</p>
      </div>
      <div class="rounded-2xl border border-emerald-400/20 bg-white/40 dark:bg-black/40 p-6 flex flex-col items-center text-center shadow">
        <h2 class="text-lg font-semibold text-emerald-500 mb-2">Integración y automatización</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300">Conecto tus sistemas y automatizo tareas repetitivas usando APIs, n8n y agentes de IA para ahorrar tiempo y reducir errores.</p>
      </div>
      <div class="rounded-2xl border border-purple-400/20 bg-white/40 dark:bg-black/40 p-6 flex flex-col items-center text-center shadow">
        <h2 class="text-lg font-semibold text-purple-500 mb-2">Soporte y evolución</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300">Acompaño el crecimiento de tu proyecto con soporte técnico, mejoras continuas y formación personalizada.</p>
      </div>
    </section>

    <!-- Tecnologías destacadas
    <section class="mb-8">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">Tecnologías que domino</h2>
      <div class="flex flex-wrap gap-3">
        <span class="rounded-md border border-sky-500/30 text-sky-700 dark:border-sky-300/20 bg-sky-300/10 dark:text-sky-100 px-3 py-1 text-xs font-medium">HTML</span>
        <span class="rounded-md border border-sky-500/30 text-sky-700 dark:border-sky-300/20 bg-sky-300/10 dark:text-sky-100 px-3 py-1 text-xs font-medium">CSS</span>
        <span class="rounded-md border border-sky-500/30 text-sky-700 dark:border-sky-300/20 bg-sky-300/10 dark:text-sky-100 px-3 py-1 text-xs font-medium">JavaScript</span>
        <span class="rounded-md border border-emerald-500/30 text-emerald-700 dark:border-emerald-300/20 bg-emerald-300/10 dark:text-emerald-100 px-3 py-1 text-xs font-medium">Vue</span>
        <span class="rounded-md border border-emerald-500/30 text-emerald-700 dark:border-emerald-300/20 bg-emerald-300/10 dark:text-emerald-100 px-3 py-1 text-xs font-medium">Tailwind CSS</span>
        <span class="rounded-md border border-emerald-500/30 text-emerald-700 dark:border-emerald-300/20 bg-emerald-300/10 dark:text-emerald-100 px-3 py-1 text-xs font-medium">Laravel</span>
        <span class="rounded-md border border-cyan-500/30 text-cyan-700 dark:border-cyan-300/20 bg-cyan-300/10 dark:text-cyan-100 px-3 py-1 text-xs font-medium">MySQL</span>
        <span class="rounded-md border border-black/10 bg-black/5 text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 px-3 py-1 text-xs font-medium">n8n</span>
        <span class="rounded-md border border-black/10 bg-black/5 text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 px-3 py-1 text-xs font-medium">Git</span>
        <span class="rounded-md border border-black/10 bg-black/5 text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 px-3 py-1 text-xs font-medium">Docker</span>
      </div>
    </section> -->

    <!-- Llamada a la acción -->
    <section class="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
      <router-link to="/projects" class="inline-block rounded-xl border border-purple-600 bg-purple-500/30 hover:bg-purple-600 text-white px-6 py-3 font-semibold shadow transition">Ver proyectos destacados</router-link>
      <router-link to="/about" class="inline-block rounded-xl border border-red-600 bg-red-500/30 hover:bg-red-600 text-white px-6 py-3 font-semibold shadow transition">Conocer más sobre mí</router-link>
      <a href="mailto:imuniozguren04@gmail.com" class="inline-block rounded-xl border border-green-600 bg-green-500/30 hover:bg-green-600 text-white px-6 py-3 font-semibold shadow transition">Solicitar presupuesto o contacto</a>
    </section>

  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
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