<template>
  <div
    class="border-b border-slate-800 fixed w-full top-0 transition-colors duration-500 z-10"
    :class="scrolled ? 'bg-white' : 'bg-amber-400'"
  >
    <div class="container mx-auto">
      <div class="py-4 flex justify-between items-center">
        <div>
          <TheLogo />
        </div>
        <div class="flex gap-6 items-center">
          <NuxtLink to="/" class="text-sm">Our story</NuxtLink>
          <NuxtLink to="/" class="text-sm">Membership</NuxtLink>
          <NuxtLink to="/" class="text-sm">Write</NuxtLink>
          <button class="text-sm" @click.prevent="handleSignIn">Sign in</button>
          <button
            class="rounded-full text-white px-5 py-2.5 text-sm transition-colors duration-500"
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
