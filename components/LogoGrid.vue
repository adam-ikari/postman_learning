<script setup lang="ts">
defineProps({
  logos: {
    type: Array as () => Array<{ name: string, url: string }>,
    required: true
  }
})
</script>

<template>
  <div grid="~ cols-6 gap-4" class="gap-y-8">
    <div v-for="(logo, index) in logos" :key="index" class="text-center">
      <img :src="logo.url" class="h-8 mx-auto" :alt="logo.name" />
    </div>
  </div>
</template>

<style scoped>
</style>