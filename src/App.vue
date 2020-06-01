<template>
  <div id="app">
    <div class="wrapper">
      <parallax class="section-alt page-header header-filter">
        <div class="container-alt has-text-centered">
          <div class="layout">
            <div class="stars"></div>
            <div class="stars2"></div>
            <div class="stars3"></div>
            <h1 class="title has-text-white is-1">
              Hi, I'm
              <span class="title is-1 has-text-danger">Scott Ames</span>.
            </h1>
            <h2 class="subtitle has-text-white is-3">
              I'm a full-stack web developer.
            </h2>
            <div class="field is-grouped is-grouped-centered is-spaced">
              <p class="control is-pulled-left">
                <a
                  v-scroll-to="'#about'"
                  class="button is-primary is-outlined is-medium"
                >
                  About Me
                </a>
              </p>
              <p class="control">
                <a
                  v-scroll-to="'#about'"
                  class="button is-link is-outlined is-medium"
                >
                  View my work
                </a>
              </p>
            </div>
          </div>
        </div>
      </parallax>
      <Navbar />
      <div class="main">
        <div class="section-alt">
          <div class="container-alt">
            <div class="layout">
              <About />
            </div>
          </div>
        </div>
        <div class="section-alt">
          <div class="container-alt">
            <div class="layout">
              <Projects />
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>

    <div class="footer">
      <div class="content has-text-centered has-text-white">
        <p>
          Built by Scott Ames with Vue, Bulma, and Airtable.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import ContactForm from '@/components/ContactForm.vue'
import Navbar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    About,
    Projects,
    ContactForm,
    Navbar,
  },
}
</script>

<style lang="sass">
@import "~compass-mixins"

@function multiple-box-shadow ($n)
  $value: '#{random(100)}vw #{random(100)}vh #FFF'
  @for $i from 2 through $n
    $value: '#{$value} , #{random(100)}vw #{random(100)}vh #FFF'

  @return unquote($value)

$shadows-small:  multiple-box-shadow(725)
$shadows-medium: multiple-box-shadow(175)
$shadows-big:    multiple-box-shadow(75)

.stars
  width: 1px
  height: 1px
  background: transparent
  box-shadow: $shadows-small
  animation         : animStar 50s linear infinite

  &:after
    content: ""
    white-space: pre
    position: absolute
    top: 100vh
    width: 1px
    height: 1px
    background: transparent
    box-shadow: $shadows-small

.stars2
  width: 2px
  height: 2px
  background: transparent
  box-shadow: $shadows-medium
  animation         : animStar 100s linear infinite

  &:after
    content: ""
    white-space: pre
    position: absolute
    top: 100vh
    width: 2px
    height: 2px
    background: transparent
    box-shadow: $shadows-medium

.stars3
  width: 3px
  height: 3px
  background: transparent
  box-shadow: $shadows-big
  animation         : animStar 150s linear infinite

  &:after
    content: ""
    white-space: pre
    position: absolute
    top: 100vh
    width: 3px
    height: 3px
    background: transparent
    box-shadow: $shadows-big

@keyframes animStar
  from
    transform: translateY(-50vh)
  to
    transform: translateY(-150vh)

@mixin shadow-16dp()
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)

.wrapper
  height: auto
  min-height: 100vh

.page-header
  height: 100vh
  background-size: cover
  background-position: top top
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)
  margin: 0
  padding: 0
  border: 0
  display: flex
  align-items: center
  justify-content: center
  &:before
    background: rgba(0,0,0, 0.2)

.header-filter
  position: relative

  &:before,
  &:after
    position: absolute
    z-index: 1
    width: 100%
    height: 100%
    display: flex
    left: 0
    top: 0
    content: ""

  .layout
    z-index: 2
    position: relative

.container-alt
  padding-right: 15px
  padding-left: 15px
  display: flex
  justify-content: space-between
  width: 100%
  margin-left: auto
  margin-right: auto
  position: relative

  .section-alt &
    flex-direction: column

.main
  background: #FFF
  position: relative
  z-index: 3
  margin: -60px 30px 0
  border-radius: 6px
  @include shadow-16dp()

  .section-alt
    padding: 50px 0

.brand
  text-align: center


.divider
  align-text: center
  hr
    width: 10vw
    height: 5px
    background-color: #4a4a4a
    margin: 30px auto
</style>
