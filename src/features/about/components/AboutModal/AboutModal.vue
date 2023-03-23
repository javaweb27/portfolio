<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAboutModalStore } from '../../stores/useAboutModalStore'
import { tabsData } from './tabsData'

const currentTabRef = ref(tabsData[0].title)

const CurrentContent = computed(() => {
  return tabsData.find(({ title }) => title === currentTabRef.value)!.content
})

const store = useAboutModalStore()
</script>

<template>
  <input type="checkbox" :checked="store.isShow" class="modal-toggle" />
  <div class="modal py-6">
    <div class="relative modal-box h-4/5">
      <label @click="store.hide()" class="absolute btn btn-sm btn-circle right-2 top-2">
        ✕
        <!-- <BiX class="w-full h-full p-1" /> -->
      </label>
      <div class="rounded-md tabs bg-gray-200/60 dark:bg-gray-700/60">
        <a
          v-for="tab in tabsData"
          :key="tab.title"
          :class="{
            'tab tab-lifted text-[.9rem]': true,
            'tab-active': currentTabRef === tab.title,
          }"
          @click="currentTabRef = tab.title"
          >{{ tab.title }}</a
        >
      </div>
      <h3 class="mt-2 text-lg font-bold">{{ currentTabRef }}</h3>
      <CurrentContent />
    </div>
  </div>
</template>
