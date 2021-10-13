<template>
  <section>
    <div class="container">
      <div class="card">
        <h3 class="section_title">successfully <br> trained</h3>
        <div class="number">1790</div>
        <p class="subtitle">enrolled learners</p>
      </div>
      <div class="card">
        <h3 class="section_title">Proudly <br> Received</h3>
        <div class="number">19</div>
        <p class="subtitle">Countrywide Awards</p>
      </div>
      <div class="card">
        <h3 class="section_title">Firmly <br> Established</h3>
        <div class="number">24</div>
        <p class="subtitle">local branches</p>
      </div>
      <div class="card">
        <h3 class="section_title">Getting <br> Featured on</h3>
        <div class="number">1090</div>
        <p class="subtitle">Blog Posts</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NumbersAchieved',
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars.scss';

section {
  background-color: #fff;
}

.container {
  display: flex;
  .card {
    width: 25%;
    padding: 6rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 2px solid $main-light-grey;
    &:last-child {
      border-right: 2px solid $main-light-grey;
    }
    .subtitle {
      font-weight: 600;
    }
    h3.section_title {
      margin-bottom: 2rem;
      font-size: 1.3rem;
      text-transform: capitalize;
      margin-bottom: 0;
    }
    .number {
      color: $main-dark-green;
      font-size: 3.5rem;
      font-weight: 800;
      margin: 1.5rem 0;
    }
  }
}
</style>