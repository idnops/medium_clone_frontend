<template>
  <div class="">
    <div class="container mx-auto">
      <div class="pt-10 pb-4">
        <div class="flex flex-row items-center mb-4">
          <TrendIcon class="mr-[10px]" />
          <h2 class="font-medium tracking-normal">Trending on Medium</h2>
        </div>
        <div>
          <div class="grid grid-cols-3 gap-x-8">
            <TrendingPost
              v-for="(post, i) in posts"
              :key="post.id"
              :post="post"
              :index="i"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TrendingPost from "../post/TrendingPost.vue";
import type { PostDto } from "../post/dto/Post.dto";

import TrendIcon from "./Icons/TrendIcon.vue";

interface Props {
  posts: PostDto[];
}
const { posts } = defineProps<Props>();
</script>

<style scoped></style>
