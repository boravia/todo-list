<template>
        <div class="navigation">
        <button class="btn" :class="{ 'toggle': activeButton === 'All' }" @click="activateButton('All')">All</button>
        <button class="btn" :class="{ 'toggle': activeButton === 'Todo' }" @click="activateButton('Todo')">Todo</button>
        <button class="btn" :class="{ 'toggle': activeButton === 'Done' }" @click="activateButton('Done')">Done</button>
      </div>

</template>

<script>
    export default {
      data() {
        return {
          activeButton: 'All'

        }
      },
      methods: {
        activateButton(button) {
      this.activeButton = button;
        }
      }
    }
</script>

<style lang="scss">
</style>