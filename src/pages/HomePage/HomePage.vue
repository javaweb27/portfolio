<script setup lang="ts">
import AboutModalBtn from '@/features/about/components/AboutModalBtn'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="home" className="flex items-center justify-around h-screen">
    <div className="p-1">
      <h1 className="mb-4 text-center text-7xl">
        Hi <br />
        I am Javier <br />
        Web dev
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6">
        <AboutModalBtn />

        <RouterLink
          to="/projects"
          className="gap-1 btn btn-success whitespace-nowrap flex-nowrap"
        >
          My projects
        </RouterLink>
      </div>
    </div>
  </section>
</template>
