<template>
  <div>
    <div ref="tooltip" class="tooltip rounded-[4px] z-10">
      <div class="bg-white rounded-[4px]">
        <div class="w-[300px] p-4">
          <slot name="content" />
        </div>
        <div class="arrow" data-popper-arrow></div>
      </div>
    </div>

    <slot name="activator" :set-ref="setSlotRef" />
  </div>
</template>

<script setup lang="ts">
import { createPopper } from "@popperjs/core";
import type { Placement } from "@popperjs/core";

const props = defineProps<{
  placement: Placement;
}>();

const popperInstance = ref();
const popcorn = ref();
const tooltip = ref();
const interval = ref();

onMounted(() => {
  useEventListener(popcorn.value, "mouseenter", show);
  useEventListener(popcorn.value, "mouseleave", hide);
  useEventListener(tooltip.value, "mouseenter", show);
  useEventListener(tooltip.value, "mouseleave", hide);

  popperInstance.value = createPopper(popcorn.value, tooltip.value, {
    placement: props.placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 16],
        },
      },
    ],
  });
});

const show = (): void => {
  tooltip.value.setAttribute("data-show", "");
  clearTimeout(interval.value);
  popperInstance.value.update();
};

const hide = (): void => {
  interval.value = setTimeout(() => {
    tooltip.value.removeAttribute("data-show");
  }, 200);
};

const setSlotRef = (el: any): void => {
  popcorn.value = el;
};
</script>

<style scoped>
.tooltip {
  display: none;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 0px 4px,
    rgba(0, 0, 0, 0.15) 0px 2px 8px;
}

.tooltip[data-show] {
  display: block;
}

.arrow,
.arrow::before {
  position: absolute;
  width: 12px;
  height: 12px;
  background: inherit;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 0px 4px,
    rgba(0, 0, 0, 0.15) 0px 2px 8px;
}

.arrow {
  visibility: hidden;
  z-index: -1;
}

.arrow::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}

.tooltip[data-popper-placement^="top"] > div > .arrow {
  bottom: -6px;
}

.tooltip[data-popper-placement^="bottom"] > div > .arrow {
  top: -6px;
}

.tooltip[data-popper-placement^="left"] > div > .arrow {
  right: -6px;
}

.tooltip[data-popper-placement^="right"] > div > .arrow {
  left: -6px;
}
</style>
