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
.liAdder {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 15em;
    height: 2em;
    background-color: var(--whitish);
    margin: .5em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
    border-radius: .7em;
}

.liAdder:hover {
    transition: .2s;
    box-shadow: 0px 1px 20px rgb(240 240 240 / 45%);
}

.liAdder__icon {
    scale: 1.5;
    color: var(--dark-gray);

}

.liAdder__addBtn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.inputForm {
    position: absolute;
    bottom: 2.5em;
    width: 20em;
    height: 15em;
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    border-radius: .7em;
}

.inputForm__inputField {
    flex: 1;
    width: 95%;
    margin-bottom: 1em;
    padding: none;
    border: none;
    border-radius: .7em;
}

.inputForm__close {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    color: var(--dark-gray);
    cursor: pointer;
}

.inputForm__btn {
    width: 50%;
    text-align: center;
    cursor: pointer;
    background-color: var(--whitish);
    border-radius: .7em;
    color: var(--dark-gray);
}

</style>