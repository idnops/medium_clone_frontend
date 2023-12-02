<template>
  <div class="h-full w-[585px]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 585 462"
      width="585"
      height="462"
      preserveAspectRatio="xMidYMid meet"
      style="
        width: 100%;
        height: 100%;
        transform: translate3d(0px, 0px, 0px);
        content-visibility: visible;
      "
    >
      <g v-for="(row, index) in grid" :key="index">
        <g
          stroke-linecap="butt"
          stroke-linejoin="round"
          stroke-miterlimit="4"
          :transform="`matrix(1,0,0,1,${i * 23 + 15}, ${index * 27 + 35})`"
          v-for="(cell, i) in row"
          :key="i"
        >
          <g
            transform="scale(0.22, 0.22)"
            :opacity="getRandomNumber(1, 6) > 5 ? 1 : 0"
            :class="getRandomNumber(1, 6) > 5 ? 'cell' : ''"
          >
            <path
              d=" M46.82899856567383,0 C46.82899856567383,0 68.98500061035156,-59.518001556396484 68.98500061035156,-59.518001556396484 C68.98500061035156,-59.518001556396484 68.98500061035156,0 68.98500061035156,0 C68.98500061035156,0 77.947998046875,0 77.947998046875,0 C77.947998046875,0 77.947998046875,-72.30799865722656 77.947998046875,-72.30799865722656 C77.947998046875,-72.30799865722656 65.15799713134766,-72.30799865722656 65.15799713134766,-72.30799865722656 C65.15799713134766,-72.30799865722656 43.10300064086914,-12.890999794006348 43.10300064086914,-12.890999794006348 C43.10300064086914,-12.890999794006348 21.14900016784668,-72.30799865722656 21.14900016784668,-72.30799865722656 C21.14900016784668,-72.30799865722656 7.955999851226807,-72.30799865722656 7.955999851226807,-72.30799865722656 C7.955999851226807,-72.30799865722656 7.955999851226807,0 7.955999851226807,0 C7.955999851226807,0 17.020000457763672,0 17.020000457763672,0 C17.020000457763672,0 17.020000457763672,-59.518001556396484 17.020000457763672,-59.518001556396484 C17.020000457763672,-59.518001556396484 39.07500076293945,0 39.07500076293945,0 C39.07500076293945,0 46.82899856567383,0 46.82899856567383,0z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import anime from "animejs/lib/anime.es.js";

type Letter = {
  isRendered: boolean;
  isAnimated: boolean;
};

const grid = reactive<Letter[][]>(
  new Array(16).fill(
    new Array(25).fill({ isRendered: false, isAnimated: false })
  )
);

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * max) + min;
};

onMounted((): void => {
  anime({
    targets: ".cell",
    opacity: 1,
    loop: true,
    direction: "alternate",
    delay: anime.stagger(100, { from: 34 }),
  });
});
</script>
