<template>
  <div id="app">
    <Header :links="navLinks" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import navLinksJSon from './assets/nav-links.json';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      navLinks: navLinksJSon,
    }
  }
}
</script>

<style lang="scss">
@import './assets/common.scss';
</style>
