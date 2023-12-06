<template>
  <TheHero />
  <TheTrendingPosts />
  <div class="pt-14 border-t-slate-100 border-t">
    <div class="container mx-auto">
      <div class="grid-cols-12 grid">
        <section class="row-start-1 col-start-1 col-span-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
          et, error perferendis, quos totam aliquid laboriosam voluptatum
          maiores iusto ad quasi eligendi unde eaque incidunt quaerat magni
          provident sint!
        </section>
        <aside class="row-start-1 col-start-9 col-span-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          similique explicabo a unde, nihil voluptatum dignissimos, ad ab
          consequatur quibusdam quod cum velit placeat quaerat sed vel. Ducimus,
          dolorem cumque.
        </aside>
        <div class="min-h-screen"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTrendingPosts from "~/components/main/TheTrendingPosts.vue";
import TheHero from "../components/main/TheHero.vue";
</script>

<style scoped></style>
