<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import { Icon } from '@iconify/vue';
import { defineComponent } from 'vue';
// import 'iconify-icon';к

// defineComponent({
//   name: 'MaterialSymbols10kSharp',
// });
const props = defineProps({
  props: {
    
  }
});



</script>

<template>
  <div class="app">
    <NavigationBar></NavigationBar>
    <div class="todo-body">
      <div class="navigation">
        <button class="btn">All</button>
        <button class="btn toggle">Todo</button>
        <button class="btn">Done</button>
      </div>
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
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

button {
  padding: 0;
  font: inherit;
  background-color: transparent;
  border: none;
}

:root {
  --primary-color: #7D2A28;
  --secondary-color: #CD4343;
  --light-gray: #D9D9D9;
  --dark-gray: #A9A8A8;
  --whitish: #FFFAFF;
}

html {
  font-size: 62.5%;
  font-family: 'Roboto', sans-serif;
}

body {
  color: var(--whitish);
}

.todo-body {
  background-color: var(--dark-gray);
  min-height: 65em;
  width: 45em;
  position: absolute;
  top: 50%;
  /* Position from the top 50% */
  left: 50%;
  /* Position from the left 50% */
  transform: translate(-50%, -50%);
  border-radius: .7em;
}

.navigation {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--secondary-color);
  margin: 3em 1.5em;
  border-radius: .7em;
}

.btn {
  padding: 1.5em .5em;
  color: var(--whitish);
  background-color: var(--secondary-color);
  border-radius: .7em;
  border: none;
  height: 2em;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6em;
}

.btn:hover {
  color: var(--light-gray);
}

.toggle {
  background-color: #7D2A28;
}

.list {
  display: grid;
}

.list_text:hover {
  color: var(--dark-gray);
  cursor: default;
}

.list_element {
  width: auto;
  height: 3em;
  background: var(--light-gray);
  margin: .5em;
  margin-inline: .7em;
  border-radius: .7em;
  padding: .7em;
  display: grid;
  gap: .7em;
  align-items: center;
  font-size: 1.6em;
  grid-template-columns: 1.6em 1fr 1.6em;
}

.list_element:hover {
  color: var(--dark-gray);
  transition: .2s;
  box-shadow: 0px 1px 20px rgb(240 240 240 / 45%);
  opacity: 1;
}

.list_element:hover .remove_btn {
  opacity: 1;
  color: var(--dark-gray);
}

.circle {
  width: 1em;
  height: 1em;
  background-color: var(--secondary-color);
  border-radius: 50%;
}

.remove_btn {
  opacity: 0;
  color: var(--light-gray);
  transition: opacity .2s;
}

.remove_btn:hover {
  opacity: 1;
  color: var(--dark-gray);
  cursor: pointer;
}
</style>
