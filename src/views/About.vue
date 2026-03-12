<template>
  <div class="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:py-14">
    <div class="mb-10 border-b border-black/10 dark:border-white/10 pb-8 ">
      <p class="mb-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-red-400">Perfil profesional</p>
      <h1 class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl ">Sobre mí</h1>
      <p class="mt-3 text-base font-light text-gray-500 dark:text-gray-400 ">Desarrollo de aplicaciones web de gestión con foco en claridad, escalabilidad y experiencia de usuario.</p>
    </div>

    <div class="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
      <aside class="overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-sm lg:sticky lg:top-24 lg:h-fit ">
        <div class="relative">
          <img src="/iker_en_clase.jpg" alt="Iker en clase" class="h-64 w-full object-cover object-center" />
          <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-4 py-3">
            <p class="text-xs text-gray-200">Repaso para el examen de Desarrollo en Entorno Servidor</p>
          </div>
        </div>

        <div class="space-y-4 p-5">
          <div>
            <h2 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 ">Iker Muniozguren</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">Desarrollador fullstack</p>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div class="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 ">
              <p class="font-mono text-[11px] uppercase tracking-wide text-gray-400 dark:text-gray-500 ">Edad</p>
              <p class="text-sm font-medium text-gray-700 dark:text-gray-200 ">{{ calculateAge }} años</p>
            </div>
            <div class="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 ">
              <p class="font-mono text-[11px] uppercase tracking-wide text-gray-400 dark:text-gray-500 ">Ubicación</p>
              <p class="text-sm font-medium text-gray-700 dark:text-gray-200 ">Galdakao</p>
            </div>
            <div class="col-span-2 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-2 ">
              <p class="font-mono text-[11px] uppercase tracking-wide text-gray-400 dark:text-gray-500 ">Estado</p>
              <p class="text-sm font-medium text-gray-700 dark:text-gray-200 ">Formación y proyectos reales</p>
            </div>
          </div>
        </div>
      </aside>

      <div class="flex flex-col gap-5">
        <section class="overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-sm ">
          <div class="border-b border-black/10 dark:border-white/10 px-6 py-4 ">
            <h2 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50 ">Resumen</h2>
          </div>
          <div class="space-y-4 p-6">
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base ">Soy un desarrollador fullstack con experiencia en aplicaciones web de gestión, landing pages y soluciones digitales orientadas a negocio.</p>
            <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-400 sm:text-base ">Trabajo tanto en frontend como en backend y tengo experiencia con automatización de procesos usando n8n y agentes de inteligencia artificial.</p>
          </div>
        </section>

        <section class="overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-sm ">
          <div class="border-b border-black/10 dark:border-white/10 px-6 py-4 ">
            <h2 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50 ">Educación</h2>
          </div>
          <div class="p-6">
            <article class="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 ">
              <p class="font-mono text-xs text-gray-400 dark:text-gray-500 ">2024 - 2026</p>
              <h3 class="mt-1 text-base font-medium text-gray-800 dark:text-gray-100 ">Grado Superior en Desarrollo de Aplicaciones Web (DAW)</h3>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 ">Formación centrada en desarrollo web, bases de datos, APIs y despliegue de aplicaciones.</p>
            </article>
          </div>
        </section>

        <section class="overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-sm ">
          <div class="border-b border-black/10 dark:border-white/10 px-6 py-4 ">
            <h2 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50 ">Experiencia laboral</h2>
          </div>
          <div class="p-6">
            <article class="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-4 ">
              <p class="font-mono text-xs text-gray-400 dark:text-gray-500 ">3 meses</p>
              <h3 class="mt-1 text-base font-medium text-gray-800 dark:text-gray-100 inline-flex items-center gap-2 "><img src="/logo-veolia.png" alt="Logo Veolia" class="w-4 h-4"> Veolia - Desarrollo de plataformas web y app móvil</h3>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 ">Experiencia en Veolia, multinacional de referencia en servicios medioambientales (agua, residuos y energía), participando en la evolución de su web interna, su web externa y su aplicación móvil, con contribuciones en frontend y backend orientadas a mejorar funcionalidad, mantenibilidad y experiencia de usuario.</p>
            </article>
          </div>
        </section>

        <section class="overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-sm ">
          <div class="border-b border-black/10 dark:border-white/10 px-6 py-4 ">
            <h2 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50 ">Tecnologías</h2>
          </div>
          <div class="space-y-5 p-6">
            <div>
              <p class="mb-2 font-mono text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 ">Domino</p>
              <div class="space-y-2">
                <div v-for="(group, index) in masteredGroups" :key="`mastered-${index}`" class="flex flex-wrap gap-2">
                  <span v-for="tech in group.items" :key="tech" class="rounded-md px-2.5 py-1 text-xs font-medium" :class="group.className">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p class="mb-2 font-mono text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500 ">Tengo conocimientos de</p>
              <div class="space-y-2">
                <div v-for="(group, index) in baseGroups" :key="`base-${index}`" class="flex flex-wrap gap-2">
                  <span v-for="tech in group.items" :key="tech" class="rounded-md px-2.5 py-1 text-xs font-medium" :class="group.className">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-sm ">
          <div class="border-b border-black/10 dark:border-white/10 px-6 py-4 flex items-center justify-between ">
            <h2 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50 ">Contacto</h2>
            <div class="inline-flex items-center gap-2 rounded-full px-3 py-1.5">
              <span class="relative inline-flex h-2.5 w-2.5 items-center justify-center">
                <span
                  v-if="isAvailableForWork"
                  class="absolute inset-0 rounded-full bg-emerald-400/70 animate-radar-slow"
                ></span>
                <span class="relative inline-flex h-2.5 w-2.5 rounded-full" :class="isAvailableForWork ? 'bg-emerald-400' : 'bg-red-400'"></span>
              </span>
              <p class="text-sm font-medium text-gray-700 dark:text-gray-200 " :class="isAvailableForWork ? 'text-emerald-400!' : 'text-red-400!'">{{ isAvailableForWork ? 'Disponible para trabajar' : 'No disponible' }}</p>
            </div>
          </div>
          <div class="space-y-4 p-6">
            <div class="grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:imuniozguren04@gmail.com"
                class="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-1 dark:hover:bg-green-600 hover:bg-green-400 text-center group "
              >
                <p class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-800 dark:text-gray-100 group-hover:text-gray-100 ">imuniozguren04@gmail.com <ArrowUpRightIcon class="h-4 w-4" /></p>
              </a>
              <a
                href="https://github.com/Iker-Muniozguren"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-1 dark:hover:bg-black/50 hover:bg-black/70 text-center group "
              >
                <p class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-800 dark:text-gray-100 group-hover:text-gray-100 ">Github <ArrowUpRightIcon class="h-4 w-4" /></p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { ArrowUpRightIcon } from '@heroicons/vue/16/solid'
import { useProfileStore } from '../stores/profile'

const profileStore = useProfileStore()
const { isAvailableForWork } = storeToRefs(profileStore)

const masteredGroups = [
  {
    items: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    className: 'border border-sky-500/30 text-sky-700 dark:border-sky-300/20 bg-sky-300/10 dark:text-sky-100 '
  },
  {
    items: ['Vue', 'Tailwind CSS', 'Laravel'],
    className: 'border border-emerald-500/30 text-emerald-700 dark:border-emerald-300/20 bg-emerald-300/10 dark:text-emerald-100 '
  },
  {
    items: ['MySQL'],
    className: 'border border-cyan-500/30 text-cyan-700 dark:border-cyan-300/20 bg-cyan-300/10 dark:text-cyan-100 '
  },
  {
    items: ['Git', 'Docker', 'n8n', 'GitHub Actions', 'Docker Compose', 'Agentes con IA'],
    className: 'border border-black/10 bg-black/5 text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 '
  }
]

const baseGroups = [
  {
    items: ['Java', 'Linux', 'AWS'],
    className: 'border border-amber-400/50 bg-amber-300/10 text-amber-700 dark:border-amber-300/20 dark:text-amber-100 '
  }
].filter(group => group.items.length > 0)

const calculateAge = computed(() => {
  const birthDate = new Date(2004, 8, 27)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
})
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