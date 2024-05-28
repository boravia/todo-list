<template>
  <div class="app">
    <div class="todo-body">
      <NavigationBar></NavigationBar>
      <CheckList :items="items" @remove-item="removeItem" @toggle-item="toggleItem"></CheckList>
      <NewItemButton @add-item="addItem"></NewItemButton>
    </div>
    <FooterApp></FooterApp>
  </div>
</template>

<script lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import CheckList from './components/CheckList.vue';
import FooterApp from './components/FooterApp.vue';
import NewItemButton from './components/NewItemButton.vue';
import { Item } from '../types/Item';

interface State {
  items: Item[];
}

export default {
  components: {
    NavigationBar, CheckList, FooterApp, NewItemButton
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
    addItem(item: Item) {
      console.log(item)
    },
    toggleItem(id: number) {
      const targetItem = this.items.find((item: Item) => item.id === id)
      targetItem.completed = !targetItem.completed;
    },
    removeItem(id: number) {
      this.items = this.items.filter((item: Item) => item.id !== id);
    }
  }
}
</script>


<style lang="scss"></style>
