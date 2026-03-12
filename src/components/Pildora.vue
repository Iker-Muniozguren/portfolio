<script setup>

defineProps({
    text: {
        type: String,
        required: true
    },
    icon: {
        type: Object,
        default: null
    }
})

</script>

<template>
    <span class="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium bg-gray-400/10 hover:bg-gray-400/20 border border-gray-400/20 text-gray-100/50! outfit-700">
        <component v-if="icon" :is="icon" class="w-4 h-4 fill-gray-100/50" />
        {{ text }}
    </span>
</template>

<style scoped></style>
