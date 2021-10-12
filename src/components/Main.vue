<template>
  <main>
    <section id="hero">
      <div class="container">
        <div class="text_wrapper">
          <h1>Distant learning for <br>further expansion</h1>
          <p>Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p>
          <button>
            <font-awesome-icon class="icon" icon="download" />
            Download free guide
          </button>
          <div class="free_sample">
            Have questions? 
            <a href="#"> 
              Get Free Sample
              <font-awesome-icon class="icon" icon="long-arrow-alt-right" />
            </a>
          </div>
        </div>

        <div class="img_wrapper">
          <img src="../assets/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="">
        </div>

        <div class="brands_wrapper">
          <div><img src="../assets/img/client-logo-01.png" alt=""></div>
          <div><img src="../assets/img/client-logo-02.png" alt=""></div>
          <div><img src="../assets/img/client-logo-03.png" alt=""></div>
          <div><img src="../assets/img/client-logo-04.png" alt=""></div>
          <div><img src="../assets/img/client-logo-05.png" alt=""></div>
          <div><img src="../assets/img/client-logo-06.png" alt=""></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style lang="scss" scoped>
@import '../assets/vars.scss';

#hero {
  margin: 4rem 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    .img_wrapper {
      width: 50%;
    }
    .text_wrapper {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-right: 3rem;
      > * {
        margin: .75rem 0;
      }
      h1 {
        font-size: 2.5rem;
        color: $main-text-purple;
      }
      p {
        font-size: 1rem;
        line-height: 1.75rem;
        font-weight: 600;
        color: $text-gray;
      }
      button {
        background-color: $main-dark-green;
        color: white;
        border-radius: .25rem;
        border: none;
        padding: 1rem 2rem;
        cursor: pointer;
        font-weight: 800;
        .icon {
          margin-right: .5rem;
        }
      }
      .free_sample {
        a {
          color: $main-dark-green;
          border-bottom: 1px solid $main-dark-green;
        }
      }
    }
    .brands_wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        opacity: .5;
      }
    }
  }
}
</style>