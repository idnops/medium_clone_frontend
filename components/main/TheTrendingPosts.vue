<template>
  <div class="border-b-slate-100 border-b">
    <div class="container mx-auto">
      <div class="pt-10 pb-4">
        <div class="flex flex-row items-center mb-4">
          <TrendIcon class="mr-[10px]" />
          <h2 class="font-medium tracking-normal">Trending on Medium</h2>
        </div>
        <div>
          <div class="grid grid-cols-3 gap-x-8">
            <div v-for="(n, i) in 6">
              <div class="flex items-start mb-6">
                <div class="mr-4 relative -top-[10px] w-10 flex-[0_0_auto]">
                  <span
                    class="text-[32px] leading-[38px] text-slate-100 font-medium tracking-[0.014em]"
                    >0{{ i + 1 }}</span
                  >
                </div>
                <div class="flex flex-col gap-2">
                  <div class="text-sm flex flex-row items-center">
                    <NuxtLink to="/" class="h-[23px] flex items-end">
                      <img
                        :src="`https://picsum.photos/id/${i * 23}/200/300`"
                        alt=""
                        class="w-5 h-5 rounded-md"
                      />
                    </NuxtLink>
                    <div class="ml-2">
                      <NuxtLink to="/" class="pr-[2px] text-[13px]">
                        Natalie Worth
                      </NuxtLink>
                    </div>
                    <div class="text-slate-700 pr-[2px] text-[13px] leading-4">
                      in
                    </div>
                    <div class="text-[13px] leading-4">
                      <NuxtLink to="/"> UX collective </NuxtLink>
                    </div>
                  </div>
                  <div
                    class="font-semibold leading-5 max-h-[70px] line-clamp-2"
                  >
                    Data Quality Score: The next chapter of data quality at
                    Airbnb
                  </div>
                  <div
                    class="text-sm text-slate-700 text-[13px] leading-5 flex items-center gap-2 font-light"
                  >
                    <span> Nov 28 · 4 min read </span>
                    <Icon
                      name="streamline:star-2-solid"
                      class="text-amber-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TrendIcon from "./Icons/TrendIcon.vue";
</script>

<style scoped></style>
