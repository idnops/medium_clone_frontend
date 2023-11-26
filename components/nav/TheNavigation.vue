<template>
    <div 
        class="border-b border-slate-800 fixed w-full top-0 transition-colors duration-500 z-10" 
        :class="scrolled ? 'bg-white' : 'bg-amber-400'"
    >
        <div class="container mx-auto">
            <div class="py-4 flex justify-between items-center">
                <div>
                    <TheLogo />
                </div>
                <div class="flex gap-6 items-center">
                    <NuxtLink to="/" class="text-sm">Our story</NuxtLink>
                    <NuxtLink to="/" class="text-sm">Membership</NuxtLink>
                    <NuxtLink to="/" class="text-sm">Write</NuxtLink>
                    <NuxtLink to="/" class="text-sm">Sign in</NuxtLink>
                    <button 
                        class="rounded-full text-white px-5 py-2.5 text-sm transition-colors duration-500" 
                        :class="scrolled ? 'bg-green-700' : 'bg-black'"
                    >
                        Get started
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import TheLogo from "./TheLogo.vue";

const scrolled = ref(false)

const handleScroll = (e: any) => {
    if(window.scrollY > 370){
        scrolled.value = true
    }else{
        scrolled.value = false
    }
    
}

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>

</style>