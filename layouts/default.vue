<template>
  <div>
    <TheNavigationMain />
    <div class="mx-auto max-w-[1336px]">
      <div class="flex flex-row justify-evenly">
        <main
          class="min-w-[728px] max-w-[728px] flex-auto text-left sm:text-center"
        >
          <slot name="main" />
        </main>
        <div
          class="min-w-[368px] max-w-[368px] border-l border-neutral-100 pl-10 pr-6 min-h-screen"
        >
          <slot name="aside" />
        </div>
      </div>
    </div>

    <UiModal />
  </div>
</template>

<script setup lang="ts">
import TheNavigationMain from "../components/nav/TheNavigationMain.vue";
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
