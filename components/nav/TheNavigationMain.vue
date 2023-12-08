<template>
  <div class="">
    <div class="flex items-center h-[57px] border-b border-neutral-100 px-6">
      <div class="flex flex-[1_0_auto] items-center">
        <NuxtLink to="/">
          <TheLogo class="h-[22px]" v-if="!auth.user" />
          <TheLogoSmall class="h-[25px] fill-neutral-800" v-else />
        </NuxtLink>
        <div class="ml-4">
          <TheSearchBox />
        </div>
      </div>
      <div class="flex">
        <div class="flex mr-8">
          <NuxtLink to="/about">
            <div class="flex items-center text-sm text-neutral-500">
              <PencilBoxIcon />
              <div class="ml-2">Write</div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="mr-8" v-if="auth.user">
        <NuxtLink to="/">
          <div class="text-neutral-500">
            <BellIcon />
          </div>
        </NuxtLink>
      </div>
      <div class="mr-8" v-else>
        <div class="flex items-center">
          <button
            @click="handleSignUp"
            class="bg-[#1A8917] text-sm px-[12px] py-[5px] text-white rounded-full border border-green-600"
          >
            Sign up
          </button>
          <div class="ml-4">
            <button @click="handleSignIn" class="text-sm text-neutral-500">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div class="h-8 w-8 rounded-full border border-neutral-100"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheLogo from "./TheLogo.vue";
import TheLogoSmall from "./TheLogoSmall.vue";
import TheSearchBox from "./TheSearchBox.vue";
import PencilBoxIcon from "./icons/PencilBoxIcon.vue";
import BellIcon from "./icons/BellIcon.vue";
import SignUp from "../auth/SignUp.vue";
import SignIn from "../auth/SignIn.vue";

const auth = useAuth();
const modal = useModal();

const handleSignUp = (): void => {
  modal.open(SignUp);
};
const handleSignIn = (): void => {
  modal.open(SignIn);
};
</script>

<style scoped></style>
