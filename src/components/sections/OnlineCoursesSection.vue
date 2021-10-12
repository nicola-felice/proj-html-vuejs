<template>
  <section>
    <div class="container">
      <p>Stimulated to learn?</p>
      <h2>Featured Online Courses</h2>
      <div class="courses_wrapper">
        <ul>
          <li class="course_card">
            <div class="img_wrapper">
              <img src="../../assets/img/online_courses/course_1.jpg" alt="">
            </div>
            <div class="text_wrapper">
              <div class="price">$60<span>.00</span></div>
              <h4>Learning to Write as a Professional Author</h4>
              <div class="info">
                <span>
                  <font-awesome-icon class="icon_right" :icon="['far', 'file-alt']" />
                  20 lessons
                </span>
                <span>
                  <font-awesome-icon class="icon_right" :icon="['far', 'user']" />
                  20 students
                </span>
              </div>
            </div>
          </li>
          <li class="course_card">
            <div class="img_wrapper">
              <img src="../../assets/img/online_courses/course_1.jpg" alt="">
            </div>
            <div class="text_wrapper">
              <div class="price">$60<span>.00</span></div>
              <h4>Learning to Write as a Professional Author</h4>
              <div class="info">
                <span>
                  <font-awesome-icon class="icon_right" :icon="['far', 'file-alt']" />
                  20 lessons
                </span>
                <span>
                  <font-awesome-icon class="icon_right" :icon="['far', 'user']" />
                  20 students
                </span>
              </div>
            </div>
          </li>
          <li class="course_card">
            <div class="img_wrapper">
              <img src="../../assets/img/online_courses/course_1.jpg" alt="">
            </div>
            <div class="text_wrapper">
              <div class="price">$60<span>.00</span></div>
              <h4>Learning to Write as a Professional Author</h4>
              <div class="info">
                <span>
                  <font-awesome-icon class="icon_right icon" :icon="['far', 'file-alt']" />
                  20 lessons
                </span>
                <span>
                  <font-awesome-icon class="icon_right icon" :icon="['far', 'user']" />
                  20 students
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
export default {
  name: 'OnlineCoursesSection',
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars.scss';

section {
  text-align: center;
  background-color: $bg-light-gray-blueish;
  padding: 5rem 0;
}

p {
  margin-bottom: 1rem;
}
h2 {
  margin-bottom: 3rem;
  color: $main-text-purple;
  font-size: 1.75rem;
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
      margin: .5rem .5rem;
      width: calc(50% - 2rem);
      display: flex;
      padding: 1rem;
      border-radius: .5rem;
      &:hover {
        background-color: white;
        box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.08);
      }
      .img_wrapper {
        width:30%;
        padding-bottom: 30%;
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
        margin-left: 1.5rem;
        width: 70%;
        h4 {
          font-size: 1.15rem;
          color: $main-text-purple;
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