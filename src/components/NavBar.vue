<template>
  <div id="nav">
    <scrollactive
      class="animated navbar is-fixed-top has-background-dark"
      activeClass="has-text-danger"
      :highlightFirstItem="true"
      :scrollOffset="0"
      :offset="200"
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
              Home
            </a>
          </span>
          <span class="navbar-item">
            <a href="#about" class="scrollactive-item has-text-white">
              About
            </a>
          </span>
          <span class="navbar-item">
            <a href="#projects" class="scrollactive-item has-text-white">
              Projects
            </a>
          </span>
        </div>
        <div class="navbar-end">
          <span class="navbar-item">
            <a target="_blank" class="">
              <span class="icon is-medium has-text-grey-lighter">
                <i class="fab fa-2x fa-github"></i>
              </span>
            </a>
          </span>
          <span class="navbar-item">
            <button class="button is-link is-hover" @click.prevent="showModal">
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
              <span>
                Contact
              </span>
            </button>
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

<style type="text/css"></style>
