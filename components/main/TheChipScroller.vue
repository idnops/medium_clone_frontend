<template>
  <div
    class="h-[55px] border-b border-neutral-100 sticky flex items-center"
    :style="styles"
  >
    Y position {{ y }}
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
const { y } = useWindowScroll();
const isScrollingUp = ref(false);
const lastScrollPos = ref(0);

watch(y, (val, oldVal) => {
  if (!isScrollingUp.value && oldVal > val) {
    isScrollingUp.value = true;
    lastScrollPos.value = val;
  } else if (isScrollingUp.value && val > oldVal) {
    isScrollingUp.value = false;
    lastScrollPos.value = oldVal;
  }
});

const styles = computed(() => {
  if (!isScrollingUp.value) {
    if (y.value - lastScrollPos.value > 57) {
      return "top:0px";
    } else {
      return `top:${57 - (y.value - lastScrollPos.value)}px`;
    }
  }

  if (isScrollingUp.value) {
    if (lastScrollPos.value - y.value < 57) {
      return `top:${lastScrollPos.value - y.value}px`;
    } else {
      return "top:57px";
    }
    // if (lastScrollPos.value - y.value > 57) {
    //   return "top:57px";
    // } else {
    //   return `top:${lastScrollPos.value - y.value}px`;
    // }
  }
});
</script>

<style scoped></style>
