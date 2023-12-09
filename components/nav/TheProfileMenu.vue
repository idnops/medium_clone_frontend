<template>
  <div class="h-8 w-8">
    <UiPopup placement="bottom-end" type="click" no-arrow :offset="[8, 8]">
      <template v-slot:activator="{ setRef }">
        <button :ref="(el) => setRef(el)">
          <div class="relative">
            <img src="/images/profile.png" alt="" class="rounded-full" />
            <div
              class="w-8 h-8 absolute rounded-full top-0 left-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] hover:bg-black/10"
            ></div>
          </div>
        </button>
      </template>

      <template v-slot:content>
        <div class="w-[264px]">
          <div class="py-4 border-b border-neutral-100" v-if="auth.user">
            <NuxtLink to="/">
              <div
                class="py-2 px-6 text-sm text-neutral-500 hover:text-neutral-800"
              >
                <div class="flex items-center">
                  <ProfileIcon />
                  <div class="ml-4">
                    <p class="max-h-5 line-clamp-1">Profile</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/">
              <div
                class="py-2 px-6 text-sm text-neutral-500 hover:text-neutral-800"
              >
                <div class="flex items-center">
                  <LibraryIcon />
                  <div class="ml-4">
                    <p class="max-h-5 line-clamp-1">Library</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/">
              <div
                class="py-2 px-6 text-sm text-neutral-500 hover:text-neutral-800"
              >
                <div class="flex items-center">
                  <StoryIcon />
                  <div class="ml-4">
                    <p class="max-h-5 line-clamp-1">Stories</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/">
              <div
                class="py-2 px-6 text-sm text-neutral-500 hover:text-neutral-800"
              >
                <div class="flex items-center">
                  <StatsIcon />
                  <div class="ml-4">
                    <p class="max-h-5 line-clamp-1">Stats</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="py-4 border-b border-neutral-100" v-if="!auth.user">
            <div class="pt-4 px-6 pb-2 text-center">
              <h2 class="font-medium leading-5">Get started on Medium</h2>
              <div class="mt-6">
                <button
                  @click="handleSignUp"
                  class="py-[5px] px-[12px] border border-green-600 bg-green-600 rounded-full text-white text-sm w-full hover:bg-green-800 hover:border-green-800"
                >
                  Sign up
                </button>
              </div>
              <div class="mt-4">
                <button
                  @click="handleSignIn"
                  class="py-[5px] px-[12px] border border-neutral-900 rounded-full text-sm w-full"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
          <div class="py-[18px] border-b border-neutral-100" v-if="auth.user">
            <NuxtLink to="/">
              <div class="py-[6px] px-6 text-neutral-600 text-sm">
                <div class="flex items-center justify-between">Settings</div>
              </div>
            </NuxtLink>
            <NuxtLink to="/">
              <div class="py-[6px] px-6 text-neutral-600 text-sm">
                <div class="flex items-center justify-between">
                  Refine recommendations
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/">
              <div class="py-[6px] px-6 text-neutral-600 text-sm">
                <div class="flex items-center justify-between">
                  Manage publications
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/">
              <div class="py-[6px] px-6 text-neutral-600 text-sm">
                <div class="flex items-center justify-between">Help</div>
              </div>
            </NuxtLink>
          </div>
          <div class="py-[18px] border-b border-neutral-100">
            <NuxtLink to="/">
              <div class="py-[6px] px-6 text-neutral-600 text-sm">
                <div class="flex items-center justify-between">
                  Become a Medium member
                  <StarIcon class="w-4 h-4" />
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/">
              <div class="py-[6px] px-6 text-neutral-600 text-sm">
                <div class="flex items-center justify-between">
                  Create a Mastodon account
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/">
              <div class="py-[6px] px-6 text-neutral-600 text-sm">
                <div class="flex items-center justify-between">
                  Apply for author verification
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/">
              <div class="py-[6px] px-6 text-neutral-600 text-sm">
                <div class="flex items-center justify-between">
                  Apply to the Partner Program
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/">
              <div class="py-[6px] px-6 text-neutral-600 text-sm">
                <div class="flex items-center justify-between">
                  Gift a membership
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="py-[18px] border-b border-neutral-100" v-if="auth.user">
            <button
              class="text-left hover:text-neutral-800 text-neutral-500"
              @click="handleSignOut"
            >
              <div class="py-[6px] px-6 text-sm">
                <div class="mb-1">Sign out</div>
                <p class="max-h-5 line-clamp-1 text-[13px] leading-5">
                  ay••••••••@gmail.com
                </p>
              </div>
            </button>
          </div>
        </div>
      </template>
    </UiPopup>
  </div>
</template>

<script setup lang="ts">
import UiPopup from "../ui/UiPopup.vue";
import ProfileIcon from "./icons/ProfileIcon.vue";
import LibraryIcon from "./icons/LibraryIcon.vue";
import StoryIcon from "./icons/StoryIcon.vue";
import StatsIcon from "./icons/StatsIcon.vue";
import StarIcon from "./icons/StarIcon.vue";
import SignUp from "../auth/SignUp.vue";
import SignIn from "../auth/SignIn.vue";

const auth = useAuth();
const modal = useModal();

const handleSignUp = (): void => {
  modal.open(SignUp);
};

const handleSignIn = (): void => {
  modal.open(SignIn);
};

const handleSignOut = (): void => {
  auth.removeUser();
  navigateTo("/");
};
</script>
