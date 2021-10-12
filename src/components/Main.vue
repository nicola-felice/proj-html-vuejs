<template>
  <main>
    <section id="hero">
      <div class="container">
        <div class="text_wrapper">
          <h1>Distant learning for <br>further expansion</h1>
          <p>Learning is a life-long journey that in fact we never find <br> the terminate stop. Stop searching, enjoy the process.</p>
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
          <img class="portrait" src="../assets/img/hero/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="">
          <!-- patterns -->
          <img class="pattern shape_1" src="../assets/img/hero/maxcoach-shape-02.png" alt="">
          <img class="pattern shape_2" src="../assets/img/hero/maxcoach-shape-07.png" alt="">
          <div class="shape_3 pattern">
            <img src="../assets/img/hero/maxcoach-shape-08.png" alt="">
            <img src="../assets/img/hero/maxcoach-shape-08.png" alt="">            
          </div>
          <div class="pattern shape_4"></div>
        </div>

        <div class="brands_wrapper">
          <div><img src="../assets/img/hero/client-logo-01.png" alt=""></div>
          <div><img src="../assets/img/hero/client-logo-02.png" alt=""></div>
          <div><img src="../assets/img/hero/client-logo-03.png" alt=""></div>
          <div><img src="../assets/img/hero/client-logo-04.png" alt=""></div>
          <div><img src="../assets/img/hero/client-logo-05.png" alt=""></div>
          <div><img src="../assets/img/hero/client-logo-06.png" alt=""></div>
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
  margin: 3rem 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    .img_wrapper {
      width: 50%;
      padding: 1rem;
      position: relative;
      .portrait {
        border-radius: 50%;
      }
      .pattern {
        position: absolute;
        z-index: -1;
      }
      .shape_1 {
        top: 15%;
        right: -15%;
        z-index: 2;
        width: 8rem;
      }
      .shape_2 {
        bottom: 2rem;
        right: 15%;
        width: 9rem;
      }
      .shape_3 {
        top: 50%;
        left: -6%;
        transform: translateY(-50%);
        width: 10rem;
        img:first-child {
          margin-bottom: 1rem;
        }
      }
      .shape_4 {
        border-radius: 50%;
        border: 7px solid $main-pink;
        width: 50px;
        height: 50px;

        left: -8%;
        bottom: 15%;
        z-index: 2;
      }
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
      padding-top: 2rem;
      img {
        opacity: .5;
        padding: 0 1.75rem;
        transition: opacity 250ms ease-in-out;
      }
      img:hover {
        opacity: 1;
      }
    }
  }
}
</style>