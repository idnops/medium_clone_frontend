<template>
  <div :class="{ 'text-red-600': error }" class="text-sm">
    <div class="w-[270px] mb-px">
      <div class="mb-3">{{ props.label }}</div>
      <div class="text-center">
        <div
          class="text-neutral-800 relative"
          :class="{ 'animate-wiggle': props.isAnimating }"
        >
          <input
            :type="props.type"
            :value="modelValue"
            @input="updateInput"
            :class="{ 'border-b border-neutral-800': !props.error }"
            class="outline-none text-center w-full text-base text-neutral-800"
          />
          <Icon
            v-if="props.error"
            name="clarity:error-line"
            size="18"
            color="red"
            class="absolute top-1 right-0"
          />
        </div>
      </div>
    </div>
    <div class="mt-2" v-for="error in errorMessages" :key="error.$uid">
      {{ error.$message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ErrorObject } from "@vuelidate/core";
export interface Props {
  label: string;
  type?: string;
  error?: boolean;
  errorMessages: ErrorObject[];
  modelValue: string | number;
  isAnimating?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  label: "",
  error: false,
  errorMessage: "",
  modelValue: "",
  isAnimating: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const updateInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<style scoped></style>
