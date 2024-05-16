<script lang="ts">
import { defineComponent } from 'vue';
import NumberInput from './NumberInput.vue';
import { EquationThree } from '@/types/equation-three';

export default defineComponent({
  name: 'equation-three',

  components: { NumberInput },

  data: () => ({
    equation: {
      x: 1,
      y: 1,
      z: 1,
      independent: 1,
    } as EquationThree
  })
})
</script>

<template>
    <v-row justify="space-between" align="center">
      <NumberInput 
        variable="x" 
        :allowNegative="true" 
        @updated="input => equation.x = input"
      />
      
      <NumberInput 
        variable="y" 
        :showSign="true" 
        @updated="input => equation.y = input"
      />

      <NumberInput 
        variable="z" 
        :showSign="true" 
        @updated="input => equation.z = input"
      />
      
      <p class="text-h6 text-center">=</p>

      <NumberInput 
        :allowNegative="true" 
        @updated="input => equation.independent = input"
      />
    </v-row>
</template>