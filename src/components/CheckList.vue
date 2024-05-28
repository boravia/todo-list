<template>
  <ul class="list">
    <ListItem :item="item" v-for="item in items" :key="item.id" @toggle-item="toggleItem" @remove-item="removeItem"></ListItem>
  </ul>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Item } from '../../types/Item';
import ListItem from './ListItem.vue';

export default {
  components: {
    ListItem,
  },
 props: {
  items: {
    type: Array as PropType<Item[]>
  }
 },
  methods: {
    toggleItem(id: number) {
      this.$emit('toggleItem', id)
    },
    removeItem(id: number) {
      this.$emit('removeItem', id)
    }
  },
  emits: {
    toggleItem: (id: number) => Number.isInteger(id),
    removeItem: (id: number) => Number.isInteger(id)
  }
}
</script>


<style lang="scss">
</style>