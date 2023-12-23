<template>
  <div class="ml-px mr-0.5 flex">
    <UiPopup placement="top">
      <template v-slot:content>
        <div class="p-6 w-[240px] flex flex-col items-center text-center">
          <h2 class="font-medium text-neutral-800">Verified Book Author</h2>
          <div class="py-2">
            <p class="text-neutral-500 text-sm">
              {{ author }} has 1 verified book on Medium.
            </p>
          </div>
          <NuxtLink to="/">
            <p class="text-sm text-green-600 hover:text-green-800">See books</p>
          </NuxtLink>
        </div>
      </template>

      <template v-slot:activator="{ setRef }">
        <div :ref="(el) => setRef(el)">
          <BookAuthorIcon class="mt-px ml-0.5" />
        </div>
      </template>
    </UiPopup>
  </div>
</template>

<script setup lang="ts">
import UiPopup from "../ui/UiPopup.vue";
import BookAuthorIcon from "../main/Icons/BookAuthorIcon.vue";

interface Props {
  author: string;
}

const { author } = defineProps<Props>();
</script>

<style scoped></style>
