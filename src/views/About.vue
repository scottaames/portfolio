<template>
  <section id="about" class="section">
    <div class="container has-text-centered">
      <div class="brand has-text-centered">
        <h1 class="title is-spaced">
          ABOUT
        </h1>
      </div>
      <div class="divider">
        <hr />
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile box is-child has-text-centered">
            <div class="hex-wrap">
              <div class="hexagon">
                <i class="mdi mdi-speedometer mdi-48px mdi-light"></i>
              </div>
            </div>
            <p class="title is-4">Fast</p>
            <p class="subtitle">What is up?</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile box is-child has-text-centered">
            <p class="title is-4">Intuitive</p>
            <p class="subtitle">Bar</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile box is-child has-text-centered">
            <p class="title is-4">Responsive</p>
            <p class="subtitle">Bar</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile box is-child has-text-centered">
            <p class="title is-4">Attractive</p>
            <p class="subtitle">With some content</p>
            <div class="content"></div>
          </article>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child box">
                <p class="title">Vertical tiles</p>
                <p class="subtitle">Top box</p>
              </article>
              <article class="tile is-child box">
                <p class="title">Vertical tiles</p>
                <p class="subtitle">Bottom box</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Middle box</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png" />
                </figure>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Wide column</p>
              <p class="subtitle">Aligned with the right column</p>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="content">
              <p class="title">Tall column</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  semper diam at erat pulvinar, at pulvinar felis blandit.
                  Vestibulum volutpat tellus diam, consequat gravida libero
                  rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend,
                  nunc dui porta orci, quis semper odio felis ut quam.
                </p>
                <p>
                  Suspendisse varius ligula in molestie lacinia. Maecenas varius
                  eget ligula a sagittis. Pellentesque interdum, nisl nec
                  interdum maximus, augue diam porttitor lorem, et sollicitudin
                  felis neque sit amet erat. Maecenas imperdiet felis nisi,
                  fringilla luctus felis hendrerit sit amet. Aenean vitae
                  gravida diam, finibus dignissim turpis. Sed eget varius
                  ligula, at volutpat tortor.
                </p>
                <p>
                  Integer sollicitudin, tortor a mattis commodo, velit urna
                  rhoncus erat, vitae congue lectus dolor consequat libero.
                  Donec leo ligula, maximus et pellentesque sed, gravida a
                  metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                  lacus, quis faucibus libero. Quisque non semper leo.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- <a class="button is-primary is-medium">
        <span class="icon is-medium">
          <i class="fab fa-github"></i>
        </span>
        <span>/scottaames</span>
      </a>
      <p class="title is-4 has-text-black-ter">
        Employment
      </p>
      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Status</span>
            <span
              class="tag is-info is-medium
          "
              >Looking for work</span
            >
          </div>
        </div>

        <p class="is-size-8 has-text-weight-medium has-text-black">
          I'm currently looking for new opportunities as a web developer or
          software developer. If you have a position or project that you think
          i'm the right fit for, please use the contact form by clicking the
          blue button in the top-right corner of your screen to send a message
          to my personal inbox.
        </p>

        <p class="title has-text-black-ter">About Me</p>
        <figure class="image is-128x128">
          <img src="../assets/img/scottPic.jpeg" />
        </figure>
      </div> -->

<script>
export default {
  name: 'about',
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="sass">
.hex-wrap
  display: inline-block
  height: 80px
  position: relative
  text-align: center
  width: 80px
.hexagon
  background-color: #04c2c9
  display: inline-block
  height: 100%
  width: calc(100% * 0.57735)
  &:before
    background-color: inherit
    content: ""
    height: inherit
    position: absolute
    right: calc((100% / 2) - ((100% * 0.57735) / 2))
    top: 0
    transform: rotateZ(60deg)
    width: inherit
  &:after
    background-color: inherit
    content: ""
    height: inherit
    position: absolute
    right: calc((100% / 2) - ((100% * 0.57735) / 2))
    top: 0
    transform: rotateZ(-60deg)
    width: inherit
</style>
