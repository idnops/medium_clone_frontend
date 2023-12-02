<template>
  <div class="relative z-10 h-full overflow-hidden" v-if="isOpen" id="modal">
    <transition
      appear
      enter-active-class="transition-opacity duration-100"
      leave-active-class="transition-opacity duration-100"
      enter-from-class="opacity-0"
      leave-from-class="opacity-0"
    >
      <div class="fixed inset-0 bg-white bg-opacity-90"></div>
    </transition>

    <transition
      appear
      enter-active-class="transition-opacity transition-transform duration-300"
      leave-active-class="transition-opacity transition-transform duration-300"
      enter-from-class="opacity-0 scale-90"
      leave-from-class="opacity-0 scale-90"
    >
      <div
        class="fixed inset-0 w-screen overflow-hidden flex min-h-full justify-center items-center"
        @click="closeModal"
      >
        <div class="my-auto">
          <div class="bg-white rounded-sm shadow-lg relative w-[678px]">
            <div
              class="flex justify-between h-full min-h-[695px]"
              @click.stop=""
            >
              <KeepAlive>
                <component :is="view" v-model="model"></component>
              </KeepAlive>
            </div>
            <div class="absolute right-5 top-5">
              <button @click="closeModal">
                <Icon name="material-symbols-light:close" size="24" />
              </button>
            </div>
            <div class="modal-action flex gap-3">
              <button
                v-for="action in actions"
                @click="action.callback(model)"
                :class="{
                  'bg-green-600 text-white': action.type === 'primary',
                  'border border-black': action.type === 'outlined',
                }"
                class="rounded-full py-2 px-6 capitalize"
              >
                {{ action.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "../../stores/modal";
import { storeToRefs } from "pinia";

const modal = useModal();
const { isOpen, view, actions } = storeToRefs(modal);

const model = reactive({});

const closeModal = () => {
  modal.close();
};
</script>

<style scoped></style>
