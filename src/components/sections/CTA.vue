<template>
  <section id="cta_section">
    <div class="container">
      <h3 class="section_title">Start today for getting <em>Online Certification</em></h3>
      <h2 class="section_title">You can be your own guiding star with our help!</h2>
      <button class="btn">Get started now</button>     

      <img class="pattern shape_1" ref="shape_1" src="../../assets/img/shapes/maxcoach-shape-01.png" alt="">
      <img class="pattern shape_2" ref="shape_2" src="../../assets/img/shapes/maxcoach-shape-02.png" alt="">
      <div class="pattern shape_3" ref="shape_3"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CTA',
  mounted() {
    document.querySelector("#cta_section").addEventListener("mousemove", (ev) => { 
      let x = ev.clientX;
      let y = ev.clientY;
      this.$refs.shape_1.style.transform = `translate3d(${x / 15}px, ${y / 15}px, 0px)`;
      this.$refs.shape_2.style.transform = `translate3d(${-x / 15}px, ${-y / 15}px, 0px)`;
      this.$refs.shape_3.style.transform = `translate3d(${-x / 15}px, ${-y / 15}px, 0px)`;
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/vars.scss';

section .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0 7rem 0;
  position: relative;
  h3.section_title {
    font-size: 1.25rem;
    margin-bottom: .4rem;
  }
  h2.section_title {
    margin-bottom: 2rem;
  }
}

.pattern {
  position: absolute;
  z-index: 0;
}
.shape_1 {
  left: 3%;
  top: 35%;
  transform: translateY(-50%);
  width: 7rem;
}
.shape_2 {
  right: 2%;
  bottom: 35%;
  width: 6rem;
}
.shape_3 {
  border-radius: 50%;
  border: 7px solid $main-pink;
  opacity: .7;
  width: 45px;
  height: 45px;

  top: 13%;
  left: 3%;
}
</style>