<template>
  <TheHero />
  <TheTrendingPosts />
  <div class="pt-14 border-t-slate-100 border-t">
    <div class="container mx-auto">
      <div class="grid-cols-12 grid">
        <section class="row-start-1 col-start-1 col-span-7">
          <ThePostList :posts="posts" />
        </section>
        <aside class="row-start-1 col-start-9 col-span-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          similique explicabo a unde, nihil voluptatum dignissimos, ad ab
          consequatur quibusdam quod cum velit placeat quaerat sed vel. Ducimus,
          dolorem cumque.
        </aside>
        <div class="min-h-screen"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTrendingPosts from "~/components/main/TheTrendingPosts.vue";
import ThePostList from "~/components/main/ThePostList.vue";
import TheHero from "../components/main/TheHero.vue";
import type { PostDto } from "../components/post/dto/Post.dto";

const posts = reactive<PostDto[]>([
  {
    id: 1,
    author: "Natalie Worth",
    community: "UX collective",
    title: "Is technology harming our brains?",
    date: "Dec 3",
    duration: "4",
    isMemberOnly: false,
  },
  {
    id: 2,
    author: "Thomas Smith",
    title: "Did OpenAI Secretly Create a Brain-Like Intelligence After All?",
    date: "Nov 28",
    duration: "11",
    isMemberOnly: true,
  },
  {
    id: 3,
    author: "Eva Lesko Natiello",
    community: "The Writing Cooperative",
    title:
      "How a Professor’s One Piece of Advice Influenced My Entire Writing Career",
    date: "Nov 26",
    duration: "9",
    isMemberOnly: false,
    isBookAuthor: true,
  },
  {
    id: 4,
    author: "Maevyn Frey",
    community: "Fourth Wave",
    title: "My Disability Was Fetishized When I Was a Child",
    date: "Nov 24",
    duration: "12",
    isMemberOnly: true,
  },
  {
    id: 5,
    author: "Luka Bönisch",
    community: "The Taoist Online",
    title: "The Problem You Think You Have Is Never the Real Problem",
    date: "Nov 24",
    duration: "9",
    isMemberOnly: false,
  },
  {
    id: 6,
    author: "Clark Wright",
    community: "The Airbnb Tech Blog",
    title: "Data Quality Score: The next chapter of data quality at Airbnb",
    date: "Nov 28",
    duration: "9",
    isMemberOnly: false,
  },
]);
</script>

<style scoped></style>
