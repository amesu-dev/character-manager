<template>
  <v-responsive
    :aspect-ratio="3/3.5" inline width="calc(50% - 8px)"
    class="inventory-item rounded-lg"
  >
    <div
      class="inventory-item__overlay"
    >
    </div>
    <div
      class="inventory-item__container d-flex flex-column align-center border rounded-lg overflow-hidden h-100 w-100"
    >
    
      <!-- The card -->
      <v-responsive
        aspect-ratio="1" inline
        class="w-100" style="margin-top: 8px;"
        content-class="position-relative"
      >
        <div class="inventory-item__overlay flex-column justify-center" style="z-index: 1;">
          <div class="inventory-item__type">
            <span class="text-bold text-uppercase">{{ $t(`item.type.${item.type}`) }}</span>
          </div>
          <v-spacer></v-spacer>
          <div class="w-100 d-flex justify-end">
            <span class="inventory-item__amount text-end text-h5 text-bold">x{{ amount }}</span>
          </div>
        </div>
        
        <Image aspect-ratio="1" cover :src="item.icon" width="100%" />
      </v-responsive>
    
      <div class="inventory-item__details d-flex flex-column align-center">
        <span class="inventory-item__title text-subtitle-1 text-bold text-truncate" :style="{ color: item.color }">{{ item.name }}</span>
        <span class="inventory-item__description text-grey-darken-1">{{ item.description }}</span>
      </div>
    </div>
  </v-responsive>
</template>

<script lang="ts" setup>
import type { IItem } from '@/types/item';

defineProps<{
  item: IItem,
  amount: number
}>()
</script>

<script lang="ts">
export default {
}
</script>

<style>
.inventory-item {
  transition: all 0.2s linear;
  background-color: var(--background-color);
}
.inventory-item:hover {
  transform: translateY(-8px);

  -webkit-box-shadow: 0px 3px 8px 2px rgba(239, 239, 239, 0.2);
  -moz-box-shadow: 0px 3px 8px 2px rgba(239, 239, 239, 0.2);
  box-shadow: 0px 3px 8px 2px rgba(239, 239, 239, 0.2);
}

.inventory-item__container {
  position: relative;

  padding: 8px 16px !important;
  margin-bottom: 4px;

  /* width: calc(50% - 8px); */
  box-sizing: border-box;
}

.inventory-item__details {
  margin-top: 12px;
  width: 100%;

  text-align: justify;
  overflow: hidden;
}

.inventory-item__type {
  position: relative;
  background-color: var(--background-color);
  padding: 0 8px;

  border-radius: 0 0 8px 8px;

  font-size: 1.15rem;
}
.inventory-item__type::before,
.inventory-item__type::after {
  content: '';
  width: 8px;
  height: 8px;
  box-sizing: content-box;
  
  position: absolute;
  top: -8px;
  
  border-top: 8px var(--background-color) solid;
  
}
.inventory-item__type::before {
  left: -8px;
  
  border-right: 8px var(--background-color) solid;
  border-top-right-radius: 16px;
}
.inventory-item__type::after {
  right: -8px;
  
  border-left: 8px var(--background-color) solid;
  border-top-left-radius: 16px;
}

.inventory-item__amount {
  justify-self: end;
  
  background-color: var(--background-color);
  padding: 0 8px 0 12px;

  border-top-left-radius: 8px;
}

.inventory-item__title {
  display: block;
  width: 100%;

  text-align: center;
  line-height: 1.2 !important;
}
.inventory-item__description {
  font-size: 0.845rem;
  font-weight: 400;
  line-height: 1.1 !important;
  text-align: center;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  display: -webkit-box;
  display: -moz-box;
  display: box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;  
  -webkit-line-clamp: 3;
  -moz-line-clamp: 3;
  line-clamp: 3;
}

.inventory-item__overlay, .inventory-item__blur {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}
.inventory-item__overlay {
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}
</style>