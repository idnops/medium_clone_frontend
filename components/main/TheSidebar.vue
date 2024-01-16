<template>
  <div class="sticky top-[107px]">
    <div class="border-b border-neutral-100 pb-8">
      <div>
        <div class="pb-4">
          <h2 class="font-medium tracking-normal leading-5">
            Discover more of what matters to you
          </h2>
        </div>
        <div class="flex flex-wrap items-start">
          <div class="flex mb-[10px]" v-for="(tag, i) in tags" :key="i">
            <NuxtLink to="/" class="mr-2">
              <div
                class="border border-neutral-100 rounded-full bg-neutral-100 px-4 py-2 text-sm"
              >
                {{ tag }}
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="mt-[14px]">
          <p class="text-green-600 text-sm">
            <NuxtLink to="/"> See more topics </NuxtLink>
          </p>
        </div>
      </div>
    </div>
    <div class="py-6 flex flex-wrap">
      <div class="mr-[26px] mb-2" v-for="(link, i) in links" :key="i">
        <NuxtLink :to="link.url" class="text-sm text-neutral-500">{{
          link.name
        }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  tags: string[];
  links: Link[];
}

interface Link {
  name: string;
  url: string;
}

const { tags, links } = defineProps<Props>();
</script>

<style scoped></style>
