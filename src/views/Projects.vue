<template>
  <div id="projects">
    <div class="container is-fluid ">
      <section class="section">
        <div class="columns is-mobile is-multiline has-text-centered pb-3 mb-6">
          <div class="column is-12 header-bar">
            <div class="brand">
              <h1 class="title pt-6 pb-4">
                PROJECTS
              </h1>
            </div>
            <div class="divider pb-3">
              <hr />
            </div>
          </div>
        </div>

        <div class="controls">
          <button type="button" class="control" data-filter="all">
            ALL
          </button>
          <button type="button" class="control" data-filter=".vue">
            VUE
          </button>
          <button type="button" class="control" data-filter=".react">
            REACT
          </button>
          <button type="button" class="control" data-filter=".js">
            JAVSCRIPT
          </button>
        </div>
        <div class="portfolio">
          <div
            class="mix"
            :class="project.language"
            :key="project.key"
            v-for="project in projects"
            style="display: inline-block;"
          >
            <post-card v-bind="project"></post-card>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard'
import mixitup from 'mixitup'

export default {
  name: 'projects',
  components: {
    PostCard,
  },
  data() {
    return {
      projects: [
        {
          key: 0,
          title: 'Draw Stars',
          subtitle: 'Python',
          language: 'js',
          imageUrl:
            'https://raw.githubusercontent.com/scottaames/portfolio-site/master/src/assets/img/DrawStarsDemo.png?token=AGELFKFUFGMQFLYGMGVWBD26424AG',
          githubUrl: 'https://github.com/scottaames/DrawStars',
          demoUrl: null,
        },
        {
          key: 1,
          title: 'CartoCosmos Website',
          subtitle: 'Vue',
          language: 'vue',
          imageUrl:
            'https://raw.githubusercontent.com/scottaames/portfolio-site/master/src/assets/img/CartoCosmosDemo.png?token=AGELFKEOE6XDFZCJV5X3OZC6425B2',
          githubUrl: 'https://github.com/scottaames/CartoCosmosWebsite',
          demoUrl: 'https://bit.ly/3fINbq5',
        },
        {
          key: 2,
          title: 'Leaflet-planetary',
          subtitle: 'JavaScript/React',
          language: 'react',
          imageUrl:
            'https://raw.githubusercontent.com/scottaames/portfolio-site/master/src/assets/img/LeafletPlanetaryDemo.png?token=AGELFKCQVAYKM5TB4UIPMTS6425SI',
          githubUrl:
            'https://github.com/CartoCosmos/CartoCosmos/tree/master/app',
          demoUrl: 'http://cartocosmos.github.io/',
        },
        {
          key: 3,
          title: 'Bootstrap Restaurant Website',
          subtitle: 'JavaScript/Bootstrap',
          language: 'js',
          imageUrl:
            'https://raw.githubusercontent.com/scottaames/portfolio-site/master/src/assets/img/ConFusionDemo.png?token=AGELFKA5KI4WG4V4OVVDNDK6426LK',
          githubUrl: 'https://github.com/scottaames/conFusion',
          demoUrl: null,
        },
        {
          key: 4,
          title: 'Portfolio Website',
          subtitle: 'JavaScript/Bootstrap',
          language: 'js',
          imageUrl:
            'https://raw.githubusercontent.com/scottaames/portfolio-site/master/src/assets/img/ConFusionDemo.png?token=AGELFKA5KI4WG4V4OVVDNDK6426LK',
          githubUrl: 'https://github.com/scottaames/portfolio-site',
          demoUrl: null,
        },
      ],
    }
  },
  mounted: function() {
    let container = document.querySelector('.portfolio')
    let mixer = mixitup(container)
  },
  computed: {},
}
</script>

<style>
#projects {
  background-color: lighten(#4a4a4a, 65);
}
.control {
  transition: background 150ms;
  cursor: pointer;
}
</style>
