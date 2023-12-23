<template>
  <div class="mb-12">
    <div class="flex items-center justify-between flex-auto">
      <div class="mr-5 min-w-0 w-full">
        <div class="text-sm flex flex-row items-center pb-2">
          <NuxtLink to="/" class="h-[23px] flex items-end">
            <img
              :src="`https://picsum.photos/id/${post.id * 12}/200/300`"
              alt=""
              class="w-5 h-5"
              :class="[post.community ? 'rounded-md' : 'rounded-full']"
            />
          </NuxtLink>
          <div class="flex items-center flex-wrap ml-2">
            <div>
              <UiPopup placement="right">
                <template v-slot:content>
                  <AuthorCard
                    :author="post.author"
                    :is-book-author="post.isBookAuthor"
                    :is-member="post.isMemberOnly"
                  />
                </template>

                <template v-slot:activator="{ setRef }">
                  <div :ref="(el) => setRef(el)" class="flex items-center">
                    <div>
                      <NuxtLink to="/" class="pr-[2px] text-[13px]">
                        {{ post.author }}
                      </NuxtLink>
                    </div>
                    <div v-if="post.isBookAuthor">
                      <div class="mr-[2px]">
                        <BookAuthorIcon />
                      </div>
                    </div>
                  </div>
                </template>
              </UiPopup>
            </div>

            <div v-if="post.community" class="flex items-center">
              <div class="text-neutral-700 pr-[2px] text-[13px] leading-4">
                in
              </div>
              <div class="text-[13px] leading-4" v-if="post.community">
                <NuxtLink to="/"> {{ post.community }} </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/">
          <h2 class="max-h-12 leading-6 text-xl line-clamp-2 font-bold">
            {{ post.title }}
          </h2>
          <div class="pt-1">
            <h3 class="max-h-10 line-clamp-2 text-neutral-600 leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              sit recusandae itaque quidem cum at tempore eum quis minima
              officia ducimus nam labore, velit, non molestias fugiat nesciunt
              aspernatur repellendus?
            </h3>
          </div>
        </NuxtLink>
        <div class="pt-2 flex justify-between items-center">
          <div
            class="text-neutral-700 text-[13px] leading-5 flex items-center gap-2 font-light"
          >
            <span> {{ post.date }}</span>
            <div class="w-[2px] h-[2px] rounded-full bg-neutral-500"></div>
            <span>{{ post.duration }} min read </span>
            <div class="w-[2px] h-[2px] rounded-full bg-neutral-500"></div>
            <NuxtLink to="/">
              <div class="bg-neutral-100 px-2 py-1 rounded-full">
                <span class="text-xs font-light text-neutral-600"
                  >Technology</span
                >
              </div>
            </NuxtLink>
            <div class="text-base" v-if="post.isMemberOnly">
              <MemberOnly icon-only />
            </div>
          </div>
          <div
            class="text-neutral-500 hover:text-neutral-900 flex items-center"
          >
            <div class="mr-2">
              <button @click="handleBookmark">
                <BookmarkIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-shrink-0">
        <NuxtLink to="/">
          <img
            :src="`https://picsum.photos/id/${post.id * 12}/200/300`"
            alt=""
            class="w-[200px] h-[134px] object-cover"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostDto } from "./dto/Post.dto";
import AuthorCard from "../cards/AuthorCard.vue";
import BookAuthorIcon from "../main/Icons/BookAuthorIcon.vue";
import BookmarkIcon from "../main/Icons/BookmarkIcon.vue";
import SignUp from "../auth/SignUp.vue";
import MemberOnly from "../utils/MemberOnly.vue";

interface Props {
  post: PostDto;
}

const { post } = defineProps<Props>();
const modal = useModal();
const auth = useAuth();
const handleBookmark = () => {
  if (!auth.user) {
    modal.open(SignUp, {
      title: "Create an account to save this story.",
      subtitle:
        "Save stories to your personalized lists and access them anytime, anywhere.",
    });

    // else do bookmark logic
  }
};
</script>

<style scoped></style>
