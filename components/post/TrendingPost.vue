<template>
  <div>
    <div class="flex items-start mb-6">
      <div class="mr-4 relative -top-[10px] w-10 flex-[0_0_auto]">
        <span
          class="text-[32px] leading-[38px] text-slate-100 font-medium tracking-[0.014em]"
          >0{{ props.index + 1 }}</span
        >
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-sm flex flex-row items-center">
          <NuxtLink to="/" class="h-[23px] flex items-end">
            <img
              :src="`https://picsum.photos/id/${props.index * 23}/200/300`"
              alt=""
              class="w-5 h-5 rounded-md"
            />
          </NuxtLink>
          <div class="flex items-center flex-wrap ml-2">
            <div>
              <UiPopup placement="right">
                <template v-slot:content>
                  <AuthorCard :author="props.author" />
                </template>

                <template v-slot:activator="{ setRef }">
                  <div :ref="(el) => setRef(el)" class="flex items-center">
                    <div>
                      <NuxtLink to="/" class="pr-[2px] text-[13px]">
                        {{ props.author }}
                      </NuxtLink>
                    </div>
                    <div v-if="props.isBookAuthor">
                      <div class="mr-[2px]">
                        <BookAuthorIcon />
                      </div>
                    </div>
                  </div>
                </template>
              </UiPopup>
            </div>

            <div v-if="props.community" class="flex items-center">
              <div class="text-slate-700 pr-[2px] text-[13px] leading-4">
                in
              </div>
              <div class="text-[13px] leading-4" v-if="props.community">
                <NuxtLink to="/"> {{ props.community }} </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="font-semibold leading-5 max-h-[70px] line-clamp-2">
          {{ props.title }}
        </div>
        <div
          class="text-slate-700 text-[13px] leading-5 flex items-center gap-2 font-light"
        >
          <span> {{ props.date }} · {{ props.duration }} min read </span>
          <Icon
            name="streamline:star-2-solid"
            class="text-amber-400"
            v-if="props.isMemberOnly"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthorCard from "../cards/AuthorCard.vue";
import BookAuthorIcon from "../main/Icons/BookAuthorIcon.vue";

interface Props {
  index: number;
  author: string;
  community?: string;
  title: string;
  date: string;
  duration: string;
  isMemberOnly: boolean;
  isBookAuthor?: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
