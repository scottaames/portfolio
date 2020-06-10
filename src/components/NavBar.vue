<template>
  <div
    id="nav"
    v-scroll-show="{
      active: 'animated',
      delay: 800,
      offset: 500,
    }"
  >
    <scrollactive
      class="navbar fade-in is-fixed-top"
      activeClass="has-text-danger"
      :highlightFirstItem="true"
      :scrollOffset="0"
      :offset="0"
      :modifyUrl="false"
    >
      <div class="navbar-brand">
        <a class="navbar-item" to="/">
          <img src="../assets/img/scott-logo.png" width="112" height="28" />
        </a>

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
        class="navbar-menu"
        :class="{ 'is-active': showNav }"
      >
        <div class="navbar-start">
          <span class="navbar-item">
            <a href="#home" class="scrollactive-item has-text-white">
              HOME
            </a>
          </span>
          <span class="navbar-item px-4">
            <a href="#about" class="scrollactive-item has-text-white">
              ABOUT
            </a>
          </span>
          <span class="navbar-item px-4">
            <a href="#projects" class="scrollactive-item has-text-white">
              PROJECTS
            </a>
          </span>
          <span class="navbar-item px-4">
            <a href="#contact" class="scrollactive-item has-text-white">
              CONTACT
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
  background-color: #112931 !important
.navbar-item
  font-family: 'Raleway-medium'
</style>
