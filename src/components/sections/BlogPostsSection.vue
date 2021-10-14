<template>
  <section>
    <div class="container">
      <div id="best_posts">
        <p class="subtitle">Enjoyable insights</p>
        <h2 class="section_title">Most Viewed <em>Best Blogs</em></h2>
        <ul class="list_best_posts">
          <li v-for="(elm, id) in bestBlogPosts" :key="id">
            <a :href="elm.url">
              <font-awesome-icon class="icon" icon="long-arrow-alt-right" />
              <div>{{elm.title}}</div>
            </a>
          </li>
        </ul>
      </div>

      <div id="latest_posts">
        <div v-for="(elm, id) in latestBlogPosts" :key="id" class="post_card">
          <div class="img_wrapper">
            <img :src="require(`../../assets/img/blog/${elm.imgName}`)" alt="">
          </div>
          <div class="text">
            <p class="subtitle">{{elm.category}}</p>
            <div class="title">{{elm.title}}</div>
            <div class="details">
              <span>
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" />
                {{elm.date}} 
              </span>
              <span>
                <font-awesome-icon class="icon" :icon="['far', 'eye']" />
                {{elm.views}}
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
      bestBlogPosts: [
        {
          title: 'Become a Better Blogger: Content Planning',
          url: '#'
        },
        {
          title: 'Promoting Your Online Business on Pinterest',
          url: '#'
        },
        {
          title: 'Gamification and Game-Based Learning',
          url: '#'
        },
        {
          title: 'Designing an Online Course from Expert’s Perspective',
          url: '#'
        },
        {
          title: 'Why Online Courses Are the Future of Education',
          url: '#'
        },
      ],
      latestBlogPosts: [
        {
          title: 'Brush strokes energize trees in painting',
          category: 'artist',
          date: 'Dec 28, 2020',
          views: '1,320',
          imgName: 'artist-blog-03-480x352.jpeg',
        },
        {
          title: 'pocket-sized notebooks hold miniature painting',
          category: 'artist',
          date: 'May 28, 2020',
          views: '936',
          imgName: 'artist-blog-01-480x352.jpg',
        },
      ]
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
      margin: 1.5rem 0;
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
      width: 50%;
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
          font-size: 1.2rem;
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