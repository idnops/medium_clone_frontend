<template>
  <div class="bg-neutral-50 rounded-full w-[240px] flex items-center">
    <div class="mx-3 flex">
      <Icon
        name="circum:search"
        size="24"
        :class="[isFocused ? 'text-neutral-900' : 'text-neutral-600']"
      />
    </div>
    <UiPopup
      placement="bottom-start"
      type="click"
      :offset="[-48, 6]"
      fixed-arrow
    >
      <template v-slot:activator="{ setRef }">
        <input
          type="text"
          class="pt-[10px] pr-[20px] pb-[10px] outline-none bg-transparent border-none text-sm placeholder-slate-600"
          placeholder="Search"
          @focus="handleFocus"
          @blur="handleBlur"
          :ref="(el) => setRef(el)"
          v-model="query"
          @keydown="handleSubmit"
        />
      </template>

      <template v-slot:content>
        <RecentSearches />
      </template>
    </UiPopup>
  </div>
</template>

<script setup lang="ts">
import useSearchQuery from "~/stores/search";
import RecentSearches from "./RecentSearches.vue";
const isFocused = ref(false);
const query = ref();
const searchQuery = useSearchQuery();

const handleFocus = (): void => {
  isFocused.value = true;
};

const handleBlur = (): void => {
  isFocused.value = false;
};

const handleSubmit = (e: KeyboardEvent): void => {
  if (e.key === "Enter") {
    searchQuery.updateQueries(query.value);
  }
};
</script>

<style scoped></style>
