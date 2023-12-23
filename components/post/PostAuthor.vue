<template>
  <div class="flex items-center">
    <NuxtLink to="/">
      <div class="relative">
        <img :src="photoUrl" alt="" class="w-6 h-6 rounded-full" />
      </div>
    </NuxtLink>
    <div class="ml-2 flex">
      <NuxtLink to="/">
        <p class="max-h-5 line-clamp-1 text-sm">
          {{ author }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  author: string;
  photoUrl: string;
}

const { author, photoUrl } = defineProps<Props>();
</script>

<style scoped></style>
