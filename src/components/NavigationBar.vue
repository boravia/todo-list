<template>
        <div class="navigation">
        <button class="btn">All</button>
        <button class="btn toggle">Todo</button>
        <button class="btn">Done</button>
      </div>

</template>

<script>
    export default {
      
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
}

.toggle {
  background-color: #7D2A28;
}
</style>