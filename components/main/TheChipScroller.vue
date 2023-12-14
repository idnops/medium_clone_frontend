<template>
  <div
    class="h-[55px] bg-white sticky flex items-center"
    :style="style"
    ref="chipScroller"
  >
    <div class="flex justify-center">
      <div class="max-w-[680px] mx-6">
        <div class="h-4"></div>
        <div
          class="h-[39px] overflow-hidden relative shadow-[inset_0_-1px_0_#F2F2F2]"
        >
          <div
            class="py-[2px] flex items-center overflow-y-hidden overflow-x-scroll"
            ref="scroller"
          >
            <div class="flex">
              <div class="pb-4 mr-6 min-w-max border-b border-neutral-100">
                <NuxtLink to="/">
                  <p
                    class="text-sm px-[2px] rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800"
                  >
                    <PlusIcon />
                  </p>
                </NuxtLink>
              </div>
              <div class="pb-4 mr-8 border-b min-w-max border-neutral-800">
                <NuxtLink to="/">
                  <p class="text-sm">For you</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Following</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">UI</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Nodejs</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Web Development</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Machine Learning</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Self Improvement</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Technology</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Programming</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Coding</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Blockchain</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Javascript</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Artifical Intelligence</p>
                </NuxtLink>
              </div>
              <div
                class="pb-4 mr-8 border-b min-w-max border-neutral-100 text-neutral-500 hover:text-neutral-800"
              >
                <NuxtLink to="/">
                  <p class="text-sm">Software Engineering</p>
                </NuxtLink>
              </div>
            </div>
            <div
              class="pl-[42px] absolute bottom-3 right-0 flex items-center bg-gradient-to-r from-white/0 via-white/80 via-25% to-white to-90%"
            >
              <button
                class="mx-0.5 text-neutral-500 hover:text-neutral-800"
                @click="x += 100"
              >
                <ArrowLeftIcon class="rotate-180" />
              </button>
            </div>
            <div
              v-show="!arrivedState.left"
              class="pr-[42px] absolute bottom-3 left-0 flex items-center bg-gradient-to-l from-white/0 via-white/80 via-25% to-white to-90%"
            >
              <button
                class="mx-0.5 text-neutral-500 hover:text-neutral-800"
                @click="x -= 100"
              >
                <ArrowLeftIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlusIcon from "./Icons/PlusIcon.vue";
import ArrowLeftIcon from "./Icons/ArrowLeftIcon.vue";
import { useScroll } from "@vueuse/core";

const chipScroller = ref();
const scroller = ref();

const { scroll } = useHideOnScroll(chipScroller, 57, 0);
const { arrivedState, x } = useScroll(scroller, { behavior: "smooth" });

const style = computed(() => {
  return `top: ${scroll.value}px`;
});
</script>

<style scoped></style>
