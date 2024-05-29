<template>
  <div class="app">
    <div class="todo-body">
      <NavigationBar :active-button="activeButton" @setButton="setButton"></NavigationBar>
      <CheckList :items="filteredItems" @remove-item="removeItem" @toggle-item="toggleItem"></CheckList>
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
import { ActiveButton } from '../types/ActiveButton';

interface State {
  items: Item[],
  activeButton: ActiveButton
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
      ],
      activeButton: 'All' as ActiveButton
    }
},
  methods: {
    addItem(item: Item) {
      this.items.push(item)
    },
    toggleItem(id: number) {
      const targetItem = this.items.find((item: Item) => item.id === id)
      targetItem.completed = !targetItem.completed;
    },
    removeItem(id: number) {
      this.items = this.items.filter((item: Item) => item.id !== id);
    },
    setButton(buttonState: ActiveButton) {
      this.activeButton = buttonState
    }
  },
  computed: {
    filteredItems(): Item[] {
      switch (this.activeButton) {
        case 'Todo': return this.items.filter(Item => !Item.completed)
        case 'Done': return this.items.filter(Item => Item.completed)
        case 'All': default: return this.items
      }
    }
  }
}
</script>


<style lang="scss"></style>
