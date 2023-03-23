<script setup lang="ts">
const PlatziCourseUrl = 'https://platzi.com/cursos/programacion-basica/'
const jonmirchaUrl = 'https://www.youtube.com/@jonmircha'
const KikoPalomaresUrl = 'https://www.youtube.com/@kikopalomares'
</script>

<template>
  <p class="py-4 leading-loose">
    Hi, I am Javier and I am a React and Node.js web dev, my experience is based on
    projects I did to practice my skills, YouTube tutorials in Spanish from
    <a class="link link-secondary" :href="jonmirchaUrl" target="_blank" rel="noreferrer"
      >jonmircha</a
    >
    and
    <a
      class="link link-secondary"
      :href="KikoPalomaresUrl"
      target="_blank"
      rel="noreferrer"
      >Kiko Palomares</a
    >
    that I took to learn, and Platzi's "<a
      class="link link-secondary"
      :href="PlatziCourseUrl"
      target="_blank"
      rel="noreferrer"
      >New free course on basic programming</a
    >" course in Spanish.
  </p>
</template>
