<template>
  <v-main>
    <router-view />
  </v-main>
</template>

<style>
:root {
  --background-color: #252525;
  --text-color: white;
}

html, body, #app, main {
  height: 100%;
  width: 100%;
  
  margin: 0;
  padding: 0;

  font-family: 'Roboto', sans-serif;
  background-color: var(--background-color);

  overflow: hidden;
}
</style>