<template>
  <div class="bg-amber-400 border-b border-neutral-800 relative">
    <div class="container mx-auto">
      <div class="w-[550px] h-full pt-[93px] pb-[92px]">
        <div class="mb-8">
          <h1
            class="text-[106px] leading-[95px] font-serif tracking-tighter mb-[35px]"
          >
            Stay curious.
          </h1>
        </div>
        <div class="w-4/5 mb-[50px]">
          <h3 class="text-2xl leading-6 font-sohne">
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
        </div>
        <button
          class="rounded-full px-5 py-2 bg-black text-white text-xl w-[213px] leading-6 border border-black"
          @click="handleModalOpen"
        >
          Start reading
        </button>
      </div>
    </div>
    <div class="absolute right-0 top-0">
      <the-letters />
    </div>
  </div>
</template>

<script setup lang="ts">
import useModal from "../../stores/modal";
import TheLetters from "./TheLetters.vue";
import SignUp from "../auth/SignUp.vue";

const modal = useModal();
const handleModalOpen = (): void => {
  modal.open(SignUp);
};
</script>

<style scoped></style>
