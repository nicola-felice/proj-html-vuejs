<template>
  <section>
    <div class="container">
      <p class="subtitle">Stimulated to learn?</p>
      <h2 class="section_title">Featured Online Courses</h2>
      <div class="courses_wrapper">
        <ul>
          <li v-for="(elm, id) in coursesList" :key="id" class="course_card">
            <div class="img_wrapper">
              <img :src="require(`../../assets/img/online_courses/${elm.fotoName}`)" alt="">
            </div>
            <div class="text_wrapper">
              <div class="price">${{elm.price}}<span v-if="!isNaN(elm.price)">.00</span></div>
              <h4>{{elm.name}}</h4>
              <div class="info">
                <span>
                  <font-awesome-icon class="icon_right" :icon="['far', 'file-alt']" />
                  {{elm.numberOfLessons}} Lessons
                </span>
                <span>
                  <font-awesome-icon class="icon_right" :icon="['far', 'user']" />
                  {{elm.numberOfStudents}} Students
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button class="btn">
        View all courses
        <font-awesome-icon class="icon_right" icon="long-arrow-alt-right" />
      </button>
    </div>
  </section>
</template>

<script>
import coursesjson from '../../assets/json/courses-data.json';

export default {
  name: 'OnlineCoursesSection',
  data() {
    return {
      coursesList: coursesjson,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars.scss';

section {
  text-align: center;
  background-color: $bg-light-gray-blueish;
  padding: 5rem 0;
}

button {
  margin-top: 3rem;
}

.courses_wrapper {
  ul {  
    display: flex;
    flex-wrap: wrap;
    .course_card {
      text-align: left;
      margin: .25rem;
      width: calc(50% - 2rem);
      display: flex;
      padding: 1.25rem;
      border-radius: .5rem;
      transition: all 200ms ease-in-out;
      &:hover {
        background-color: white;
        box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.08);
      }
      .img_wrapper {
        width:35%;
        padding-bottom: 35%;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 100%;
          width: unset;
        }
      }
      .text_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem 0;
        margin-left: 1.25rem;
        width: 65%;
        h4 {
          font-size: 1.15rem;
          color: $main-text-purple;
          line-height: 2rem;
        }
        .info {
          font-size: .85rem;
          color: $text-gray;
          .icon {
            margin-right: .25rem;
          }
          span:first-child {
            margin-right: 1rem;
          }
        }
        .price {
          color: $main-dark-green;
          font-weight: 800;
          font-size: 1.25rem;
          span {
            font-size: .9rem;
          }
        }
      }
    }
  }
}
</style>