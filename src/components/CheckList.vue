<template>
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
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon,
  },
}
</script>


<style lang="scss" scoped>
.list_element {
  width: auto;
  height: 3em;
  background: var(--dark-gray);
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

.list {
  display: grid;
}

.list_text {
  color: var(--whitish);
}

.list_element:hover {
  color: var(--light-gray);
  transition: .2s;
  box-shadow: 0px 1px 20px rgb(240 240 240 / 45%);
  opacity: 1;

  .list_text {
    color: var(--light-gray);
    /* cursor: default; */
  }
}

.list_element:hover .remove_btn {
  opacity: 1;
  color: var(--light-gray);
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
  color: var(--light-gray);
  cursor: pointer;
  transition: opacity .2s;
}
</style>