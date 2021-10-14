<template>
  <section>
    <div class="container">
      <div id="best_posts">
        <p class="subtitle">Enjoyable insights</p>
        <h2 class="section_title">Most Viewed <em>Best Blogs</em></h2>
        <ul class="list_best_posts">
          <li v-for="(elm, id) in 5" :key="id">
            <a href="#">
              <font-awesome-icon class="icon" icon="long-arrow-alt-right" />
              <div>Lorem ipsum dolor sit amet consectetur veritatis beatae labore quibusdam rem</div>
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
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" />
                Dec 28, 2020 
              </span>
              <span>
                <font-awesome-icon class="icon" :icon="['far', 'eye']" />
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

section {
  background-color: #f5f1ed;
  padding: 7rem 0;
  color: $main-text-purple;
  font-weight: 600;
}

.container {
  display: flex;
  #best_posts {
    width: 35%;
    padding-right: 1.5rem;
    h2 {
      margin-bottom: 2rem;
    }
    li {
      margin: 1rem 0;
      line-height: 1.5rem;
      a {
        display: flex;
        .icon {
          margin-right: .5rem;
          margin-top: .25rem;
        }
      }
    }
  }
  #latest_posts {
    width: 65%;
    display: flex;
    .post_card {
      margin: 0 1rem;  
      background-color: white;
      border-radius: .5rem;
      overflow: hidden;
      .img_wrapper {
        height: 55%;
        img {
          height: 100%;
          object-fit: cover;
        }
      }
      .text {
        padding: 1.75rem;
        .title {
          line-height: 1.5rem;
        }
        .details {
          margin-top: 1.75rem;
          color: rgba(0, 0, 0, 0.5);
          font-size: .8rem;
          .icon {
            margin-right: .25rem;
          }
          span:first-child {
            margin-right: 1.5rem;
          }
        }
      }
    }
    .post_card:first-child {
      margin-right: 4rem;
    }
  }
}
</style>