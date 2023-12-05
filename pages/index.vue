<template>
  <TheHero />
  <TheTrendingPosts />
  <div class="min-h-screen p-36 flex flex-col gap-2"></div>
</template>

<script setup lang="ts">
import TheTrendingPosts from "~/components/main/TheTrendingPosts.vue";
import TheHero from "../components/main/TheHero.vue";
</script>

<style scoped></style>
