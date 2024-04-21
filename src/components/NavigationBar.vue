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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}
*{
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
  background-color: var(--light-gray);
  min-height: 65em;
  width: 45em;
  position: absolute;
  top: 50%; /* Position from the top 50% */
  left: 50%; /* Position from the left 50% */
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
</style>