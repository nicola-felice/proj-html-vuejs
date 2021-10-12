<template>
  <section>
    <div class="container">
      <p class="subtitle">Maxcoach available courses</p>
      <h2>Access <em>Smart Tutoring</em> Program For Benefits.</h2>
      <div class="benefits_wrapper">
        <div class="benefit_card">
          <img src="../../assets/img/smart_tutoring/home-2-image-box-01.png" alt="">
          <h3>Customize Preferences</h3>
          <p>Learners are given the right to arrange and customize their study schedule and timetable based on preferences.</p>
          <a href="#">
            Start here
            <font-awesome-icon icon="long-arrow-alt-right" />
          </a>
        </div>
        <div class="benefit_card">
          <img src="../../assets/img/smart_tutoring/about-us-02-image-box-02.png" alt="">
          <h3>Cloud Storage</h3>
          <p>You can store online lessons via online cloud or download to your device and revise lessons on the way. </p>
          <a href="#">
            Get Free Quote
            <font-awesome-icon icon="long-arrow-alt-right" />
          </a>
        </div>
        <div class="benefit_card">
          <img src="../../assets/img/smart_tutoring/home-2-image-box-03.png" alt="">
          <h3>Multimedia Channels</h3>
          <p>We provide study materials with various formats: video, audio, slides, doc, prints, books and applications. </p>
          <a href="#">
            Start now
            <font-awesome-icon icon="long-arrow-alt-right" />
          </a>
        </div>
      </div>
      <div class="video_companionship_wrapper">
        <div class="video_container">
          <img src="../../assets/img/smart_tutoring/home-2-popup-video-poster.jpg" alt="">
          <img src="../../assets/img/smart_tutoring/icon-youtube-play.png" alt="">
        </div>
        <div class="text_container">
          <p class="subtitle">Get started <span>effortlessly</span></p>
          <h2>Enjoy Our <em>Companionship</em></h2>
          <p>Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek for some hidden hints of early-bird rewards as well.</p>
          <a href="#">
            Download free guidebook
            <font-awesome-icon icon="long-arrow-alt-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SmartTutoringSection',
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars.scss';

section {
  padding: 5rem 0;
  text-align: center;
}

h2 {
  margin-bottom: 3rem;
  color: $main-text-purple;
  font-size: 1.75rem;
}
em {
  color: $main-dark-green;
  font-weight: 500;
  font-style: normal;
}

.benefits_wrapper {
  display: flex;
  text-align: left;
  padding: 2rem 0;
  .benefit_card {
    width: calc(100% / 3);
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    h3 {
      color: $main-text-purple;
      font-size: 1.35rem;
      margin-bottom: 1rem;
      margin-top: auto;
    }
    img {
      width: 45%;
      padding-bottom: 2rem;
    }
    p {
      text-transform: none;
      color: $text-dark-gray;
      padding-right: 4rem;
      font-size: .95rem;
      margin-bottom: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
    }
    a {
      color: $text-gray;
      font-weight: 600;
      font-size: .9rem;
    }
  }
}
</style>