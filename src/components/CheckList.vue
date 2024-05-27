<template>
  <ul class="list">
    <li class="list_element">
      <div class="circle"></div>
      <span class="list_text">Download App</span>
      <button class="remove_btn">
        <Icon icon="ph:trash" />
      </button>
    </li>
    <li class="list_element">
      <div class="circle"></div>
      <span class="list_text">Use App</span>
      <button class="remove_btn">
        <Icon icon="ph:trash" />
      </button>
    </li>
    <ListItem :item="{id: item.id, text: item.text, completed: item.completed}" v-for="item in items" :key="item.id"></ListItem>
  </ul>
</template>

<script>
import { Icon } from '@iconify/vue';
import ListItem from './ListItem.vue';

export default {
  components: {
    Icon, ListItem,
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