<template>
  <div id="app">
    <Header :links="navLinksHeader" />

    <Main/>

    <Footer :links="navLinksFooter" />
  </div>
</template>

<script>
// components
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
// data
import navLinksHeaderjson from './assets/json/header-nav-links.json';
import navLinksFooterjson from './assets/json/footer-nav-links.json';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Main
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

</style>
