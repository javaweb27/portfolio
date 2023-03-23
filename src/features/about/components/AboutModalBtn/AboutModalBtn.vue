<script setup lang="ts">
import { useAboutModalStore } from '../../stores/useAboutModalStore'

const store = useAboutModalStore()
</script>

<template>
  <label @click="store.show()" class="btn text-white">About me</label>
</template>
