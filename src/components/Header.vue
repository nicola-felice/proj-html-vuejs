<template>
  <header>
    <div class="container">
      <div class="logo_wrapper">
        <img src="../assets/img/dark-logo.png" alt="logo">
      </div>

      <nav class="navigation">
        <ul>
          <li v-for="(elm, index) in links" :key="index">
            <a :href="elm.categoryPageLink">{{elm.categoryName}}</a>
            <font-awesome-icon class="arrow_down" icon="chevron-down" />
            <!-- dropdown menu (on hover) -->
            <div class="dropdown_menu">
              <div v-for="(link, id) in elm.links" :key="id" class="link">
                <a :href="link.url">
                  {{link.name}}
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div class="user_profile_icon">
        <a href="#">
          <font-awesome-icon class="icon" :icon="['far', 'user']" />
        </a>
      </div>

      <div class="search_bar">
        <input type="text" placeholder="Search...">
        <font-awesome-icon class="icon" icon="search" />
      </div>      
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['links']
}
</script>

<style lang="scss" scoped>
header { 
  box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.2);
  position: relative;
  z-index: 99999;
  .container {
    display: flex;
    align-items: center;  
  }
}

.logo_wrapper {
  max-width: 145px;
  margin-right: auto;
}

nav ul {
  display: flex;
  align-items: center;
  li {
    margin-right: 2rem;
    font-weight: 500;
    font-size: .9rem;
    text-transform: capitalize;
    padding: 2rem 0;  
    .arrow_down {
      margin-left: .25rem;
      font-size: .6rem;
      vertical-align: baseline;
    }
    // on hover dropdown menu
    &:hover {
      color: #20ad96;
      .dropdown_menu {
        display: block;
      }
    }
    .dropdown_menu {
      display: none;
      position: absolute;
      box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.15);
      top: 100%;
      min-width: 17rem;
      z-index: 2;
      transform: translateX(-5%);
      background-color: white;
      padding: 1.5rem;
      .link {
        margin-bottom: 1rem;
        color: grey;
        a {
          display: block;
        }
        &:hover {
          color: black;
        }
      }
    }
  }
}

.user_profile_icon {
    border: 2px solid black;
    padding: .6rem;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  .icon {
    padding: .15rem;
    top: 63%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.4rem;
    position: absolute;
  }
}

.search_bar {
  margin-left: 1.25rem;
  position: relative;
  input {
    padding: .75rem 1rem;
    background-color: #f6f3f5;
    border: none;
    border-radius: .25rem;
    &:focus {
      outline: 2px solid #20ad96;
    }
  }
  .icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #20ad96;
  }
}
</style>