<template>
  <TheHero />
  <TheTrendingPosts />
  <div class="min-h-screen p-36 flex flex-col gap-2">
    <span class="text-xs font-extralight">Lorem ipsum dolor sit amet.</span>
    <span class="text-xs font-light">Lorem ipsum dolor sit amet.</span>
    <span class="text-xs font-normal">Lorem ipsum dolor sit amet.</span>
    <span class="text-xs font-medium">Lorem ipsum dolor sit amet.</span>
    <span class="text-xs font-semibold">Lorem ipsum dolor sit amet.</span>
  </div>
</template>

<script setup lang="ts">
import TheTrendingPosts from "~/components/main/TheTrendingPosts.vue";
import TheHero from "../components/main/TheHero.vue";
</script>

<style scoped></style>
