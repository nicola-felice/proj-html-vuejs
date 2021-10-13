<template>
  <section>
    <p class="subtitle">great words about maxcoach</p>
    <h2 class="section_title">Our <em>top learners'</em> verbatim</h2>
    <div id="reviews_slider">
      <div class="slider">
        <div class="slider_prev"></div>

        <div class="slider_stream">
          <div v-for="(elm, id) in reviews" :key="id" class="slider_item">
            <div class="review_card">
              <h4>{{elm.title}}</h4>
              <p>{{elm.text}}</p>
              <div class="testimonial_profile">
                <div class="img_wrapper">
                  <img :src="require(`../../assets/img/reviews/${elm.imgName}`)" alt="">
                </div>
                <div class="name_wrapper">
                  <div class="name">{{elm.name}}</div>
                  <div class="profession">/ {{elm.profession}}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- only if you have 4 or less reviews -->
          <div v-for="(elm, id) in reviewsCopy" :key="id + reviews.length" class="slider_item">
            <div class="review_card">
              <h4>{{elm.title}}</h4>
              <p>{{elm.text}}</p>
              <div class="testimonial_profile">
                <div class="img_wrapper">
                  <img :src="require(`../../assets/img/reviews/${elm.imgName}`)" alt="">
                </div>
                <div class="name_wrapper">
                  <div class="name">{{elm.name}}</div>
                  <div class="profession">/ {{elm.profession}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slider_next"></div>
      </div>
    </div>
    <div id="slider_nav">
      <div class="slider_dot active"></div>
      <div class="slider_dot"></div>
      <div class="slider_dot"></div>
      <div class="slider_dot"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReviewsSection',
  props: ['reviews'],
  computed: {
    reviewsCopy() {
      if ( this.reviews.length <= 4 ) {
        return [...this.reviews];
      } else {
        return [];
      }
    }
  },
  mounted() {
    let stream = document.querySelector('.slider_stream');
    let items = document.querySelectorAll('.slider_item');
    
    let prev = document.querySelector('.slider_prev');
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.slider_item');
    });
    
    let next = document.querySelector('.slider_next');
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.slider_item');
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars.scss';

section {
  text-align: center;
  padding: 5rem 0;
}

#reviews_slider {
  position: relative;
  text-align: left;
  min-height: 25rem;
}
#slider_nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  .slider_dot {
    border-radius: 50%;
    width: 7px;
    height: 7px;
    background-color: rgba(0, 0, 0, 0.377);
    margin: .45rem;
    cursor: pointer;
  }
  .slider_dot.active {
    width: 11px;
    height: 11px;
    background-color: #000000;
  }
}
h4 {
  font-size: 1.15rem;
  color: $main-text-purple;
  line-height: 2rem;
}
.review_card {
  background-color: #fff;
  border-radius: .5rem;
  padding: 2.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin: 1.5rem 0;
  }
  img {
    width: 50px;
    border-radius: 50%;
  }
  .testimonial_profile {
    display: flex;
    margin-top: auto;
    .name_wrapper {
      margin-left: 1.25rem;
      .name {
        color: $main-text-purple;
        text-transform: uppercase;
        font-weight: 600;
        font-size: .95rem;
      }
      .profession {
        font-size: .85rem;
        margin-top: .25rem;
      }
    }
  }
}

/* slider */
.slider {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slider_stream {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
}

.slider_item {
  position: absolute;
  width: calc(100% / 3);
  height: 100%;
  transition: 1s all ease;
  border-radius: 5px;
  padding: 0 2rem;
  opacity: .5;
}
.slider_item:nth-child(1),
.slider_item:nth-child(2) {
  left: 0;
  z-index: 1;
  transform: translateX(-100%) scale(.9);
}
.slider_item:nth-child(3) {
  left: 0;
  z-index: 2;
  transform: scale(.9);
}
// focus elm
.slider_item:nth-child(4) {
  left: 50%;
  z-index: 4;
  transform: translateX(-50%) scale(1);
  opacity: 1;
}
.slider_item:nth-child(5) {
  left: 100%;
  z-index: 2;
  transform: translateX(-100%) scale(.9);
}
.slider_item:nth-child(n+6) {
  left: 100%;
  z-index: 1;
  transform: scale(.9);
}

/* Controllers */
.slider_prev,
.slider_next {
  position: absolute;
  top: 50%;
  z-index: 4;
  width: calc(100% / 3);
  height: 100%;
  transform: translateY(-50%) scale(.9);
  cursor: pointer;
}
.slider_prev {
  left: 0;
}
.slider_next {
  right: 0;
}
</style>