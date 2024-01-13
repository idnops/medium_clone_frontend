<template>
  <article>
    <div class="max-w-[680px] mx-6">
      <hr class="h-px bg-neutral-50" v-if="index > 0" />
      <div :class="{ 'pt-6': index > 0 }">
        <div class="flex items-center">
          <PostAuthor
            :author="post.author"
            :photo-url="`https://picsum.photos/id/${post.id * 12}/200/300`"
          />
          <PostBookAuthor :author="post.author" v-if="post.isBookAuthor" />
          <PostCommunity :community="post.community" v-if="post.community" />
          <div class="flex-[0_0_auto]">
            <div class="flex items-center">
              <NuxtLink to="/">
                <p class="text-sm text-neutral-500 flex items-center">
                  <span class="mx-1 leading-3">·</span>
                  <span>{{ post.date }}</span>
                </p>
              </NuxtLink>
              <MemberOnly class="ml-1" v-if="post.isMemberOnly" />
            </div>
          </div>
        </div>
        <div class="mt-3">
          <div class="flex">
            <div class="flex-auto break-words">
              <div>
                <NuxtLink to="/">
                  <div class="pb-2">
                    <h2
                      class="line-clamp-2 sm:line-clamp-3 max-h-[72px] leading-6 text-base sm:text-xl font-bold text-neutral-800"
                    >
                      {{ post.title }}
                    </h2>
                  </div>
                  <div>
                    <p
                      class="line-clamp-3 max-h-[72px] leading-6 font-source hidden sm:block"
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ducimus ullam fuga illum ab deserunt, porro ut, tempora
                      similique perspiciatis, architecto suscipit non ipsum
                      animi commodi illo veritatis maxime eligendi quaerat.
                    </p>
                  </div>
                </NuxtLink>
              </div>
              <div class="py-8 hidden sm:block">
                <div class="flex justify-between">
                  <div class="flex flex-[1_0_auto] items-center">
                    <div class="flex pr-2">
                      <NuxtLink to="/">
                        <div
                          class="py-0.5 px-2 border border-neutral-100 rounded-full bg-neutral-100 text-[13px] leading-5"
                        >
                          tag
                        </div>
                      </NuxtLink>
                    </div>
                    <div class="flex flex-[0_0_auto]">
                      <NuxtLink to="/">
                        <p class="text-[13px] text-neutral-600 leading-5">
                          2 min read
                        </p>
                      </NuxtLink>
                    </div>
                  </div>
                  <div class="flex flex-[0_0_0px] justify-end items-center">
                    <div>
                      <button
                        class="p-2 text-neutral-500 hover:text-neutral-900"
                      >
                        <BookmarkIcon />
                      </button>
                    </div>
                    <div>
                      <button
                        class="p-2 text-neutral-500 hover:text-neutral-900"
                      >
                        <MinusRoundedIcon />
                      </button>
                    </div>
                    <div>
                      <button
                        class="py-2 px-0.5 text-neutral-500 hover:text-neutral-900"
                      >
                        <DotsHorizontalIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ml-6 sm:ml-[60px] flex-shrink-0">
              <NuxtLink to="/">
                <div>
                  <img
                    :src="`https://picsum.photos/id/${post.id * 12}/200/300`"
                    alt=""
                    class="w-[80px] h-[56px] sm:w-[112px] sm:h-[112px] object-cover"
                  />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="block sm:hidden">
          <div class="flex justify-between">
            <div class="py-4 flex items-center flex-[1_0_0px] max-w-[56%]">
              <div class="flex pr-2">
                <NuxtLink to="/">
                  <div
                    class="py-0.5 px-2 border border-neutral-100 rounded-full bg-neutral-100 text-[13px] leading-5"
                  >
                    tag
                  </div>
                </NuxtLink>
              </div>
              <div class="flex flex-[0_0_auto]">
                <NuxtLink to="/">
                  <p class="text-[13px] text-neutral-600 leading-5">
                    2 min read
                  </p>
                </NuxtLink>
              </div>
            </div>
            <div class="flex flex-[0_0_0px] justify-end items-center">
              <div>
                <button class="p-2 text-neutral-500 hover:text-neutral-900">
                  <BookmarkIcon />
                </button>
              </div>
              <div>
                <button class="p-2 text-neutral-500 hover:text-neutral-900">
                  <MinusRoundedIcon />
                </button>
              </div>
              <div>
                <button
                  class="py-2 px-0.5 text-neutral-500 hover:text-neutral-900"
                >
                  <DotsHorizontalIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PostDto } from "./dto/Post.dto";
import MemberOnly from "../utils/MemberOnly.vue";
import BookmarkIcon from "../main/Icons/BookmarkIcon.vue";
import MinusRoundedIcon from "../main/Icons/MinusRoundedIcon.vue";
import DotsHorizontalIcon from "../main/Icons/DotsHorizontalIcon.vue";

interface Props {
  post: PostDto;
  index: number;
}

const { post, index } = defineProps<Props>();
</script>

<style scoped></style>
