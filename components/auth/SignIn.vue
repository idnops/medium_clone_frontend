<template>
  <div
    class="px-14 py-11 w-[360px] text-center flex flex-col flex-[1_0_auto] justify-center items-center"
  >
    <h1 class="text-[28px] font-serif">Welcome back.</h1>
    <div class="mt-12">
      <button
        class="rounded-full border border-black px-2.5 py-2 flex justify-between items-center w-[300px] mt-3"
      >
        <Icon name="flat-color-icons:google" size="20" />
        <span>Sign in with Google</span>
        <div class="w-5 h-5"></div>
      </button>
      <button
        class="rounded-full border border-black px-2.5 py-2 flex justify-between items-center w-[300px] mt-3"
      >
        <Icon name="logos:facebook" size="20" />
        <span>Sign in with Facebook</span>
        <div class="w-5 h-5"></div>
      </button>
      <button
        class="rounded-full border border-black px-2.5 py-2 flex justify-between items-center w-[300px] mt-3"
      >
        <Icon name="logos:apple" size="20" />
        <span>Sign in with Apple</span>
        <div class="w-5 h-5"></div>
      </button>
      <button
        class="rounded-full border border-black px-2.5 py-2 flex justify-between items-center w-[300px] mt-3"
      >
        <Icon name="logos:twitter" size="20" />
        <span>Sign in with Twitter</span>
        <div class="w-5 h-5"></div>
      </button>
      <button
        class="rounded-full border border-black px-2.5 py-2 flex justify-between items-center w-[300px] mt-3 mb-10"
        @click="handleSignInWithEmail"
      >
        <Icon name="ph:envelope-simple-thin" size="24" />
        <span>Sign in with email</span>
        <div class="w-5 h-5"></div>
      </button>
    </div>
    <div class="flex gap-1 justify-center mb-16">
      <span>No account?</span>
      <button class="text-green-700 font-bold" @click="handleSignUp">
        Create one
      </button>
    </div>
    <div>
      <p class="text-[13px]">
        Forgot email or trouble signing in?
        <NuxtLink class="underline" to="/">Get help.</NuxtLink>
      </p>
    </div>
    <div class="w-[450px] text-center mt-8">
      <p class="text-[13px] leading-[20px]">
        Click “Sign in” to agree to Medium’s
        <NuxtLink class="underline" to="/">Terms of Service</NuxtLink> and
        acknowledge that Medium’s
        <NuxtLink class="underline" to="/">Privacy Policy</NuxtLink> applies to
        you.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "#imports";
import SignInWithEmail from "./SignInWithEmail.vue";
import SignUp from "./SignUp.vue";

const modal = useModal();

const handleSignUp = (): void => {
  modal.open(SignUp);
};

const handleSignInWithEmail = (): void => {
  modal.open(SignInWithEmail);
};
</script>

<style scoped></style>
