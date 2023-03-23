<script setup lang="ts">
import AboutModalBtn from '@/features/about/components/AboutModalBtn'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <!-- Page content here -->
      <slot />
      <label
        htmlFor="my-drawer"
        className="sticky z-20 bottom-4 left-4 drawer-button btn btn-accent"
      >
        Menu
      </label>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul
        className="menu p-4 w-80 bg-base-100 text-base-content rounded-[0px_16px_16px_0px]"
      >
        <li className="menu-title">
          <span>Menu</span>
        </li>
        <li>
          <RouterLink to="/" className="flex justify-between"> Intro </RouterLink>
        </li>
        <li>
          <RouterLink to="/projects" className="active"> My projects </RouterLink>
        </li>
        <li className="menu-title pt-7">
          <span>Me</span>
        </li>
        <li>
          <AboutModalBtn />
        </li>
      </ul>
    </div>
  </div>
</template>
