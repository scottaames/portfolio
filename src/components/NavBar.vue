<template>
  <div
    id="nav"
    v-scroll-show="{
      active: 'animated',
      offset: -300,
    }"
    class="fade-in"
    style="z-index:999999;"
  >
    <scrollactive
      class="navbar is-fixed-top"
      activeClass="has-text-danger"
      :highlightFirstItem="true"
      :scrollOffset="0"
      :offset="0"
      :modifyUrl="false"
    >
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{ 'is-active': showNav }"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        class="navbar-menu pl-5"
        :class="{ 'is-active': showNav }"
      >
        <div class="navbar-start">
          <span class="navbar-item pl-5">
            <a href="#home" class="scrollactive-item has-text-white">
              HOME
            </a>
          </span>
          <span class="navbar-item pl-5">
            <a href="#about" class="scrollactive-item has-text-white">
              ABOUT
            </a>
          </span>
          <span class="navbar-item pl-5">
            <a href="#projects" class="scrollactive-item has-text-white">
              PROJECTS
            </a>
          </span>
          <span class="navbar-item pl-5">
            <a href="#contact" class="scrollactive-item has-text-white">
              CONTACT
            </a>
          </span>
        </div>
        <div class="navbar-end">
          <span class="navbar-item">
            <a download class="button is-link" href="">
              <span class="icon is-small">
                <i class="fas fa-download"></i>
              </span>
              <span>RESUME</span>
            </a>
          </span>
        </div>
      </div>
    </scrollactive>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      showNav: false,
      showNavOnScroll: false,
      isModalActive: false,
    }
  },
  methods: {
    showModal() {
      let modal = document.getElementById('contact-modal')
      modal.classList.add('is-active')
    },
  },
}
</script>

<style lang="sass">
.navbar
  background-color: darken(#112931, 4) !important
  z-index: 9999 !important
.navbar-item
  font-family: 'Raleway', sans-serif !important
  font-weight: 500
.navbar-menu
  background-color: darken(#112931, 4)
  z-index: 9999 !important
.navbar-menu.is-active
  background-color: #112931 !important
.navbar-burger.burger
  z-index: 9999 !important
  color: white
</style>
