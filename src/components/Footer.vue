<template>
  <footer>
    <div class="container">
      <div class="adress">
        <h3>Address</h3>
        <ul>
          <li><a href="#">382 NE 191st St # 87394 Miami, FL 33179-3899</a></li>
          <li><a href="#">+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</a></li>
          <li><a href="#">support@maxcoach.com</a></li>
        </ul>
        <div class="socials_wrapper">
            <a href="#">
              <font-awesome-icon class="social_icon" :icon="['fab', 'facebook-square']" />
            </a>
            <a href="#">
              <font-awesome-icon class="social_icon" :icon="['fab', 'twitter']" />
            </a>
            <a href="#">
              <font-awesome-icon class="social_icon" :icon="['fab', 'instagram']" />
            </a>
            <a href="#">
              <font-awesome-icon class="social_icon" :icon="['fab', 'linkedin']" />
            </a>
        </div>
      </div>

      <div class="explore">
        <h3>Explore</h3>
        <ul>
          <li :key="id" v-for="(elm, id) in links.explore.links">
            <a :href="elm.url">{{elm.name}}</a>
          </li>
        </ul>
      </div>

      <div class="information">
        <h3>Information</h3>
        <ul>
          <li :key="id" v-for="(elm, id) in links.information.links">
            <a :href="elm.url">{{elm.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['links'],
}
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

footer {
  background-color: $main-light-grey;
  padding: 6rem 0;
  .container {
    display: flex;
    .adress {
      flex-grow: 1;
      li {
        text-transform: unset;
      }
      .social_icon {
        margin-top: 1.5rem;
        margin-right: 1.75rem;
        font-size: 1.5rem;
        color: #b1b1b1;
        &:hover {
          color: $main-dark-green;
        }
      }
    }
    .explore {
      width: 25%;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50%;
        }
      }
    }
    .information {
      width: 25%;
    }
  }
}

h3 {
  margin-bottom: .75rem;
  color: #333333;
}
li {
  padding: .7rem 0;
  font-size: .95rem;
  font-weight: 500;
  color: #7a7a7a;
  text-transform: capitalize;
  font-weight: 600;
  a:hover {
    color: $main-dark-green;
  }
}
</style>