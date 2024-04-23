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
  cursor: pointer;
}

.toggle {
  background-color: #7D2A28;
}
</style>