<template>
  <v-main>
    <router-view />
  </v-main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
:root {
  --background-color: #252525;
  --text-color: white;
}

html, body, #app, main {
  height: 100%;
  width: 100%;
  
  margin: 0;
  padding: 0;

  /* font-family: 'Ubuntu Mono', monospace; */
  font-family: 'Roboto', sans-serif;
  background-color: var(--background-color);

  overflow: hidden;
}
</style>