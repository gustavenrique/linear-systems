<script lang="ts">
import { defineComponent } from 'vue';
import NumberInput from './NumberInput.vue';
import type { EquationTwo } from '@/types/equation-two';

export default defineComponent({
  name: 'equation-two',

  components: { NumberInput },

  data: () => ({
    equation: {
      a: 1,
      b: 1,
      c: 1,
    } as EquationTwo
  }),
})
</script>

<template>
    <v-row justify="space-between" class="pa-5" align="center">
      <NumberInput 
        variable="x" 
        :allowNegative="true" 
        @updated="input => equation.a = input"
      />
      
      <NumberInput 
        variable="y" 
        :allowNegative="false" 
        :showSign="true" 
        @updated="input => equation.b = input"
      />
      
      <p class="text-h6 text-center">=</p>

      <NumberInput 
        :allowNegative="true" 
        @updated="input => equation.c = input" 
      />
    </v-row>
</template>