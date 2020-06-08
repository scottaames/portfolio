<template>
  <div class="container is-fluid pb-6 mb-6">
    <section class="section">
      <div class="columns is-mobile is-multiline has-text-centered pb-3 mb-6">
        <div class="column is-12">
          <div class="brand">
            <h1 class="title pt-6 pb-4">
              ABOUT
            </h1>
          </div>
          <div class="divider pb-5 mb-6">
            <hr />
          </div>
        </div>

        <div
          class="column is-one-quarter-desktop is-half-tablet is-full-mobile has-text-centered is-centered"
        >
          <div class="clip-container">
            <div class="clipped">
              <i class="mdi mdi-speedometer mdi-48px mdi-light"></i>
            </div>
          </div>
          <div class="content text-wrapper">
            <p class="title is-4 py-1">Fast</p>
            <p class="subtitle is-6">
              Fast load times and a lag-free user experience, guaranteed.
            </p>
          </div>
        </div>

        <div
          class="column is-one-quarter-desktop is-half-tablet is-full-mobile has-text-centered is-vcentered"
        >
          <div class="clip-container">
            <div class="clipped">
              <i class="mdi mdi-head-lightbulb mdi-48px mdi-light"></i>
            </div>
          </div>
          <div class="content text-wrapper">
            <p class="title is-4 py-1">Intuitive</p>
            <p class="subtitle is-6">
              Guided by Google's Material Design guidelines, and driven to
              create a better internet.
            </p>
          </div>
        </div>
        <div
          class="column is-one-quarter-desktop is-half-tablet is-full-mobile has-text-centered"
        >
          <div class="clip-container">
            <div class="clipped">
              <i class="mdi mdi-responsive mdi-48px mdi-light"></i>
            </div>
          </div>
          <div class="content text-wrapper">
            <p class="title is-4 py-1">Responsive</p>
            <p class="subtitle is-6">
              I develop with a "mobile-first" mentality, ensuring usability
              across all devices and screen sizes.
            </p>
          </div>
        </div>
        <div
          class="column is-one-quarter-desktop is-half-tablet is-full-mobile has-text-centered"
        >
          <div class="clip-container">
            <div class="clipped">
              <i class="mdi mdi-animation mdi-48px mdi-light"></i>
            </div>
          </div>
          <div class="content text-wrapper">
            <p class="title is-4 py-1">Dynamic</p>
            <p class="subtitle is-6">
              I make websites that come to life with engaging animations and
              dynamic elements.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="columns is-multiline is-3 has-text-centered is-tablet">
        <div class="column is-half is-full-tablet">
          <figure class="image">
            <img class="clipped" :src="scottPic" />
          </figure>
          <div class="content">
            <p class="title is-4">Who's Scott?</p>
            <p class="subtitle is-6 px-6 mx-6">
              I am a recent graduate from Northern Arizona University, where I
              earned a Bachelor's degree in Computer Science. I am currently
              looking for full-time employment as either a full stack web
              developer or a software developer in Portland, OR and the
              surrounding area.
            </p>
          </div>
        </div>
        <div class="column is-half is-full-tablet">
          <Chart />
        </div>
      </div>
    </section>
  </div>
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
p.title
  color: #4a4a4a !important
.image
  height: auto
  width: 45%
  margin: auto
  margin-bottom: 1rem
  .clipped
    -webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)
    height: 100%
    width: 100%
    margin: auto
    display: flex
    justify-content: center
    align-items: center
</style>
