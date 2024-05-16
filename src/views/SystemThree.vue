<script lang="ts">
import EquationThree from '@/components/EquationThree.vue';
import { Classification } from '@/enums/classification';
import type { EquationThree as Equation } from '@/types/equation-three';
import { calculateDeterminant } from '@/utils/calculator';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'system-three',

  components: { EquationThree },

  data: () => ({
    result: {
      show: false,
      classification: null,
      determinant: 0,
      dx: 0,
      dy: 0,
      dz: 0,
      x: 0,
      y: 0,
      z: 0,
    }
  }),

  methods: {
    refresh() {
      location.reload();
    },
    solve() {
      const first = { ...this.$refs.firstEquation.equation } as Equation;
      const second = { ...this.$refs.secondEquation.equation } as Equation;
      const third = { ...this.$refs.thirdEquation.equation } as Equation;

      this.result.determinant = calculateDeterminant(first, second, third);

      const dx = calculateDeterminant(
        { x: first.independent, y: first.y, z: first.z, independent: first.independent },
        { x: second.independent, y: second.y, z: second.z, independent: second.independent },
        { x: third.independent, y: third.y, z: third.z, independent: third.independent },
      )

      const dy = calculateDeterminant(
        { x: first.x, y: first.independent, z: first.z, independent: first.independent },
        { x: second.x, y: second.independent, z: second.z, independent: second.independent },
        { x: third.x, y: third.independent, z: third.z, independent: third.independent },
      )

      const dz = calculateDeterminant(
        { x: first.x, y: first.y, z: first.independent, independent: first.independent },
        { x: second.x, y: second.y, z: second.independent, independent: second.independent },
        { x: third.x, y: third.y, z: third.independent, independent: third.independent },
      )

      this.result.x = dx / this.result.determinant;
      this.result.y = dy / this.result.determinant;
      this.result.z = dz / this.result.determinant;

      this.result.classification = 
        this.result.determinant != 0 ? Classification.Independent
        : dx == dy && dy == dz && dz == 0 ? Classification.Dependent
        : Classification.Inconsistent;

      this.result.dx = dx;
      this.result.dy = dy;
      this.result.dz = dz;

      this.result.show = true;
    }
  }
})
</script>

<template>
  <v-container :style="{'max-width': '500px'}">
    <h1 class="text-center mb-5">Sistema Linear 3x3</h1>

    <div>
      <EquationThree ref="firstEquation" />
      <EquationThree ref="secondEquation" />
      <EquationThree ref="thirdEquation" />
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
      <p class="h-6">Dx = {{ result.dx }}; Dy = {{ result.dy }}; Dz = {{ result.dz }}</p>
      <p class="h-6">X = {{ result.x }}</p>
      <p class="h-6">Y = {{ result.y }}</p>
      <p class="h-6">Z = {{ result.z }}</p>
      <p class="h-6">Classificação: {{ result.classification }}</p>
    </v-card>
  </v-container>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

@media (max-width: 550px) {
  #app {
    padding: .0rem !important;
  }
}
</style>
