<template>
  <div class="flex flex-col w-[300px] p-4" v-if="!isLoading">
    <div class="flex items-center">
      <NuxtLink to="/">
        <div class="relative">
          <img
            src="https://picsum.photos/id/234/200/300"
            alt=""
            class="w-8 h-8 rounded-full"
          />
          <Icon
            v-if="isMember"
            name="streamline:star-2-solid"
            class="text-amber-400 absolute -top-1 -right-1"
            size="16"
          />
        </div>
      </NuxtLink>
      <NuxtLink to="/">
        <div class="pl-3 flex flex-col">
          <h2 class="max-h-12 line-clamp-2 text-xl leading-6 font-medium">
            {{ author }}
          </h2>
        </div>
      </NuxtLink>
    </div>
    <div class="pt-3" v-if="isBookAuthor">
      <div class="flex items-center">
        <div>
          <BookAuthorIcon class="w-5 h-5" />
        </div>
        <div class="ml-[5px]">
          <span class="text-blue-500"> Book Author </span>
        </div>
      </div>
    </div>
    <div class="pt-2 text-[13px] leading-5">
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quod,
        aliquam quas et consectetur commodi beatae illo recusandae iusto eos
      </span>
    </div>
    <div
      class="mt-4 pt-[10px] border-t border-neutral-100 flex justify-between"
    >
      <span class="text-[13px] leading-5 text-neutral-600">
        37K Followers
      </span>
      <span>
        <button
          class="rounded-full bg-green-600 text-[13px] text-white px-2 pb-px"
          @click="handleFollow"
        >
          Follow
        </button>
      </span>
    </div>
  </div>
  <div class="skeleton w-[280px] p-3" v-else>
    <div class="animate-pulse flex flex-col">
      <div class="flex items-center gap-2 mb-5">
        <div class="rounded-full bg-neutral-100 h-5 w-5"></div>
        <div class="h-2 bg-neutral-100 w-[82px]"></div>
      </div>
      <div class="mb-3 h-2 bg-neutral-100 w-[80%]"></div>
      <div class="mb-3 h-2 bg-neutral-100 w-[65%]"></div>
      <div class="mb-3 h-2 bg-neutral-100 w-[85%]"></div>
      <div class="mb-3 h-2 bg-neutral-100 w-[70%]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "#imports";
import { useModal } from "#imports";
import SignUp from "../auth/SignUp.vue";
import BookAuthorIcon from "../main/Icons/BookAuthorIcon.vue";
interface Props {
  author: string;
  isBookAuthor?: boolean;
  isMember?: boolean;
}

const auth = useAuth();
const modal = useModal();
const { author, isBookAuthor, isMember } = defineProps<Props>();

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});

const handleFollow = () => {
  if (!auth.user) {
    modal.open(SignUp, {
      title: `Never miss a story from ${author}.`,
      subtitle:
        "Create a Medium account to follow your favorite authors, publications,and topics.",
    });

    //  else do follow logic
  }
};
</script>
<style scoped></style>
