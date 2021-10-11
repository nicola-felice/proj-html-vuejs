<template>
  <header>
    <div class="logo_wrapper">
      <img src="../assets/img/dark-logo.png" alt="logo">
    </div>

    <nav class="navigation">
      <ul>
        <li>
          <a href="#">home</a>
          <font-awesome-icon icon="chevron-down" />
          <!-- HERE menu dropdown -->
        </li>
        <li>
          <a href="#">home</a>
          <font-awesome-icon icon="chevron-down" />
          <!-- HERE menu dropdown -->
        </li>
        <li>
          <a href="#">home</a>
          <font-awesome-icon icon="chevron-down" />
          <!-- HERE menu dropdown -->
        </li>
        <li>
          <a href="#">home</a>
          <font-awesome-icon icon="chevron-down" />
          <!-- HERE menu dropdown -->
        </li>
        <li>
          <a href="#">home</a>
          <font-awesome-icon icon="chevron-down" />
          <!-- HERE menu dropdown -->
        </li>
        <li>
          <a href="#">home</a>
          <font-awesome-icon icon="chevron-down" />
          <!-- HERE menu dropdown -->
        </li>
      </ul>
    </nav>

    <div class="user_profile_icon">
      <a href="#">
        <font-awesome-icon :icon="['far', 'user']" />
      </a>
    </div>

    <div class="search_bar">
      <input type="text" placeholder="search...">
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>

</style>