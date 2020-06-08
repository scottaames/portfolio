<template>
  <div id="app">
    <div class="wrapper">
      <parallax
        id="home"
        :fixed="true"
        fixedClass="page-header"
        containerClass="header-filter"
        class="section-alt"
      >
        <div class="container-alt ">
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
                  v-scroll-to="'#projects'"
                  class="button is-link is-outlined is-medium"
                >
                  View my work
                </a>
              </p>
            </div>
          </div>
        </div>
      </parallax>

      <Navbar
        v-scroll-show="{
          active: 'show slideInUp is-fixed-top',
          delay: 1000,
          offset: 500,
          parentId: 'nav',
        }"
      />
      <parallax
        parallaxClass="main"
        sectionClass="section-alt"
        containerClass=""
      >
        <About />

        <Projects />

        <ContactForm />
      </parallax>
    </div>
    <div class="footer my-6 py-6">
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

<style lang="sass"></style>
