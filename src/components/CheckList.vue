<template>
  <ul class="list">
    <ListItem :item="item" v-for="item in items" :key="item.id"></ListItem>
  </ul>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  components: {
    ListItem,
  },
  data() {
    return{
      items: [
      {id: 0, text: 'Download App', completed: false},
      {id: 1, text: 'Use App', completed: false},
      {id: 2, text: 'Close App', completed: true}
      ]
    }
  }
}
</script>


<style lang="scss">
</style>