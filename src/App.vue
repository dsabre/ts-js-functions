<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>


  <header>
    <Sidebar/>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

