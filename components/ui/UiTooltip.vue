<template>
  <div ref="wrapper">
    <div ref="tooltip" class="tooltip z-500">
      <div
        class="bg-neutral-800 rounded px-2 pt-2.5 pb-2 text-white text-[13px]"
      >
        <div>
          {{ message }}
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

interface Props {
  message: string;
  placement?: Placement;
  offset?: number[];
}

const { message, placement, offset } = withDefaults(defineProps<Props>(), {
  offset: () => [0, 16],
  placement: "top",
});

const tooltipInstance = ref();
const wrapper = ref<HTMLElement | null>(null);
const tooltip = ref();
const activator = ref();
const timeout = ref();

const setSlotRef = (el: any): void => {
  activator.value = el;
};

const show = (): void => {
  timeout.value = setTimeout(() => {
    tooltip.value.setAttribute("data-show", "");
    tooltipInstance.value.update();
  }, 500);
};

const hide = (): void => {
  tooltip.value.removeAttribute("data-show");
  clearTimeout(timeout.value);
};

onMounted(() => {
  tooltipInstance.value = createPopper(activator.value, tooltip.value, {
    placement,
    modifiers: [
      {
        name: "offset",
        options: { offset },
      },
    ],
  });

  useEventListener(activator.value, "mouseenter", show);
  useEventListener(activator.value, "mouseleave", hide);
});
</script>

<style scoped>
.tooltip {
  display: none;
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
