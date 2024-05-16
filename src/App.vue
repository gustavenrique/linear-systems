<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Introduction from './components/Introduction.vue'

export default {
  name: 'app',

  components: { Introduction, RouterLink, RouterView },

  data: () => ({
    rotating: true
  })
};
</script>

<template>
  <header>
    <img 
      alt="Vue logo" 
      class="logo" 
      :class="{ 'rotate': rotating }"
      src="@/assets/logo.png" 
      width="125" 
      height="125" 
      @click="rotating = !rotating"
    />

    <div class="wrapper">
      <Introduction title="Álgebra Linear" />

      <nav>
        <RouterLink to="/2x2">Sistema 2x2</RouterLink>
        <RouterLink to="/3x3">Sistema 3x3</RouterLink>
      </nav>
    </div>
  </header>

  <Transition>
    <RouterView/>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.rotate {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
