<template>
    <div class="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:py-14">

        <div class="mb-10 border-b border-black/10 dark:border-white/10 pb-8 ">
            <p class="mb-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-purple-400">Portfolio</p>
            <h1 class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl ">Proyectos</h1>
            <p class="mt-3 text-base font-light text-gray-500 dark:text-gray-400 ">Una selección de proyectos que he desarrollado.</p>
        </div>

        <div class="flex flex-col gap-5">
            <Proyecto
                :index="1"
                name="Dividir"
                desc="Aplicación web para dividir gastos de forma justa entre varias personas. Calcula cuánto debe pagar cada persona teniendo en cuenta qué productos comparte cada una, evitando errores de redondeo típicos."
                image="/dividir.png"
                github="https://github.com/Iker-Muniozguren/dividir.git"
                demo="https://iker-muniozguren.github.io/dividir/"
                :stack="['HTML', 'JavaScript', 'CSS']"
                date="2024"
            />
            <Proyecto
                :index="2"
                name="Txurdinaga Gizarte Etxea (ficticio)"
                desc="Aplicación web para gestionar el Centro Cívico de Txurdinaga, con funcionalidad de reservas para los usuarios y tablas CRUD para los administradores. Incluye chat de IA que puede hacer reservas por ti."
                image="/txurdi.png"
                github="https://github.com/2526-2DW3-TGE/T2-TGE.git"
                :stack="['Laravel', 'Vue', 'MySQL', 'IA']"
                date="2025"
            />
            <Proyecto
                :index="3"
                name="MyFirstMod (mod de Minecraft)"
                desc="Este mod no añade contenido nuevo al juego. Es un mod de prueba creado siguiendo la plantilla oficial de Minecraft Forge, con el objetivo de entender la estructura básica de un mod: cómo se registra, cómo funciona el ciclo de vida del mod y cómo se configura el entorno de desarrollo."
                image="/mod.png"
                github="https://github.com/Iker-Muniozguren/MyFirstMod.git"
                :stack="['Java', 'Forge']"
                date="2026"
            />
        </div>

    </div>
</template>

<script setup>
import Proyecto from '../components/Proyecto.vue'
</script>