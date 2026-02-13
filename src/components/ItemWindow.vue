<template>
  <div
    class="item-window border"
    ref="item-window__ref"
    :style="{ opacity: visible ? 1 : 0 }"
  >
    <div
      class="item-window__head"
    >
      <span style="font-size: 12px; padding-left: 4px; color: white" >Item information</span>
      <v-spacer></v-spacer>
      <v-icon
        icon="mdi-window-close"
        size="16" color="white"
        @click="$emit('close')"
      />
    </div>
    <div class="item-window__body">
      <div class="item-window__item-name">
        <span class="text-h6 text-truncate" :style="{ color: item?.color }">{{ item?.name || "Undefined" }}</span>
      </div>
      
      <v-responsive :aspect-ratio="4/1" inline>
        <div class="item-window__item-details">
          <div class="item-window__item-avatar">
            <div class="item-window__item-type text-uppercase border text-truncate">{{ item?.type ?? "None" }}</div>
          </div>
          <div class="item-window__item-description text-grey-darken-1">{{ item?.description ?? "None" }}</div>
        </div>
      </v-responsive>
    </div>

  </div>
</template>

<script lang="ts">
import type { IItem } from '@/types/item';

export default {
  data: () => ({
    is_dragging: false,
    mouse_offset: { x: 0, y: 0 },
    block: {} as HTMLElement,
  }),
  methods: {
    set_position(x: number, y: number) {
      if (!this.block.style) this.block = this.$refs["item-window__ref"] as HTMLElement;
      
      let new_y = y - this.block.clientHeight / 2;

      if (new_y < 12) new_y = 12;
      if (new_y + this.block.clientHeight + 12 > window.innerHeight)
        new_y = window.innerHeight - this.block.clientHeight - 12;

      this.block.style.left = `${x + 14}px`;
      this.block.style.top = `${new_y}px`;
    }
  },
  watch: {
    begin_position(new_value, old_value) {
      this.set_position(new_value.x, new_value.y);
    }
  }
}
</script>

<script lang="ts" setup>
defineProps<{
  begin_position?: { x: number, y: number }
  visible: boolean,
  item?: IItem
}>()

defineEmits<{
  (e: 'close'): void,
}>();
</script>

<style>
.item-window {
  position: absolute;
  top:150px;
  left:150px;

  width: 500px;
  height: 400px;

  background-color: var(--background-color);
  z-index: 999999;

  border-radius: 8px;
  overflow: hidden;

  transition: opacity 0.15s linear;
}

.item-window__head {
  position: relative;
  width: 100%;
  height: 18px;
  
  padding: 0 4px;
  box-sizing: border-box;
  
  display: flex;
  align-items: center;
  
  background-color: #1c1c1c;
  user-select: none;
}
.item-window__head span, .item-window__head div {
  pointer-events: none;
}

.item-window__body {
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.item-window__item-name {
  padding: 0 16px;
  margin: 12px 0 0;
}
.item-window__item-name, .item-window__item-name * {
  display: block;
  width: 100%;
  overflow: hidden;
}

.item-window__item-details {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
.item-window__item-avatar {
  width: 25%;
  max-width: 200px;
  box-sizing: border-box;

  padding: 4px 0 0 16px;
  flex-grow: 1;
}
.item-window__item-type {
  background: var(--background-color);
  
  width: 100%;
  box-sizing: border-box;
  text-align: center;

  border-top: none !important;
  border-radius: 0 0 8px 8px;
}

.item-window__item-description {
  line-height: 1.15rem;
  max-width: 75%;

  display: -webkit-box;
  display: -moz-box;
  display: box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;  
  -webkit-line-clamp: 7;
  -moz-line-clamp: 7;
  line-clamp: 7;
}
</style>


