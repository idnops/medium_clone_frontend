<template>
  <div class="py-6 flex flex-wrap">
    <div class="mr-1.5" v-for="link in links">
      <NuxtLink to="/">
        <p class="leading-4 text-neutral-500 text-[11px]">{{ link.name }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Link {
  name: string;
  url: string;
}
interface Props {
  links: Link[];
}

const { links } = defineProps<Props>();
</script>
