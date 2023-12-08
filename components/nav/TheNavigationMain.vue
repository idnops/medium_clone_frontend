<template>
  <div class="">
    <div class="flex items-center h-[57px] border-b border-neutral-100 px-6">
      <div class="flex flex-[1_0_auto] items-center">
        <NuxtLink to="/">
          <TheLogo class="h-[22px]" />
        </NuxtLink>
        <div class="ml-4">
          <div class="bg-neutral-50 rounded-full w-[240px] flex items-center">
            <div class="mx-3 flex">
              <Icon name="circum:search" size="24" class="text-neutral-600" />
            </div>
            <input
              type="text"
              class="pt-[10px] pr-[20px] pb-[10px] outline-none bg-transparent border-none text-sm placeholder-slate-600"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex mr-8">
          <NuxtLink to="/">
            <div class="flex items-center text-sm text-neutral-600">
              <PencilBoxIcon />
              <div class="ml-2">Write</div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="mr-8">
        <div class="flex items-center">
          <button
            class="bg-[#1A8917] text-sm px-[12px] py-[5px] text-white rounded-full border border-green-600"
          >
            Sign up
          </button>
          <div class="ml-4">
            <button class="text-sm text-neutral-600">Sign in</button>
          </div>
        </div>
      </div>
      <div class="h-8 w-8 rounded-full border border-neutral-100"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheLogo from "./TheLogo.vue";
import PencilBoxIcon from "./icons/PencilBoxIcon.vue";
</script>

<style scoped></style>
