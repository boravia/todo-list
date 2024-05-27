<template>
    <li class="list_element" :class="{'list_element_done': item.completed}">
      <div class="circle"></div>
      <span class="list_text">{{ item.text }}</span>
      <button class="remove_btn">
        <Icon icon="ph:trash" />
      </button>
    </li>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';
import { PropType } from 'vue';
import { Item } from '../../types/Item';

    export default {
        components: {
            Icon,
        },
        props:{
            item: {
                type: Object as PropType<Item>,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>