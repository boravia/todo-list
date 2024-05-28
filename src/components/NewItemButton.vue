<template>
    <div class="liAdder" ref="liAdder" @click="toggleInputForm">
        <div class="liAdder__addBtn">
            <Icon icon="ph:plus" class="liAdder__icon" />
        </div>
    </div>
    <form v-if="showInputForm" class="inputForm" ref="inputForm" @submit.prevent="addItem">
        <input name="newTask" class="inputForm__inputField" type="text" placeholder="New task" v-model="itemText">
        <Icon icon="ph:x" class="inputForm__close" @click="toggleInputForm" />
        <button class="inputForm__btn" type="submit">Submit</button>
</form>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';
import { Item } from '../../types/Item';

interface State {
    showInputForm: boolean,
    itemText: string
}

export default {
    components: {
        Icon,
    },
    data(): State {
        return {
            showInputForm: false,
            itemText: ''
        };
    },
    methods: {
        toggleInputForm() {
            this.showInputForm = !this.showInputForm;
        },
        handleClickOutside(event: MouseEvent) {
            if (this.showInputForm) {
                const liAdder = this.$refs.liAdder;
                const inputForm = this.$refs.inputForm;
                if (liAdder && !liAdder.contains(event.target) && inputForm && !inputForm.contains(event.target)) {
                    this.toggleInputForm();
                }
            }
        },
        addItem() {
            this.$emit('addItem', {
                id: Date.now(),
                text: this.itemText,
                completed: false
            })

            this.itemText = ''
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    emits: {
        addItem: (item: Item) => item
    },
}
</script>

<style lang="scss"></style>