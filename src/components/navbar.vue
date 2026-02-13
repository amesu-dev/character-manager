<script setup lang="ts">
import { v } from 'vue-router/dist/router-CWoNjPRp.mjs';

</script>

<template>
  <div class="navbar">
    <v-btn variant="plain" to="/hello">Character Manager</v-btn>

    <v-spacer></v-spacer>

    <v-btn variant="plain" to="/settings">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </div>
</template>

<style>
.navbar {
  background-color: #333;
  color: white;
  padding: auto 1rem;
  
  display: flex;
  align-items: center;
  height: 3rem;
}
</style>