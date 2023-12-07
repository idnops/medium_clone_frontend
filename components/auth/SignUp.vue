<template>
  <div
    class="px-14 py-11 w-[360px] text-center flex flex-col flex-[1_0_auto] justify-center items-center"
  >
    <h2 class="text-[28px] font-serif tracking-tight">
      {{ title || "Join Medium." }}
    </h2>
    <div class="mt-[30px] max-w-[316px]">
      <h4>
        {{ subtitle }}
      </h4>
    </div>
    <div class="mt-12">
      <button
        class="rounded-full border border-black px-2.5 py-2 flex justify-between items-center w-[300px] mt-3"
      >
        <Icon name="flat-color-icons:google" size="20" />
        <span>Sign up with Google</span>
        <div class="w-5 h-5"></div>
      </button>
      <button
        class="rounded-full border border-black px-2.5 py-2 flex justify-between items-center w-[300px] mt-3"
      >
        <Icon name="logos:facebook" size="20" />
        <span>Sign up with Facebook</span>
        <div class="w-5 h-5"></div>
      </button>
      <button
        @click="handleSignUpWithEmail"
        class="rounded-full border border-black px-2.5 py-2 flex justify-between items-center w-[300px] mt-3"
      >
        <Icon name="formkit:email" size="20" />
        <span>Sign up with email</span>
        <div class="w-5 h-5"></div>
      </button>
    </div>
    <div class="flex gap-1 justify-center mt-12">
      <span>Already have an account?</span>
      <button class="text-green-700 font-bold" @click="handleSignIn">
        Sign in
      </button>
    </div>
    <div class="w-[450px] text-center mt-24">
      <p class="text-[13px] leading-[20px]">
        Click “Sign up” to agree to Medium’s
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
import SignIn from "./SignIn.vue";
import SignUpWithEmail from "./SignUpWithEmail.vue";

interface Props {
  title?: string;
  subtitle?: string;
}

const { title, subtitle } = defineProps<Props>();

const modal = useModal();

const handleSignIn = (): void => {
  modal.open(SignIn);
};

const handleSignUpWithEmail = (): void => {
  modal.open(SignUpWithEmail);
};
</script>

<style scoped></style>
