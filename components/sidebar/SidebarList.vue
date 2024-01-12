<template>
  <div class="mt-10">
    <div class="mb-[22px]">
      <NuxtLink :to="url" v-if="isTitleLink">
        <h2 class="font-medium text-neutral-800 leading-5">
          {{ title }}
        </h2>
      </NuxtLink>
      <h2 class="font-medium text-neutral-800 leading-5" v-else>
        {{ title }}
      </h2>
    </div>
    <slot />

    <p
      class="text-green-600 hover:text-neutral-800 text-sm leading-5"
      v-if="actionText"
    >
      <NuxtLink :to="url"> {{ actionText }}</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  isTitleLink?: boolean;
  url?: string;
  actionText?: string;
}

const { title, isTitleLink, url, actionText } = withDefaults(
  defineProps<Props>(),
  {
    isTitleLink: false,
  }
);
</script>
