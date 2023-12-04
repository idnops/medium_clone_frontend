<template>
  <div>
    <NavTheNavigation />
    <main>
      <slot />
    </main>
    <UiModal />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import UiModal from "../components/ui/UiModal.vue";
import useModal from "../stores/modal";

const modal = useModal();
const { isOpen } = storeToRefs(modal);

useHead({
  bodyAttrs: {
    class: {
      "overflow-hidden": isOpen,
    },
  },
});
</script>

<style scoped></style>
