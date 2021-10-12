<template>
  <main>
    <Hero-section />

    <Online-courses-section />

    <div style="height: 50vh;" id="spacing"></div>
  </main>
</template>

<script>
// sections
import HeroSection from './sections/Hero.vue';
import OnlineCoursesSection from './sections/OnlineCoursesSection.vue';

export default {
  name: 'Main',
  components: {
    HeroSection,
    OnlineCoursesSection,
  }
}
</script>

<style lang="scss" scoped>

</style>