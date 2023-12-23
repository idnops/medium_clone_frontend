<template>
  <div class="flex items-center">
    <div class="px-0.5">
      <p class="text-sm text-neutral-500">in</p>
    </div>
    <NuxtLink to="/">
      <p class="max-h-5 line-clamp-1 text-sm">
        {{ community }}
      </p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Props {
  community: string;
}

const { community } = defineProps<Props>();
</script>

<style scoped></style>
