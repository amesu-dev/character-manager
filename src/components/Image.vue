<template>
  <v-img :aspect-ratio="aspectRatio" :cover="cover" :src="src">
    <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
  </v-img>
</template>

<script lang="ts" setup>
defineProps<{
  aspectRatio?: number | string;
  src?: string;
  cover?: boolean;
}>();
</script>