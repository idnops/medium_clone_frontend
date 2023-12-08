<template>
  <div class="w-[316px]">
    <ul class="flex flex-col items-stretch">
      <div class="mt-[25px]">
        <div class="px-5">
          <div class="pb-2 border-b border-neutral-100">
            <p
              class="uppercase tracking-[0.077em] text-[13px] leading-[18px] text-neutral-600"
            >
              recent searches
            </p>
          </div>
        </div>
        <div class="mx-5 mb-4">
          <div class="mt-3" v-for="n in 2" :key="n">
            <div class="flex items-center">
              <div class="flex-auto">
                <NuxtLink to="/">
                  <div class="flex items-center">
                    <div class="mr-[15px] flex-[0_0_auto]">
                      <Icon
                        name="circum:search"
                        size="24"
                        class="text-neutral-600"
                      />
                    </div>
                    <p
                      class="max-h-5 break-all line-clamp-1 text-sm tracking-normal"
                    >
                      some seach query
                    </p>
                  </div>
                </NuxtLink>
              </div>
              <div class="flex-[0_0_auto]">
                <div class="ml-2">
                  <button>
                    <Icon
                      name="iconamoon:close-thin"
                      size="24"
                      class="text-neutral-600 hover:text-neutral-800"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-b border-neutral-100"></div>
      </div>
      <div class="px-5 py-4 text-sm">
        <NuxtLink to="/">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <ExploreIcon class="text-neutral-500" />
              <p class="ml-[15px]">Explore topics</p>
            </div>
            <div class="mr-1">
              <Icon
                name="solar:arrow-right-up-linear"
                size="18"
                class="text-neutral-500"
              />
            </div>
          </div>
        </NuxtLink>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ExploreIcon from "./icons/ExploreIcon.vue";
</script>

<style scoped></style>
