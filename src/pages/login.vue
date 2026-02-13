<template>
  <TresCanvas
    clear-color="#000"
    window-size
    shadows
    style="position: absolute; width: 100vw !important; height: 100vh !important;"
  >
    <Donut />
  </TresCanvas>

  <div>
    <div>Login</div>

    <v-card
      class="login" variant="tonal" color="white"
    >
      <v-card-text>
        <v-text-field label="Username" outlined></v-text-field>
        <v-text-field label="Password" type="password" outlined></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: auto;

  background-color: #3F3F3F;
}

.login {
  position: absolute;
  top: calc(50vh - 150px);
  left: calc(50vw - 150px);
  animation: fadeInDown 1s ease both;
  width: 300px;

  /* background-color: rgba(63, 63, 63, 0.8) !important; */
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: perspective(200px) translate3d(0, 0, -100px);
  }
  to {
    opacity: 1;
    transform: perspective(200px) translate3d(0, 0, 0);
  }
}
</style>