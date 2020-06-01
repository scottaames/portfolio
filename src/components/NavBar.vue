<template>
  <div>
    <nav v-if="showNavOnScroll" class="navbar is-spaced has-background-dark">
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
            <a v-scroll-to="'#home'" class="has-text-white">
              Home
            </a>
          </span>
          <span class="navbar-item">
            <a v-scroll-to="'#about'" class="has-text-white">
              About
            </a>
          </span>
          <span class="navbar-item">
            <a v-scroll-to="'#projects'" class="has-text-white">
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
    </nav>
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
    showModal: function() {
      let modal = document.getElementById('contact-modal')
      modal.classList.add('is-active')
    },
  },
}
</script>

<style type="text/css"></style>
