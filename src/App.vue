<template>
  <div id="app">
    <Header :links="navLinksHeader" />

    <main></main>

    <Footer :links="navLinksFooter" />
  </div>
</template>

<script>
// components
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// data
import navLinksHeaderjson from './assets/header-nav-links.json';
import navLinksFooterjson from './assets/footer-nav-links.json';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      navLinksHeader: navLinksHeaderjson,
      navLinksFooter: navLinksFooterjson,
    }
  }
}
</script>

<style lang="scss">
@import './assets/common.scss';

main {
  height: 70vh;
}
</style>
