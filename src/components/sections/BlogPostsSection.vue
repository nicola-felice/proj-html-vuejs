<template>
  <section>
    <div class="container">
      <div id="best_posts">
        <p class="subtitle">Enjoyable insights</p>
        <h2 class="section_title">Most Viewed <em>Best Blogs</em></h2>
        <ul class="list_best_posts">
          <li v-for="(elm, id) in 7" :key="id">
            <a href="#">
              <font-awesome-icon icon="long-arrow-alt-right" />
              Lorem ipsum dolor sit amet consectetur veritatis beatae labore quibusdam rem
            </a>
          </li>
        </ul>
      </div>

      <div id="latest_posts">
        <div v-for="(elm, id) in 2" :key="id" class="post_card">
          <div class="img_wrapper">
            <img src="../../assets/img/blog/artist-blog-01-480x352.jpg" alt="">
          </div>
          <div class="text">
            <p class="subtitle">artist</p>
            <div class="title">Ten Benefits Of Rentals That May Change Your Perspective</div>
            <div class="details">
              <span>
                <font-awesome-icon :icon="['far', 'calendar']" />
                 Dec 28, 2020 
              </span>
              <span>
                <font-awesome-icon :icon="['far', 'eye']" />
                1,448 views 
              </span>
            </div>
          </div>
        </div>  
      </div>      
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPostsSection',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars.scss';


</style>