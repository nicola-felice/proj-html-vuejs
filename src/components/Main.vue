<template>
  <main>
    <Hero-section />

    <Online-courses-section />

    <Smart-tutoring-section />

    <Reviews-section :reviews="reviewsList" />

    <div style="height: 50vh; background-color: white;" id="spacing"></div>
  </main>
</template>

<script>
// sections
import HeroSection from './sections/Hero.vue';
import OnlineCoursesSection from './sections/OnlineCoursesSection.vue';
import SmartTutoringSection from './sections/SmartTutoringSection.vue';
import ReviewsSection from './sections/ReviewsSection.vue';
// json
import reviewsJson from '../assets/json/reviews.json';


export default {
  name: 'Main',
  components: {
    HeroSection,
    OnlineCoursesSection,
    SmartTutoringSection,
    ReviewsSection,
  },
  data() {
    return {
      reviewsList: reviewsJson,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>