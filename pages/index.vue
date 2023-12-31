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
                <HomeFeedPost
                  v-for="post in posts"
                  :key="post.id"
                  :post="post"
                />
              </div>
            </section>
            <aside class="row-start-1 col-start-9 col-span-4">
              <TheSidebar :tags="tags" :links="links" />
            </aside>
            <div class="min-h-screen"></div>
          </div>
        </div>
      </div>

      <template v-slot:main>
        <div class="pt-6"></div>
        <TheChipScroller />
        <div class="pt-[50px]">
          <MainFeedPost
            v-for="(post, i) in posts"
            :key="post.id"
            :post="post"
            :index="i"
          />
        </div>
      </template>

      <template v-slot:aside>
        <div>
          <SidebarList title="Staff Picks" url="/" link="See the full list">
            <SidebarPostItem
              v-for="post in posts.slice(0, 3)"
              :key="post.id"
              :post="post"
            />
          </SidebarList>

          <SidebarList
            title="Recommended topics"
            url="/"
            link="See more topics"
          >
            <div class="flex flex-wrap items-start mb-4">
              <div class="flex mb-[10px]" v-for="(tag, i) in tags" :key="i">
                <NuxtLink to="/" class="mr-2">
                  <div
                    class="border border-neutral-100 rounded-full bg-neutral-100 px-4 py-2 text-sm"
                  >
                    {{ tag }}
                  </div>
                </NuxtLink>
              </div>
            </div>
          </SidebarList>

          <SidebarList
            title="Who to follow"
            url="/"
            link="See more suggestions"
          >
            <div class="mb-4">
              <SidebarUserItem
                v-for="user in users"
                :key="user.id"
                :name="user.name"
                :bio="user.bio"
                :photo-url="user.photoUrl"
                :is-book-author="user.isBookAuthor"
              />
            </div>
          </SidebarList>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import TheTrendingPosts from "~/components/main/TheTrendingPosts.vue";
import TheHero from "../components/main/TheHero.vue";
import type { PostDto } from "../components/post/dto/Post.dto";
import TheSidebar from "~/components/main/TheSidebar.vue";
import TheChipScroller from "~/components/main/TheChipScroller.vue";
import HomeFeedPost from "~/components/post/HomeFeedPost.vue";
import MainFeedPost from "~/components/post/MainFeedPost.vue";
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
    title: "Upcoming Vue 3 “Vapor Mode”",
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
    isMemberOnly: true,
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

const users = reactive([
  {
    id: 1,
    name: "Arpit Chandak",
    bio: "Freelance Product Designer who loves sharing experiences",
    photoUrl: "https://picsum.photos/id/5/200/300",
  },
  {
    id: 2,
    name: "Alexander Obregon",
    bio: "Software Engineer, fervent coder & writer. Devoted to learning & assisting others. Connect on LinkedIn: https://www.linkedin.com/in/alexander-obregon-97849b229/",
    photoUrl: "https://picsum.photos/id/7/200/300",
  },
  {
    id: 3,
    name: "Over Protocol",
    bio: "Layer 1 providing lightweight full nodes. Running a node on your device is now easier than ever.",
    photoUrl: "https://picsum.photos/id/9/200/300",
    isBookAuthor: true,
  },
]);
</script>

<style scoped></style>
