<template>
  <div class="bg-amber-400 h-[75px]"></div>
  <div
    class="border-b border-slate-800 fixed w-full top-0 transition-colors duration-500 z-10"
    :class="scrolled ? 'bg-white' : 'bg-amber-400'"
  >
    <div class="container mx-auto">
      <div
        class="py-[25px] h-[75px] flex flex-row justify-between items-center"
      >
        <div>
          <NuxtLink to="/">
            <TheLogo />
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <NuxtLink to="/" class="text-sm font-light mr-[25px]"
            >Our story</NuxtLink
          >
          <NuxtLink to="/" class="text-sm font-light leading-5 mr-[25px]"
            >Membership</NuxtLink
          >
          <NuxtLink to="/" class="text-sm font-light leading-5 mr-[25px]"
            >Write</NuxtLink
          >
          <button
            class="text-sm font-light leading-5 mr-[25px]"
            @click.prevent="handleSignIn"
          >
            Sign in
          </button>
          <button
            class="rounded-full text-sm font-light leading-5 text-white px-[17px] py-[9px] transition-colors duration-500"
            :class="scrolled ? 'bg-green-700' : 'bg-black'"
            @click="handleSignUp"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import TheLogo from "./TheLogo.vue";
import { useModal } from "#imports";
import SignIn from "../auth/SignIn.vue";
import SignUp from "../auth/SignUp.vue";

const scrolled = ref<boolean>(false);
const modal = useModal();
const handleScroll = (e: any): void => {
  if (window.scrollY > 370) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
};

const handleSignIn = (): void => {
  modal.open(SignIn);
};

const handleSignUp = (): void => {
  modal.open(SignUp);
};

onMounted((): void => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted((): void => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
