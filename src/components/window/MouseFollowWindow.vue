<template>
  <div
    class="item-window border"
    ref="item-window__ref"
    :style="{ opacity: visible ? 1 : 0 }"
  >
    <div class="item-window__body">
      <slot>
        
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
interface Props {
  begin_position?: { x: number, y: number }
  visible: boolean,
}

export default {
  data: () => ({
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
    },
  },
  watch: {
    begin_position(new_value, old_value) {
      this.set_position(new_value.x, new_value.y);
    }
  }
}
</script>

<script lang="ts" setup>

defineProps<Props>()

defineEmits<{
  (e: 'close'): void,
}>();
</script>

<style>
.item-window {
  position: absolute;
  top:150px;
  left:150px;

  width: max-content;
  min-width: 300px;
  max-width: 500px;
  
  height: max-content;
  min-height: 100px;

  background-color: var(--background-color);
  z-index: 999999;

  border-radius: 8px;
  overflow: hidden;

  transition: opacity 0.15s linear;
}
.item-window__body {
  display: block;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  padding: 6px 8px;
}

/* .item-window__item-name {
  padding: 0 4px;
} */
.item-window__item-name, .item-window__item-name * {
  display: block;
  width: 100%;
  overflow: hidden;
}

.item-window__item-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.item-window__item-description {
  line-height: 1.15rem;
}
</style>


