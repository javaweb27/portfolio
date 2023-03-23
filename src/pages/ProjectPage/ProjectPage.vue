<script setup lang="ts">
import ProjectsList from '@/features/projects/components/ProjectsList'
import SideBar from '@/features/projects/layouts/SideBar'
</script>

<template>
  <SideBar>
    <div class="px-[calc(4vw-6px)] py-7 h-full">
      <h1 class="text-4xl mb-7 text-center">My projects</h1>
      <ProjectsList />
    </div>
  </SideBar>
</template>
