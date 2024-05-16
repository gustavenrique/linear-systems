<script lang="ts">
import type { EquationTwo as Equation } from '@/types/equation-two';
import NumberInput from '@/components/NumberInput.vue'
import EquationTwo from '@/components/EquationTwo.vue';
import { defineComponent } from 'vue';
import { Classification } from '@/enums/classification';
import { classify } from '@/utils/calculator';

export default defineComponent({
  name: 'system-two',

  components: { NumberInput, EquationTwo },

  data: () => ({
    result: {
      show: false,
      classification: Classification.Dependent,
      determinant: 0,
      x: 0,
      y: 0
    }
  }),

  methods: {
    refresh() {
      location.reload();
    },
    solve() {
      const first = { ...this.$refs.firstEquation.equation } as Equation;
      const second = { ...this.$refs.secondEquation.equation } as Equation;

      this.result.classification = classify(first, second);

      this.result.determinant = (first.a * second.b) - (first.b * second.a);
      const dx = (first.c * second.b) - (first.b * second.c);
      const dy = (first.a * second.c) - (first.c * second.a);

      this.result.x = dx / this.result.determinant;
      this.result.y = dy / this.result.determinant;

      this.result.show = true;
    } 
  },
});
</script>

<template>
  <v-container :style="{'max-width': '400px'}">
    <h1 class="text-center">Sistema Linear 2x2</h1>

    <div>
      <EquationTwo ref="firstEquation" />
      <EquationTwo ref="secondEquation" />
    </div>

    <div class="mt-10 d-flex justify-center">
        <v-btn 
          variant="tonal" 
          class="mr-3" 
          @click="solve"
        >Resolver</v-btn>

        <v-btn 
          variant="text" 
          @click="refresh"
        >Reset</v-btn>  
    </div>

    <v-card v-if="result.show" class="mt-3 pa-3">
      <p class="h-6">Determinante = {{ result.determinant }}</p>
      <p class="h-6">X = {{ result.x }}</p>
      <p class="h-6">Y = {{ result.y }}</p>
      <p class="h-6">Classificação: {{ result.classification }}</p>
    </v-card>
  </v-container>
</template>