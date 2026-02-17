<template>
  <ItemWindow
    ref="item-window__ref_component"
    style="pointer-events: none;"
    :item="cached_items[selected_item]"
    :visible="item_window.is_visible"
    :begin_position="item_window.begin_position"
  >
  
  </ItemWindow>
  
  <div v-if="is_loading" class="loading">
    <p>Loading...</p>
    <v-progress-circular
      color="primary"
      indeterminate
      :size="32"
    />
  </div>

  <div v-else>

    <div class="character-page">
      <div class="character">

        <div class="character__header bg-grey-darken-4">
          <div class="character__avatar">
            <v-avatar size="112">
              <Image :src="character.avatar" />
            </v-avatar>
          </div>
  
          <div class="character__overview">
            <span class="text-h4">{{ character.name }}</span>
    
            <!-- Health bar -->
            <v-progress-linear
              v-model="character.health"
              :max="character.max_health"
              color="green"
              height="16"
            >
              <small>{{ character.health }} / {{ character.max_health }}</small>
            </v-progress-linear>
            
            <!-- Mana bar -->
            <v-progress-linear
              v-model="character.mana"
              :max="character.max_mana"
              color="blue"
              height="16"
            >
              <small style="justify-self: start">{{ character.mana }} / {{ character.max_mana }}</small>
            </v-progress-linear>
          </div>
        </div>
        <div class="character__details">
          <div class="character__stats">
            <v-card v-for="(value, key) in character.base_stats" :key="key" class="character__stat" :ripple="false" variant="outlined">
              <span class="stat__name">{{ $t(`stat.${key}`).toUpperCase() }}</span>
              <span class="stat__value">{{ value }}</span>
            </v-card>
          </div>

          <v-divider class="border-opacity-50" style="margin: 24px auto;">{{ $t('item.label') }}</v-divider>

          <div class="inventory">
            <span
              v-if="!character.inventory.length"
              class="text-h4 text-center text-grey"
            >{{ $t('item.no_items') }}</span>

            <ItemCard
              v-for="inv_item in character.inventory" :key="inv_item.id"
              :item="(cached_items[inv_item.id] as IItem)" :amount="inv_item.amount"
              @mouseenter="() => selected_item = inv_item.id"
              @mouseleave="() => { item_window.is_visible = false; selected_item = '' }"
              @mousemove="move_iwindow"
              @keydown="(e: KeyboardEvent) => { console.log('down', e); item_window.is_visible = e.shiftKey }"
              @keyup="(e: KeyboardEvent) => item_window.is_visible = e.shiftKey"
            />
          </div>
        </div>

      </div>
    </div>
    <div class="group-list">
  
    </div>

  </div>
</template>

<script setup lang="ts">
if (window.innerWidth < 700) {
  throw new Error("Character page is not available on mobile devices now.");
}
</script>

<script lang="ts">
import type { id_t } from '@/types/general'
import type { ICharacter } from '@/types/character'
import type { IItem } from '@/types/item'

export default {
  data() {
    return {
      is_loading: true,
      item_window: {
        is_visible: false,
        begin_position: { x: 0, y: 0 },
        is_shift_down: false,
      },

      id: useRoute().params.id,
      character: {} as ICharacter,
      cached_items: {} as { [key: id_t]: IItem },
      cached_skills: {} as { [key: id_t]: IItem },

      selected_item: "" as id_t,
    }
  },

  async beforeMount() {
    this.character = await fetch(`http://localhost:8000/api/character/${this.id}`)
      .then(res => res.json(), err => err);
    
    if ("message" in this.character) useRouter().push('/404');
    
    const items = await fetch(`http://localhost:8000/api/item?ids=${this.character.inventory.map(i => i.id).join(",")}`)
      .then(res => res.json(), err => err);

    if ("message" in items) throw new Error("Can't fetch items!");
    for (const item of (items as IItem[])) this.cached_items[item._id] = item;

    const skills = await fetch(`http://localhost:8000/api/skill?ids=${this.character.skills.map(s => s.id).join(",")}`)
      .then(res => res.json(), err => err);

    console.log(this.character);
    this.is_loading = false;
  },
  mounted() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      this.item_window.is_shift_down = e.shiftKey;
    });
    window.addEventListener('keyup', (e: KeyboardEvent) => {
      this.item_window.is_shift_down = e.shiftKey;
    });
  },

  methods: {
    // Shows item window at corrected passed (x, y)
    move_iwindow(event: MouseEvent) {
      this.item_window.begin_position = { x: event.pageX, y: event.pageY };

      
      this.update_iwindow()
    },
    update_iwindow() {
      if (this.item_window.is_shift_down && this.selected_item.length && !this.item_window.is_visible)
        this.item_window.is_visible = true;
      else if (!(this.item_window.is_shift_down && this.selected_item.length) && this.item_window.is_visible)
        this.item_window.is_visible = false;
    }
  },
  watch: {
    'item_window.is_shift_down'(new_value, old_value) {
      if (old_value === new_value) return;

      this.update_iwindow();
    }
  }
}
</script>

<style lang="css">
.loading {
  position: fixed !important;
  right: 16px;
  bottom: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  animation: fadeIn 2s ease-in-out infinite;
}

@keyframes fadeIn {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}

.character-page {
  min-width: 450px;
  max-width: 632px;
  padding: 0 16px;
  
  box-sizing: border-box;
}

.character {
  position: relative;
  
  width: 100%;
  margin-left: 0 auto;

  height: 150vh;
}

.character__header {
  position: sticky;
  top: 0; /** fix on the top of character */
  z-index: 10;

  display: flex;
  flex-direction: row;
  gap: 16px;
  
  margin-bottom: 16px;

  padding: 16px;
  border-radius: 0 0 16px 16px;
}

.character__overview {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;

  gap: 8px;
}

.character__stats {
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 18px;
}

.character__stat {
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  
  min-width: fit-content;
  max-width: 60%;
  width: 30%;

  box-sizing: border-box;
  padding: 6px 16px !important;
  user-select: none;

  transition: background-color 0.6s linear;

  /* background-color: pink; */
  /* border-radius: 10px; */
  /* font-size: medium; */
}
.character__stat:hover {
  background-color: darkslategray;
}

.inventory {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px 12px;
}
</style>