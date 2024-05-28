<template>
    <div class="liAdder" ref="liAdder" @click="toggleInputForm">
        <div class="liAdder__addBtn"  >
            <Icon icon="ph:plus" class="liAdder__icon" />
        </div>
    </div>
    <div v-if="showInputForm" class="inputForm" ref="inputForm">
        <input class="inputForm__inputField" type="text" placeholder="New task">
        <Icon icon="ph:x" class="inputForm__close" @click="toggleInputForm" />
        <button class="inputForm__btn">Submit</button>
    </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    },
    data() {
        return {
            showInputForm: false,
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
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }
}
</script>

<style lang="scss">
</style>