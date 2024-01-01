<template>
  <div class="mt-10">
    <div class="mb-[22px]">
      <NuxtLink :to="url">
        <h2 class="font-medium text-neutral-800 leading-5">
          {{ title }}
        </h2>
      </NuxtLink>
    </div>
    <slot />

    <p class="text-green-600 hover:text-neutral-800 text-[13px] leading-5">
      <NuxtLink :to="url"> {{ link }}</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  url: string;
  link: string;
}

const { title, url, link } = defineProps<Props>();
</script>
