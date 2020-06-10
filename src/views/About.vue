<template>
  <section id="about" class="section">
    <div class="container flex">
      <div
        v-scroll-show="{
          active: 'animated',
          offset: this.offsetAmount,
        }"
        class="header slide-in-left my-0"
      >
        ABOUT
      </div>
      <div
        v-scroll-show="{
          active: 'animated',
          offset: this.offsetAmount,
          delay: 200,
        }"
        class="header-bar slide-in-left"
      ></div>
      <div class="columns is-mobile is-centered is-multiline pb-5 mb-5">
        <div
          class="column is-one-quarter-desktop is-half-tablet is-three-quarters-mobile has-text-centered is-centered"
        >
          <div
            v-scroll-show="{
              active: 'animated',
              offset: this.offsetAmount,
            }"
            class="clip-container flip-in-x"
          >
            <div class="clipped">
              <i class="mdi mdi-speedometer mdi-48px mdi-light"></i>
            </div>
          </div>
          <div
            v-scroll-show="{
              active: 'animated',
              offset: this.offsetAmount,
            }"
            class="content fade-in"
          >
            <p class="title is-4 py-1">Fast</p>
            <p class="subtitle is-6">
              Fast load times and a lag-free user experience, guaranteed.
            </p>
          </div>
        </div>

        <div
          class="column is-one-quarter-desktop is-half-tablet is-three-quarters-mobile has-text-centered is-vcentered"
        >
          <div
            v-scroll-show="{
              active: 'animated',
              offset: this.offsetAmount,
              delay: 200,
            }"
            class="clip-container flip-in-x"
          >
            <div class="clipped">
              <i class="mdi mdi-head-lightbulb mdi-48px mdi-light"></i>
            </div>
          </div>
          <div
            v-scroll-show="{
              active: 'animated',
              offset: this.offsetAmount,
              delay: 200,
            }"
            class="content fade-in"
          >
            <p class="title is-4 py-1">Intuitive</p>
            <p class="subtitle is-6">
              Guided by Google's Material Design guidelines, and driven to
              create a better internet.
            </p>
          </div>
        </div>
        <div
          class="column is-one-quarter-desktop is-half-tablet is-three-quarters-mobile has-text-centered"
        >
          <div
            v-scroll-show="{
              active: 'animated',
              offset: this.offsetAmount,
              delay: 400,
            }"
            class="clip-container flip-in-x"
          >
            <div class="clipped">
              <i class="mdi mdi-responsive mdi-48px mdi-light"></i>
            </div>
          </div>
          <div
            v-scroll-show="{
              active: 'animated',
              offset: this.offsetAmount,
              delay: 400,
            }"
            class="content fade-in"
          >
            <p class="title is-4 py-1">Responsive</p>
            <p class="subtitle is-6">
              I develop with a "mobile-first" mentality, ensuring usability
              across all devices and screen sizes.
            </p>
          </div>
        </div>
        <div
          class="column is-one-quarter-desktop is-half-tablet is-three-quarters-mobile has-text-centered"
        >
          <div
            v-scroll-show="{
              active: 'animated',
              offset: this.offsetAmount,
              delay: 600,
            }"
            class="clip-container flip-in-x"
          >
            <div class="clipped">
              <i class="mdi mdi-animation mdi-48px mdi-light"></i>
            </div>
          </div>
          <div
            v-scroll-show="{
              active: 'animated',
              offset: this.offsetAmount,
              delay: 600,
            }"
            class="content fade-in"
          >
            <p class="title is-4 py-1">Dynamic</p>
            <p class="subtitle is-6">
              I make websites that come to life with engaging animations and
              dynamic elements.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mb-5">
      <div
        class="columns is-vcentered is-multiline is-3 has-text-centered is-tablet"
      >
        <div class="column is-half">
          <div
            v-scroll-show="{
              active: 'animated',
              offset: this.offsetAmount,
            }"
            class="slide-in-left"
          >
            <figure class="image">
              <img class="clipped" :src="scottPic" />
            </figure>
            <div class="content">
              <p class="title is-4">Who's Scott?</p>
              <p class="subtitle is-6 px-6">
                I am a recent graduate from Northern Arizona University, where I
                earned a Bachelor's degree in Computer Science. I am currently
                looking for full-time employment as either a full stack web
                developer or a software developer in Portland, OR and the
                surrounding area.
              </p>
            </div>
          </div>
        </div>
        <div class="column is-half">
          <Chart />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from '@/components/Chart'
export default {
  name: 'about',
  components: { Chart },
  data() {
    return {
      scottPic: require('../assets/img/scottPic.jpeg'),
    }
  },
}
</script>
<style lang="sass">
#about
  background: white
  position: relative
</style>
