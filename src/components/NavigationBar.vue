<template>
        <div class="navigation">
        <button class="btn" v-for="buttonState in activeButtons" :key="buttonState" :class="{ 'toggle': activeButton === buttonState }" @click="setButton(buttonState)">{{ buttonState }}</button>

      </div>

</template>

<script lang="ts">
import { PropType } from 'vue';
import { ActiveButton } from '../../types/ActiveButton';

interface State {
  activeButtons: ActiveButton[]
}

    export default {
      props: {
        activeButton: {
          type: String as PropType<ActiveButton>,
          required: true
        }
      },
      data(): State {
        return {
          activeButtons: ['All', 'Todo', 'Done'] as ActiveButton[]
        }
      },
      methods: {
        setButton(buttonState: ActiveButton) {
          this.$emit('setButton', buttonState)
        }
      },
      emits: { 
       setButton: (buttonState: ActiveButton) => typeof buttonState === 'string'

      }
    }
</script>

<style lang="scss"></style>