<template>
   <!-- Camera Setup -->
  <TresPerspectiveCamera
    :position="[0, 2, 4]"
    :look-at="[0, 2, 0]"
    cast-shadow
  />

  <!-- <TresSpotLight
    :args="['#ffffff', 100, 1000, Math.PI / 2, 0.9, 1.4]"
    :look-at="[0, 2, 0]"
    :position="[0, 5, 7]"
  /> -->
  <TresPointLight
    :args="['#ffffff', 100, 1000, 1]"
    :position="[0, 15, 21]"
  />



  <!-- The Donut -->
  <TresMesh
    ref="donutRef"
    :position="[0, 2, 0]"
    :cast-shadow="true" :receive-shadow="true"
    :rotation="[-Math.PI / 3, 0, 0]"
  >
    <TresIcosahedronGeometry :args="[1, 0]" />
    <TresMeshStandardMaterial
      color="#7F13B5"
      :metalness="0.3"
      :roughness="0.7"
    />
  </TresMesh>

  <TresMesh
    :position="[0, 0, 0]"
    :rotation="[-Math.PI / 2, 0, 0]"
    :cast-shadow="false" :receive-shadow="true"
  >
    <!-- <TresIcosahedronGeometry :args="[1, 0]" /> -->
    <TresPlaneGeometry :args="[1000, 1000]" />
    <TresMeshStandardMaterial
      color="#85371E"
      :metalness="0.3"
      :roughness="0.7"
    />
  </TresMesh>

  <primitive v-if="rig" :object="rig" :position="[2, 2, 0]" />

  <!-- <TresMesh :position="[2, 1, 0]">
     <Tres
    <TresMeshStandardMaterial color="#0f4c5c" roughness="0.5" metalness="0.1" />
  </TresMesh> -->

  <!-- Visual Helpers -->
  <TresAxesHelper />
  <TresGridHelper />
</template>

<script setup lang="ts">
import { useLoop, useTresContext } from '@tresjs/core';
import { useGLTF, useAnimations } from '@tresjs/cientos';
import { ref } from 'vue';

const donutRef = ref();
const { state: model, nodes } = useGLTF('/models/candle.glb');

const animations = computed(() => model.value?.animations || []);
const rig = computed(() => nodes.value["_rootJoint"]);
console.log('nodes', nodes);
console.log('model', model);

console.log('animations', animations);
console.log('rig', rig);

const { actions } = useAnimations(animations, rig);
</script>

<style>

</style>