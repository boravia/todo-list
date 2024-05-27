<template>
    <div class="liAdder" ref="liAdder">
        <div class="liAdder__addBtn" @click="toggleInputForm" >
            <Icon icon="ph:plus" class="liAdder__icon" />
        </div>
        <div v-if="showInputForm" class="inputForm" ref="inputForm">
            <input class="inputForm__inputField" type="text">
            <Icon icon="ph:x" class="inputForm__close" @click="toggleInputForm" />
            <button class="inputForm__btn">Submit</button>
        </div>
    </div>
</template>

<script>
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
        handleClickOutside(event) {
            if (this.showInputForm) {
                const liAdder = this.$refs.liAdder;
                if (liAdder && !liAdder.contains(event.target)) {
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