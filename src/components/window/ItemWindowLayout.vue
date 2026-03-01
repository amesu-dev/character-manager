<template>

<div class="item-window__item-name">
    <span class="text-h6 text-truncate" :style="{ color: item?.color }">{{ item?.name || "Undefined" }}</span>
  </div>

  <div class="item-window__item-details">
    <div class="item-window__item-description text-grey-darken-1">{{ item?.description ?? "None" }}</div>
    <div class="item-window__item-stats">
      <div v-for="stat of Object.keys(item?.stats ?? {} as item_stat_t)">
          {{ generate_stat_string(stat as keyof item_stat_t) }}
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import type { IItem, item_stat_t } from '@/types/item';

interface Props {
  item?: IItem
}

export default {
  methods: {
    generate_stat_string(stat: keyof item_stat_t) {
      const value = ((this.$props as Props).item?.stats?.[stat] ?? NaN).toString();
      const f_part = value.replace(/^[^-]/i, (substring: string) => ('+' + substring));

      const localized_stat = this.$t(`item.stat.${stat}`);
      return `${f_part} ${localized_stat}`;
    }
  }
}
</script>

<script lang="ts" setup>
defineProps<Props>()
</script>