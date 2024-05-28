<template>
    <li class="list_element" :class="{ 'list_element_done': item.completed }" @click="toggleItem">
        <div class="circle"></div>
        <span class="list_text">{{ item.text }}</span>
        <button class="remove_btn" @click.stop="removeItem">
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
    props: {
        item: {
            type: Object as PropType<Item>,
            required: true
        }
    },
    methods: {
        toggleItem() {
            this.$emit('toggleItem', this.item.id)
        },
        removeItem() {
            this.$emit('removeItem', this.item.id)
        }
    },
    emits: {
        toggleItem: (id: number) => Number.isInteger(id),
        removeItem: (id: number) => Number.isInteger(id)
    }
}
</script>

<style lang="scss" scoped></style>