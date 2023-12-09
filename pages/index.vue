<template>
  <div>
    <NuxtLayout :name="layout">
      <TheHero />
      <TheTrendingPosts :posts="posts.slice(0, 6)" />
      <div class="pt-14 border-t-neutral-100 border-t">
        <div class="container mx-auto">
          <div class="grid-cols-12 grid">
            <section class="row-start-1 col-start-1 col-span-7">
              <div class="py-3">
                <ThePostList :posts="posts" />
              </div>
            </section>
            <aside class="row-start-1 col-start-9 col-span-4">
              <TheSidebar :tags="tags" :links="links" />
            </aside>
            <div class="min-h-screen"></div>
          </div>
        </div>
      </div>

      <template v-slot:main
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vero
        quasi consequuntur autem eos dolores aspernatur exercitationem
        voluptate, quibusdam delectus. Debitis consectetur ut adipisci eveniet
        sequi dicta quibusdam enim velit.</template
      >
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import TheTrendingPosts from "~/components/main/TheTrendingPosts.vue";
import ThePostList from "~/components/main/ThePostList.vue";
import TheHero from "../components/main/TheHero.vue";
import type { PostDto } from "../components/post/dto/Post.dto";
import TheSidebar from "~/components/main/TheSidebar.vue";

const auth = useAuth();
const layout = computed(() => {
  return auth.user ? "default" : "initial";
});
const tags = reactive([
  "Programming",
  "Data Science",
  "Technology",
  "Self Improvement",
  "Writing",
  "Relationships",
  "Machine Learning",
  "Productivity",
  "Politics",
]);

const links = reactive([
  "Help",
  "Status",
  "About",
  "Careers",
  "Blog",
  "Privacy",
  "Terms",
  "Text to speech",
  "Teams",
]);

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
  {
    id: 7,
    author: "Lessig",
    title: "ChatGPT, or: How I Learned to Stop Worrying and Love AI",
    date: "Nov 29",
    duration: "7",
    isMemberOnly: false,
    isBookAuthor: true,
  },
  {
    id: 8,
    author: "Lyman Stone",
    title: "How Many Hobbits? A Demographic Analysis of Middle Earth",
    date: "Dec 6",
    duration: "16",
    isMemberOnly: false,
  },
]);
</script>

<style scoped></style>
