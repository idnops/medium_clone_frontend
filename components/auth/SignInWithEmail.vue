<template>
  <div
    class="px-14 py-11 w-[360px] text-center flex flex-col flex-[1_0_auto] justify-center items-center"
  >
    <h1 class="text-[28px] font-serif">Sign in with email</h1>
    <div class="mt-8 max-w-[316px]">
      <p>
        Enter the email address associated with your account, and we’ll send a
        magic link to your inbox.
      </p>
    </div>

    <div class="flex flex-col mt-12">
      <form @submit.prevent="handleSubmit">
        <div class="mt-3 mb-7">
          <UiInput
            label="Your email"
            v-model="state.email"
            :error="v$.$error"
            :error-messages="v$.$errors"
            :isAnimating="isAnimating"
          />
        </div>
        <div class="mt-3 mb-4">
          <button
            class="bg-black rounded-full px-4 py-2 w-[226px] text-white"
            @click="handleSubmit"
          >
            Continue
          </button>
        </div>
      </form>
      <button
        class="rounded-full border border-black px-2.5 py-2 flex justify-between items-center w-[300px]"
        v-if="isGmail"
      >
        <Icon name="flat-color-icons:google" size="20" />
        <span>Sign in with Google</span>
        <div class="w-5 h-5"></div>
      </button>
      <div
        class="flex gap-1 justify-center items-center mt-3 mb-7 pr-5 text-sm"
      >
        <button class="text-green-700" @click="handleSignInOptions">
          <Icon name="ph:caret-left" size="18" />
          All sign in options
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "#imports";
import { useVuelidate } from "@vuelidate/core";
import { email, required, helpers } from "@vuelidate/validators";
import SignIn from "./SignIn.vue";
const modal = useModal();

const state = reactive({
  email: "",
});
const isAnimating = ref(false);
const isGmail = computed(() => {
  let regex = /@gm/i;
  return regex.test(state.email);
});

const EMAIL_ERROR_MESSAGE = "Please enter a valid email address.";

const rules = {
  email: {
    email: helpers.withMessage(EMAIL_ERROR_MESSAGE, email),
    required: helpers.withMessage(EMAIL_ERROR_MESSAGE, required),
  },
};

const v$ = useVuelidate(rules, state);

const handleSubmit = async (): Promise<void> => {
  const validationResult = await v$.value.$validate();

  if (!validationResult) {
    isAnimating.value = true;
    setTimeout(() => {
      isAnimating.value = false;
    }, 400);
  }
};

const handleSignInOptions = (): void => {
  modal.open(SignIn);
};
</script>

<style scoped></style>
