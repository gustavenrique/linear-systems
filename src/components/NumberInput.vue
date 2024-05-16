<script lang="ts">
import { defineComponent, type PropType } from 'vue';

type Variable = 'x' | 'y' | 'z';

export default defineComponent({
    name: 'number-input',

    emits: ['updated'],

    props: {
        variable: String as PropType<Variable>,
        showSign: Boolean,
        allowNegative: Boolean,
    },

    data: () => ({
        sign: '+' as '-' | '+',
        number: 1
    }),

    methods: {
        emitUpdatedEvent() {
            if (!this.allowNegative && this.number < 0)
                this.number = 0;

            const emittedNumber = this.sign == '-' 
                ? this.number * -1
                : this.number;

            this.$emit('updated', emittedNumber);
        }
    }
})
</script>

<template>
    <div class="d-flex align-center">
        <v-select
            v-if="showSign"
            :clearable="false"
            variant="solo"
            :items="['-', '+']"
            v-model="sign"
            @update:modelValue="emitUpdatedEvent"
            hide-details
            hide-selected
            menu-icon=""
        ></v-select>
        
        <v-text-field
            type="number"
            variant="solo"
            :style="{ width: '75px' }"
            v-model.number="number"
            @input="emitUpdatedEvent"
            hide-details
        ></v-text-field>

        <p 
            v-if="variable"
            class="green text-h6"
        >{{ variable }}</p>
    </div>
</template>

<style>
.custom-select .v-select__selections .v-icon {
    display: none !important;
}
</style>