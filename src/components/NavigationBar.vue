<template>
    <div>
        <div class="navigation">
        <button class="btn">All</button>
        <button class="btn toggle">Todo</button>
        <button class="btn">Done</button>
      </div>
    </div>
</template>

<script>
    export default {
      
    }
</script>

<style lang="scss" scoped>
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
  background-color: var(--dark-gray);
  min-height: 65em;
  width: 45em;
  position: absolute;
  top: 50%; /* Position from the top 50% */
  left: 50%; /* Position from the left 50% */
  transform: translate(-50%, -50%);
  border-radius: .7em;
}
</style>