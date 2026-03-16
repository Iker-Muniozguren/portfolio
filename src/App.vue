<script setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'
import { ArrowUpRightIcon } from '@heroicons/vue/16/solid'
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useTheme } from './composables/useTheme'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const showTooltipMessage = ref(false)

const { isDark, initTheme, toggleTheme } = useTheme()
onMounted(initTheme)

// Scroll to top when route changes
watch(() => route.path, () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

</script>

<template>

  <div class="background min-h-screen flex flex-col">
    <!-- Nav centrado arriba -->
    <header class="fixed left-1/2 transform -translate-x-1/2 z-10 pt-6 pb-4">
      <div class="flex justify-center items-center w-fit rounded-3xl backdrop-blur-md text-gray-700 dark:text-gray-100 text-xs sm:text-sm text-nowrap">
        <nav class="flex justify-center items-center sm:gap-3" role="navigation" aria-label="Navegación principal">


          <router-link
            to="/"
            class="relative p-3 rounded-xl hover:text-blue-400"
            :class="{ 'text-blue-400': $route.path === '/' }"
            :aria-current="$route.path === '/' ? 'page' : null"
          >Inicio</router-link>

          <router-link
            to="/projects"
            class="relative p-3 rounded-xl hover:text-purple-400"
            :class="{ 'text-purple-400': $route.path === '/projects' }"
            :aria-current="$route.path === '/projects' ? 'page' : null"
          >Proyectos</router-link>

          <router-link
            to="/about"
            class="relative p-3 rounded-xl hover:text-red-400"
            :class="{ 'text-red-400': $route.path === '/about' }"
            :aria-current="$route.path === '/about' ? 'page' : null"
          >Sobre mí</router-link>

          <a
            href="mailto:iker@ikermuni.dev"
            class="relative p-3 rounded-xl hover:text-green-600"
            @mouseover="showTooltipMessage = true"
            @mouseleave="showTooltipMessage = false"
            aria-label="Contactar por correo electrónico"
          >
            <transition name="genie">
              <div
                v-if="showTooltipMessage"
                class="absolute text-sm bg-white/40 dark:bg-black/40 flex p-1 pr-1.5 pl-1.5 rounded-lg text-gray-700 dark:text-gray-100 pointer-events-none justify-center items-center whitespace-nowrap -bottom-11 left-1/2 -translate-x-1/2 gap-1"
                role="tooltip"
                aria-live="polite"
              >
                <p class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-800 dark:text-gray-100">iker@ikermuni.dev <ArrowUpRightIcon class="h-4 w-4" /></p>
              </div>
            </transition>
            Contactar
          </a>

          <div class="bg-gray-400 block border border-gray-400/40 h-5 rounded-full" role="separator" aria-hidden="true"></div>



          <button
            @click="toggleTheme"
            class="p-3 rounded-xl hover:text-amber-400 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
            :aria-pressed="isDark.toString()"
            role="switch"
            tabindex="0"
          >
            <SunIcon v-if="isDark" class="w-5 h-5" aria-hidden="true" />
            <MoonIcon v-else class="w-5 h-5" aria-hidden="true" />
          </button>

        </nav>
      </div>
    </header>

    <main class="mt-20 flex-1">
      <RouterView v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <footer class="mt-auto flex justify-center items-center w-full rounded-3xl backdrop-blur-md px-3 text-gray-100">
      <p class="text-xs text-center font-light text-gray-500 py-4">© {{ new Date().getFullYear() }} Iker Muniozguren.
        Casi todos los derechos reservados.</p>
    </footer>

  </div>
</template>

<style>
/* Animación tipo macOS genie effect */
.genie-enter-active {
  animation: genie-in 0.2s ease-out;
}

.genie-leave-active {
  animation: genie-out 0.1s linear;
}

@keyframes genie-in {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes genie-out {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
}

/* Animación tipo macOS genie effect */
.fade-enter-active {
  animation: fade-in 0.5s ease-out;
}

.fade-leave-active {
  animation: fade-out 0.1s linear;
}

@keyframes fade-in {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
}
</style>