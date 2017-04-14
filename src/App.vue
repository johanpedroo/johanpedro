<template>
  <section id="fullpage">
    <navMenu></navMenu>
    <home></home>
    <contato></contato>
  </section>
</template>

<script>
  import Home from './components/Home.vue'
  import Contato from './components/Contato.vue'
  import navMenu from './components/Menu.vue'
  export default {
    name: 'app',
    components: {
      navMenu,
      Home,
      Contato
    },
    mounted () {
    }
  }
</script>

<style lang="stylus">
  @import './assets/css/normalize.css'
  @import './assets/css/animista.css'
  @import './assets/css/style.styl'
</style>
