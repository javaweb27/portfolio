<script setup lang="ts">
import ProjectItem from '../ProjectItem'
import { projectsListData as projects } from './ProjectsListData'
</script>

<template>
  <div class="grid gap-7 grid-cols-[repeat(auto-fit,minmax(270px,1fr))]">
    <ProjectItem v-for="proj in projects" :key="proj.name" v-bind="proj" />
  </div>
</template>
