<template>
  <div class="flex flex-col">
    <div class="flex items-center">
      <NuxtLink to="/">
        <div class="relative">
          <img
            src="https://picsum.photos/id/234/200/300"
            alt=""
            class="w-8 h-8 rounded-full"
          />
          <Icon
            name="streamline:star-2-solid"
            class="text-amber-400 absolute -top-1 -right-1"
            size="16"
          />
        </div>
      </NuxtLink>
      <NuxtLink to="/">
        <div class="pl-3 flex flex-col">
          <h2 class="max-h-12 line-clamp-2 text-xl leading-6 font-medium">
            {{ props.author }}
          </h2>
        </div>
      </NuxtLink>
    </div>
    <div class="pt-2 text-[13px] leading-5">
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quod,
        aliquam quas et consectetur commodi beatae illo recusandae iusto eos
      </span>
    </div>
    <div class="mt-4 pt-[10px] border-t border-slate-200 flex justify-between">
      <span class="text-[13px] leading-5 text-slate-600"> 37K Followers </span>
      <span>
        <button
          class="rounded-full bg-green-600 text-[13px] text-white px-2 pb-px"
        >
          Follow
        </button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  author: string;
}

const props = defineProps<Props>();
</script>
<style scoped></style>
