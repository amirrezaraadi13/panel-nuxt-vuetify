<template>
    <v-app id="inspire">
      <PanelSideBar />
      <v-main class="d-flex " style="min-height: 300px; max-height: 750px">
        <v-container class="py-8 px-15 justify-center" fluid>
          <slot />
          <RouterView /> 
        </v-container>
      </v-main>
    </v-app>
  </template>
<script setup>
definePageMeta({
    middleware : 'auth'
 })
import PanelSideBar from '../components/Panel/sideBar.vue';
import { ref } from 'vue'

const drawer = ref(null)
</script>
