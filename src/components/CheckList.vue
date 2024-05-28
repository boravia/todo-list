<template>
  <ul class="list">
    <ListItem :item="item" v-for="item in items" :key="item.id" @toggle-item="toggleItem"></ListItem>
  </ul>
</template>

<script lang="ts">
import { Item } from '../../types/Item';
import ListItem from './ListItem.vue';

interface State {
  items: Item[];
}

export default {
  components: {
    ListItem,
  },
  data(): State {
    return{
      items: [
      {id: 0, text: 'Download App', completed: false},
      {id: 1, text: 'Use App', completed: false},
      {id: 2, text: 'Close App', completed: true}
      ]
    }
  },
  methods: {
    toggleItem(id: number) {
      const targetItem = this.items.find((item: Item) => item.id === id)
      targetItem.completed = !targetItem.completed
    }
  }
}
</script>


<style lang="scss">
</style>