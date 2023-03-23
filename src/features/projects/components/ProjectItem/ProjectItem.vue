<script setup lang="ts">
export type ProjectItemModel = {
  imgSrc: string
  name: string
  links: {
    demo: string
    sourceCode: string
  } | null
  techs: { frontend: string[]; backend: string[] }
}

const props = defineProps<ProjectItemModel>()

const projectName = props.name.split('-').join(' ')

const mixedTechnologies = [...new Set(props.techs.frontend.concat(props.techs.backend))]
</script>

<template>
  <article class="card card-compact bg-base-100 shadow-xl">
    <figure>
      <img :src="props.imgSrc" :alt="projectName" class="object-contain object-center" />
    </figure>
    <div class="card-body">
      <h2 class="card-title capitalize">
        {{ projectName }}
      </h2>
      <ul class="card-actions justify-end grow">
        <li v-for="tech in mixedTechnologies" :key="tech" class="badge badge-outline">
          {{ tech }}
        </li>
      </ul>
      <div class="card-actions justify-end">
        <a
          v-if="props.links"
          :href="props.links.sourceCode"
          target="_blank"
          class="btn btn-secondary btn-outline"
          >Source code</a
        >
        <a
          v-if="props.links"
          :href="props.links.demo"
          target="_blank"
          class="btn btn-primary"
          >Demo</a
        >
        <div v-else class="self-end justify-self-end flex">
          <p
            class="justify-self-end btn btn-ghost !bg-inherit cursor-auto !transform-none !animate-none"
          >
            You are here
          </p>
        </div>
      </div>
    </div>
  </article>
</template>
