<template>
  <section>
    <div class="container">
      <p class="subtitle">Maxcoach available courses</p>
      <h2 class="section_title">Access <em>Smart Tutoring</em> Program For Benefits.</h2>
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
          <div @click="play" class="video_thumbnail_wrapper">
            <img id="video_thumbnail" src="../../assets/img/smart_tutoring/home-2-popup-video-poster.jpg" alt="">
            <img id="yt_play" src="../../assets/img/smart_tutoring/icon-youtube-play.png" alt="">
            <!-- video -->
            <div ref="yt_video" id="yt_video">
              <vytia-player :height="'100%'" :width="'100%'" :ytid="videoID" ref="yt"></vytia-player>              
            </div>
          </div>
          <!-- shapes -->
          <img class="pattern shape_1" src="../../assets/img/shapes/maxcoach-shape-05-150x150.png" alt="">
          <img class="pattern shape_2" src="../../assets/img/shapes/maxcoach-shape-07.png" alt="">
          <div class="pattern shape_3"></div>
          <svg class="pattern shape_4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="202px" viewBox="0 0 200 202">
            <path d="M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z"></path>
          </svg>
        </div>
        <div class="text_container">
          <p class="subtitle">Get started <span>effortlessly</span></p>
          <h2 class="section_title">Enjoy Our <em>Companionship</em></h2>
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
  data() {
    return {
      videoID: 'ElFJ1qcl74U',
    }
  },
  methods: {
    play() {
      this.$refs.yt.player.playVideo();
      this.$refs.yt_video.style.zIndex = '2';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars.scss';

section {
  padding: 5rem 0;
  text-align: center;
  background-color: white;
  clip-path: ellipse(140% 100% at 16.08% 0%);
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
      padding-right: 4rem;
      margin-bottom: 1rem;
    }
    a {
      color: $text-gray;
      font-weight: 600;
      font-size: .9rem;
    }
  }
}

.video_companionship_wrapper {
  display: flex;
  text-align: left;
  padding-top: 6rem;
  padding-bottom: 5rem;
  .video_container {
    width: 60%;
    padding: 2rem;
    position: relative;
    .video_thumbnail_wrapper {
      overflow: hidden;
      border-radius: .5rem;    
      cursor: pointer;
      position: relative;
      #yt_video {
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
      #yt_play {
        width: 90px;
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      #video_thumbnail {
        transition: scale 600ms ease-in-out;
      }
      &:hover #video_thumbnail {
        scale: 1.1;
      }
    }
    .pattern {
      position: absolute;
      width: 120px;
      z-index: -2;
    }
    .shape_1 {
      top: 15%;
      left: -3%;
      width: 150px;
      z-index: -1;
    }
    .shape_2 {
      width: 150px;
      bottom: -7%;
      right: 2%;
    }
    .shape_3 {
      border-radius: 50%;
      border: 9px solid $main-pink;
      width: 65px;
      height: 65px;
      z-index: 2;
      top: 0;
      right: -8%;
    }
    .shape_4 {
      top: -15%;
      left: -5%;
      width: 170px;
      path {
        fill: #e5c791;
      }
    }
  }
  .text_container {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  p span {
    font-weight: 600;
    color: $main-text-purple;
  }
  a {
    margin-top: auto;
    color: $main-dark-green;
    font-weight: 600;
    border-bottom: 1px solid $main-dark-green;
  }
}
</style>