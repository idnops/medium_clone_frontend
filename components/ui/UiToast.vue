<template>
  <transition
    enter-active-class="transition-transform duration-500"
    enter-from-class="-translate-y-[80px]"
    leave-active-class="transition-opacity opacity-0 duration-500"
    leave-from-class="opacity-1"
  >
    <div
      v-if="isOpen"
      @mouseenter="stopTimeout"
      @mouseleave="closeToastWithTimeout"
      class="bg-neutral-900 w-[640px] max-w-[680px] px-6 py-4 z-[900] rounded text-white text-[13px] fixed top-0 mt-4 left-[50%] -translate-x-[50%]"
    >
      <div class="flex justify-between">
        <div class="flex items-center">
          <p>{{ message }}</p>
          <button class="underline ml-1" @click="action?.callback">
            {{ action?.label }}
          </button>
        </div>
        <div>
          <button class="text-white/80 hover:text-white" @click="closeToast">
            <Icon name="material-symbols-light:close" size="18" />
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useToast } from "../../stores/toast";
import { storeToRefs } from "pinia";

const toast = useToast();
const { isOpen, message, action } = storeToRefs(toast);
const timeout = ref();

const closeToast = (): void => {
  clearTimeout(timeout.value);
  toast.close();
};

const stopTimeout = (): void => {
  clearTimeout(timeout.value);
};

const closeToastWithTimeout = (): void => {
  timeout.value = setTimeout(() => {
    toast.close();
  }, 3000);
};

watch(isOpen, (val, oldVal) => {
  if (val) {
    closeToastWithTimeout();
  }
});
</script>

<style scoped></style>
