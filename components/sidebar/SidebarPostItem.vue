<template>
  <div class="pb-5">
    <div class="flex items-center mb-2">
      <NuxtLink to="/">
        <img
          :src="`https://picsum.photos/id/${post.id * 12}/200/300`"
          alt=""
          class="w-5 h-5 rounded-full"
        />
      </NuxtLink>
      <div class="ml-2 flex flex-wrap items-center">
        <div class="flex items-center">
          <NuxtLink to="/">
            <h4
              class="pr-0.5 break-all line-clamp-1 max-h-4 text-[13px] leading-4 font-medium"
            >
              {{ post.author }}
            </h4>
          </NuxtLink>
          <BookAuthorIcon class="mr-1" v-if="post.isBookAuthor" />
        </div>
        <div class="flex items-center" v-if="post.community">
          <h4 class="pr-0.5 text-[13px] leading-4 font-medium text-neutral-500">
            in
          </h4>
          <NuxtLink to="/">
            <h4
              class="pr-0.5 break-all line-clamp-1 max-h-4 text-[13px] leading-4 font-medium"
            >
              {{ post.community }}
            </h4>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div :class="{ 'mb-2': expanded }">
      <NuxtLink to="/">
        <h2 class="font-bold text-base text-neutral-800 leading-5">
          {{ post.title }}
        </h2>
      </NuxtLink>
    </div>
    <div class="flex items-center text-[13px] text-neutral-500" v-if="expanded">
      <NuxtLink to="/">
        <span> {{ post.date }}</span>
      </NuxtLink>
      <div class="w-[2px] h-[2px] mx-1.5 rounded-full bg-neutral-500"></div>
      <NuxtLink to="/">
        <span>{{ post.duration }} min read </span>
      </NuxtLink>
      <MemberOnly icon-only v-if="post.isMemberOnly" class="ml-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BookAuthorIcon from "../main/Icons/BookAuthorIcon.vue";
import MemberOnly from "../utils/MemberOnly.vue";
import type { PostDto } from "../post/dto/Post.dto";
interface Props {
  post: PostDto;
  expanded?: boolean;
}
const { post } = withDefaults(defineProps<Props>(), {
  expanded: false,
});
</script>
