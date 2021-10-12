<template>
  <main>
    <Hero-section />

    <Online-courses-section />

    <Smart-tutoring-section />

    <div style="height: 50vh;" id="spacing"></div>
  </main>
</template>

<script>
// sections
import HeroSection from './sections/Hero.vue';
import OnlineCoursesSection from './sections/OnlineCoursesSection.vue';
import SmartTutoringSection from './sections/SmartTutoringSection.vue';

export default {
  name: 'Main',
  components: {
    HeroSection,
    OnlineCoursesSection,
    SmartTutoringSection,
  }
}
</script>

<style lang="scss" scoped>

</style>