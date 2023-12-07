<template>
  <div>
    <div class="flex items-start mb-6">
      <div class="mr-4 relative -top-[10px] w-10 flex-[0_0_auto]">
        <span
          class="text-[32px] leading-[38px] text-neutral-100 font-medium tracking-[0.014em]"
          >0{{ index + 1 }}</span
        >
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-sm flex flex-row items-center">
          <NuxtLink to="/" class="h-[23px] flex items-end">
            <img
              :src="`https://picsum.photos/id/${index * 23}/200/300`"
              alt=""
              class="w-5 h-5 rounded-md"
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
        <div class="font-semibold leading-5 max-h-[70px] line-clamp-2">
          {{ post.title }}
        </div>
        <div
          class="text-neutral-700 text-[13px] leading-5 flex items-center gap-2 font-light"
        >
          <span> {{ post.date }} · {{ post.duration }} min read </span>
          <Icon
            name="streamline:star-2-solid"
            class="text-amber-400"
            v-if="post.isMemberOnly"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostDto } from "./dto/Post.dto";

import AuthorCard from "../cards/AuthorCard.vue";
import BookAuthorIcon from "../main/Icons/BookAuthorIcon.vue";

interface Props {
  post: PostDto;
  index: number;
}

const { post, index } = defineProps<Props>();
</script>

<style scoped></style>
