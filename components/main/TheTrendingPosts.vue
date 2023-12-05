<template>
  <div class="border-b-slate-100 border-b">
    <div class="container mx-auto">
      <div class="pt-10 pb-4">
        <div class="flex flex-row items-center mb-4">
          <TrendIcon class="mr-[10px]" />
          <h2 class="font-medium tracking-normal">Trending on Medium</h2>
        </div>
        <div>
          <div class="grid grid-cols-3 gap-x-8">
            <TrendingPost
              v-for="(post, i) in trendingPosts"
              :key="post.id"
              :author="post.author"
              :community="post.community"
              :index="i"
              :title="post.title"
              :date="post.date"
              :duration="post.duration"
              :is-member-only="post.isMemberOnly"
              :is-book-author="post.isBookAuthor"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TrendingPost from "../post/TrendingPost.vue";
import TrendIcon from "./Icons/TrendIcon.vue";

const trendingPosts = reactive([
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
    community: "The Generator",
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
