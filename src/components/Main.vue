<template>
  <main>
    <Hero-section />

    <Online-courses-section />

    <Smart-tutoring-section />

    <Reviews-section :reviews="reviewsList" />

    <CTA />

    <Numbers-achieved />

    <Blog-posts-section />

    <div style="height: 50vh; background-color: gray;" id="spacing"></div>
  </main>
</template>

<script>
// sections
import HeroSection from './sections/Hero.vue';
import OnlineCoursesSection from './sections/OnlineCoursesSection.vue';
import SmartTutoringSection from './sections/SmartTutoringSection.vue';
import ReviewsSection from './sections/ReviewsSection.vue';
import CTA from './sections/CTA.vue';
import NumbersAchieved from './sections/NumbersAchieved.vue';
import BlogPostsSection from './sections/BlogPostsSection.vue';
// json
import reviewsJson from '../assets/json/reviews.json';


export default {
  name: 'Main',
  components: {
    HeroSection,
    OnlineCoursesSection,
    SmartTutoringSection,
    ReviewsSection,
    CTA,
    NumbersAchieved,
    BlogPostsSection,
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