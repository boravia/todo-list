<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import CheckList from './components/CheckList.vue';
import FooterApp from './components/FooterApp.vue';
import NewItemButton from './components/NewItemButton.vue';
</script>

<template>
  <div class="app">
    <div class="todo-body">
      <NavigationBar></NavigationBar>
      <CheckList></CheckList>
      <NewItemButton></NewItemButton>
    </div>
    <FooterApp></FooterApp>
  </div>
</template>

<style lang="scss">
</style>
