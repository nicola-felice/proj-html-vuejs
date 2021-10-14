<template>
  <section>
    <div class="container">
      <h2 class="section_title">Subscribe <em>Newsletters</em></h2>
      <p>Enter your email address to register to our newsletter subscription delivered on a regular basis!</p>
      <div class="subscribe_wrapper">
        <input type="text" placeholder="Enter your Email">
        <button class="btn">Subscribe</button>        
      </div>

      <img class="pattern shape_1" src="../../assets/img/shapes/maxcoach-shape-02.png" alt="">
      <img class="pattern shape_2" src="../../assets/img/shapes/maxcoach-shape-09.png" alt="">
      <div class="pattern shape_3"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsletterSection',
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars.scss';

section {
  background-color: #fff;
  padding: 5rem 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  p {
    max-width: 50ch;
    margin-bottom: 2rem;
  }
  .section_title {
    margin-bottom: 1.25rem;
  }
  .btn {
    border-radius: 0 .25rem .25rem 0;
  }
  input {
    padding: 1rem 2rem;
    border: none;
    border-radius: .25rem 0 0 .25rem;
    background-color: $main-light-grey;
    width: 20rem;
    &:focus {
      outline: 1px solid $main-dark-green;
    }
  }
}

.pattern {
  position: absolute;
  z-index: 0;
}
.shape_1 {
  top: 40%;
  width: 120px;
  right: 0;
}
.shape_2 {
  top: -8%;
  right: 10%;
  width: 180px;
}
.shape_3 {
  border-radius: 50%;
  border: 7px solid $main-dark-green;
  opacity: .4;
  width: 55px;
  height: 55px;

  top: 50%;
  left: 0;
  transform: translateX(-50%);
}
</style>