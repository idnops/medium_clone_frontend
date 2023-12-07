<template>
  <div class="pt-3">
    <RegularPost v-for="post in posts" :post="post" />
  </div>
</template>

<script setup lang="ts">
import type { PostDto } from "../post/dto/Post.dto";
import RegularPost from "../post/RegularPost.vue";

interface Props {
  posts: PostDto[];
}
const { posts } = defineProps<Props>();
</script>

<style scoped></style>
