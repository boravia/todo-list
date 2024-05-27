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


<style lang="scss">
</style>