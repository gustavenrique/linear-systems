<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ title }}</h1>
    <h3>
      Este projeto possibilita a resolução e classificação de sistemas lineares 2x2 e 3x3
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
