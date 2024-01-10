<template>
  <div class="px-[30px] flex flex-col items-center">
    <div class="w-[90px] flex justify-evenly items-center">
      <TheLogoSmall class="h-[25px]" />
      <Icon name="ph:plus-thin" size="19" />
      <Icon name="logos:twitter" size="22" />
    </div>
    <div class="text-center my-5 text-neutral-500 leading-5">
      Discover Medium writers you already follow on Twitter.
    </div>
    <button
      class="rounded-full border border-black px-2.5 py-2 flex justify-between items-center w-[300px]"
    >
      <Icon name="logos:twitter" size="20" />
      <span>Connect to Twitter</span>
      <div class="w-5 h-5"></div>
    </button>
    <div class="mt-5">
      <p class="text-sm text-neutral-500">
        <button class="underline">Maybe Later</button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheLogoSmall from "../nav/TheLogoSmall.vue";
</script>
