<template>
  <div>
    <TheNavigationAmber />
    <main>
      <slot />
    </main>
    <UiModal />
  </div>
</template>

<script setup lang="ts">
import TheNavigationAmber from "~/components/nav/TheNavigationAmber.vue";
import UiModal from "../components/ui/UiModal.vue";
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
