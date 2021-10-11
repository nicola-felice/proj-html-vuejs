<template>
  <header>
    <div class="container">
      <div class="logo_wrapper">
        <img src="../assets/img/dark-logo.png" alt="logo">
      </div>

      <nav class="navigation">
        <ul>
          <li>
            <a href="#">home</a>
            <font-awesome-icon class="arrow_down" icon="chevron-down" />
            <!-- HERE menu dropdown -->
          </li>
          <li>
            <a href="#">home</a>
            <font-awesome-icon class="arrow_down" icon="chevron-down" />
            <!-- HERE menu dropdown -->
          </li>
          <li>
            <a href="#">home</a>
            <font-awesome-icon class="arrow_down" icon="chevron-down" />
            <!-- HERE menu dropdown -->
          </li>
          <li>
            <a href="#">home</a>
            <font-awesome-icon class="arrow_down" icon="chevron-down" />
            <!-- HERE menu dropdown -->
          </li>
          <li>
            <a href="#">home</a>
            <font-awesome-icon class="arrow_down" icon="chevron-down" />
            <!-- HERE menu dropdown -->
          </li>
          <li>
            <a href="#">home</a>
            <font-awesome-icon class="arrow_down" icon="chevron-down" />
            <!-- HERE menu dropdown -->
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
}
</script>

<style lang="scss" scoped>
header { 
  box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.2);
  .container {
    display: flex;
    align-items: center;  
    padding: 1.25rem 0;  
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
    text-transform: capitalize;
    .arrow_down {
      margin-left: .25rem;
      font-size: .6rem;
      vertical-align: baseline;
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