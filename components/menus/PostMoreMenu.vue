<template>
  <div class="rounded">
    <ul class="flex items-stretch flex-col py-2">
      <li class="py-2 px-5 text-sm">
        <button
          class="text-neutral-500 hover:text-neutral-800"
          @click="$emit('mute-author')"
        >
          Mute this author
        </button>
      </li>
      <li class="py-2 px-5 text-sm">
        <button class="text-neutral-500 hover:text-neutral-800">
          Mute this publication
        </button>
      </li>
      <li class="py-2 px-5 text-sm">
        <button class="text-neutral-500 hover:text-neutral-800">Report</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
