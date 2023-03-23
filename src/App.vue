<script setup lang="ts">
import { RouterView } from 'vue-router'
import { MODALS_ID } from './dom-selectors/MODALS_ID'
import AboutModal from './features/about/components/AboutModal'
</script>

<template>
  <RouterView />
  <Teleport :to="MODALS_ID">
    <AboutModal />
  </Teleport>
</template>

<style scoped></style>
