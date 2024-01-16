import type StarIconVue from '../nav/icons/StarIcon.vue'; import type UiPopupVue
from '../ui/UiPopup.vue';
<template>
  <div>
    <UiPopup placement="bottom" type="click" with-overlay :offset="[0, 10]">
      <template v-slot:activator="{ setRef }">
        <button class="flex items-center" :ref="(el) => setRef(el)">
          <StarIcon class="w-4 h-4" />
          <p
            class="text-sm text-neutral-500 ml-0.5 hidden sm:block"
            v-if="!iconOnly"
          >
            Member-only
          </p>
        </button>
      </template>

      <template v-slot:content>
        <div class="p-6 w-[240px] flex flex-col items-center text-center">
          <h2 class="font-medium text-neutral-800">Member-only story</h2>
          <div class="py-2">
            <p class="text-neutral-500 text-sm">
              Become a Medium member to enjoy unlimited access and directly
              support the writers you read most.
            </p>
          </div>
          <div class="pt-6"></div>
          <NuxtLink
            to="/"
            class="w-full text-sm border bg-green-600 border-green-600 hover:bg-green-800 hover:border-green-800 text-white rounded-full px-4 py-2"
          >
            Get unlimited access
          </NuxtLink>
          <div class="pt-4"></div>
          <NuxtLink to="/">
            <p class="text-sm text-green-600 hover:text-green-800">
              Learn more
            </p>
          </NuxtLink>
        </div>
      </template>
    </UiPopup>
  </div>
</template>

<script setup lang="ts">
import UiPopup from "../ui/UiPopup.vue";
import StarIcon from "../nav/icons/StarIcon.vue";

interface Props {
  iconOnly?: boolean;
}

const { iconOnly } = withDefaults(defineProps<Props>(), {
  iconOnly: false,
});
</script>
