<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import CheckList from './components/CheckList.vue';
import FooterApp from './components/FooterApp.vue';
import NewListElement from './components/NewListElement.vue';
</script>

<template>
  <div class="app">
    <div class="todo-body">
      <NavigationBar></NavigationBar>
      <CheckList></CheckList>
      <NewListElement></NewListElement>
    </div>
    <FooterApp></FooterApp>
  </div>
</template>

<style >
.todo-body {
  background-color: var(--light-gray);
  min-height: 65em;
  width: 45em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: .7em;
}
</style>
