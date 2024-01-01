<template>
  <div>
    <div class="pt-4 flex justify-between items-center">
      <div class="flex mr-2">
        <NuxtLink to="/">
          <div class="relative w-8 h-8">
            <img
              :src="photoUrl"
              :alt="name"
              class="w-8 h-8 rounded-full block"
            />
          </div>
        </NuxtLink>
        <div class="ml-4 mr-2">
          <div class="flex items-center">
            <NuxtLink to="/">
              <h2
                class="break-all line-clamp-2 max-h-10 font-bold text-neutral-800"
              >
                {{ name }}
              </h2>
            </NuxtLink>
            <PostBookAuthor :author="name" :size="20" v-if="isBookAuthor" />
          </div>
          <NuxtLink to="/">
            <div class="mt-1 break-all">
              <p
                class="line-clamp-2 max-h-10 text-[13px] text-neutral-500 leading-5"
              >
                {{ bio }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <button
        class="text-center border border-neutral-800 py-[5px] px-3 rounded-full text-sm"
        :class="[isFollowing ? 'bg-neutral-800 text-white' : '']"
        @click="handleClick"
      >
        {{ isFollowing ? "Following" : "Follow" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  bio: string;
  photoUrl: string;
  isBookAuthor?: boolean;
}

const { name, bio, photoUrl } = withDefaults(defineProps<Props>(), {
  isBookAuthor: false,
});

const isFollowing = ref(false);

const handleClick = (): void => {
  isFollowing.value = !isFollowing.value;
};
</script>

<style scoped></style>
