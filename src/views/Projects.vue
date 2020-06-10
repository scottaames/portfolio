<template>
  <section id="projects" class="section">
    <div class="container flex">
      <div
        v-scroll-show="{
          active: 'animated',
          offset: this.offsetAmount,
        }"
        class="header slide-in-right"
      >
        PROJECTS
      </div>
      <div
        v-scroll-show="{
          active: 'animated',
          offset: this.offsetAmount,
          delay: 200,
        }"
        class="header-bar slide-in-right"
      ></div>
      <div
        v-scroll-show="{
          active: 'animated',
          offset: this.offsetAmount,
          delay: 200,
        }"
        class="filter-wrap fade-in"
      >
        <div class="flex row">
          <div class="filter active" data-filter="all">
            ALL
          </div>
          <div class="filter" data-filter=".vue">
            VUE
          </div>
          <div class="filter" data-filter=".react">
            REACT
          </div>
          <div class="filter" data-filter=".js">
            JAVSCRIPT
          </div>
        </div>
      </div>

      <div
        v-scroll-show="{
          active: 'animated',
          offset: this.offsetAmount,
        }"
        id="gallery"
        class="container-proj flex row wrap"
      >
        <div
          class="mix"
          :class="project.language"
          :key="project.key"
          v-for="project in projects"
          style="display: inline-block;"
        >
          <div>
            <div
              class="card-alt"
              :style="{
                backgroundImage: `url(${project.imageUrl})`,
              }"
            ></div>
            <div class="text">
              <div class="bold is-size-4">{{ project.title }}</div>
              <span class="highlight is-size-5">{{ project.subtitle }}</span>
            </div>
            <div class="buttons-container">
              <a :href="project.githubUrl" target="_blank" class="button-alt"
                >GITHUB</a
              >
              <a
                :href="project.demoUrl ? project.demoUrl : '#'"
                :class="{ disabled: project.demoUrl ? false : true }"
                target="_blank"
                class="button-alt"
              >
                DEMO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mixitup from 'mixitup'

export default {
  name: 'projects',
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
          title: 'CartoCosmos',
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
          subtitle: 'JavaScript / React',
          language: 'react',
          imageUrl:
            'https://raw.githubusercontent.com/scottaames/portfolio-site/master/src/assets/img/LeafletPlanetaryDemo.png?token=AGELFKCQVAYKM5TB4UIPMTS6425SI',
          githubUrl:
            'https://github.com/CartoCosmos/CartoCosmos/tree/master/app',
          demoUrl: 'http://cartocosmos.github.io/',
        },
        {
          key: 3,
          title: 'ConFusion',
          subtitle: 'JavaScript / Bootstrap',
          language: 'js',
          imageUrl:
            'https://raw.githubusercontent.com/scottaames/portfolio-site/master/src/assets/img/ConFusionDemo.png?token=AGELFKA5KI4WG4V4OVVDNDK6426LK',
          githubUrl: 'https://github.com/scottaames/conFusion',
          demoUrl: null,
        },
        {
          key: 4,
          title: 'Portfolio',
          subtitle: 'Vue',
          language: 'vue',
          imageUrl:
            'https://raw.githubusercontent.com/scottaames/portfolio-site/master/src/assets/img/PortfolioDemo.png',
          githubUrl: 'https://github.com/scottaames/portfolio-site',
          demoUrl: null,
        },
      ],
    }
  },
  mounted: function() {
    let container = document.querySelector('#gallery')
    let mixer = mixitup(container)
  },
}
</script>

<style lang="css">
.flex {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.flex.row {
  flex-direction: row;
}
.flex.wrap {
  flex-wrap: wrap;
}
.highlight {
  color: #ba1032;
}
.bold {
  font-family: 'Raleway-bold';
}
.buttons-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.buttons-container .button-alt:nth-child(1) {
  left: 19%;
}
.buttons-container .button-alt:nth-child(2) {
  left: 51%;
}
.button-alt {
  border: 2px solid #fff;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 13pt;
  padding: 10px 0;
  transition: all 0.5s;
}
.mix:hover .button-alt.disabled {
  opacity: 0.5 !important;
  pointer-events: none;
}
.transition {
  transition: 0.7s;
}
section#projects {
  color: #616161;
  padding: 70px 0 70px 0;
  position: relative;
}
section#projects .container-proj {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 10px;
  width: 100%;
}
section#projects {
  background: #f5f5f5;
}
section#projects .container-proj {
  padding: 0;
}
section#projects .filter-wrap {
  position: relative;
  white-space: nowrap;
}
section#projects .filter {
  cursor: pointer;
  font-size: 6pt;
  font-weight: 600;
  padding: 0 20px;
  transition: background-color 0.5s;
}
.mixitup-control-active {
  background: #ba1032;
  color: white;
  transition: left 0.5s ease-in-out;
}
section#projects .float-bar .row {
  bottom: 0;
  left: -30px;
}
section#projects .float-bar .row .filter {
  color: #fff;
}
section#projects .text {
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
section#projects #gallery {
  margin: 20px 0;
}
section#projects #gallery .text,
section#projects #gallery .button-alt {
  color: #1b242f;
  opacity: 0;
  text-align: center;
  transition: all 0.3s ease-in-out;
  z-index: 2;
}
section#projects #gallery .text .bold,
section#projects #gallery .button-alt .bold {
  font-size: 16pt;
}
section#projects #gallery .button-alt {
  bottom: 0;
  position: absolute;
  color: #ba1032;
  border: 2px solid #ba1032;
  font-size: 13pt;
  margin: 0 auto;
  padding: 7px 0;
  width: 30%;
}
section#projects #gallery .mix {
  display: inline-block;
  position: relative;
}
section#projects #gallery .mix {
  background: #fff;
}
section#projects #gallery .mix .button-alt:hover {
  background: #ba1032;
  color: #fff;
}
section#projects #gallery .mix .card-alt {
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
}
section#projects #gallery .mix .card-alt {
  height: 240px;
  max-width: 100%;
  transition: opacity 0.5s;
  width: 240px;
}
section#projects #gallery .mix:hover .card-alt {
  opacity: 0;
}
section#projects #gallery .mix:hover .text {
  cursor: default;
  opacity: 1;
  top: 24%;
}
section#projects #gallery .mix:hover .button-alt {
  bottom: 24%;
  opacity: 1;
}

@media screen and (min-width: 600px) {
  section#projects .filter {
    font-size: 11pt;
    margin: 0 15px;
    padding: 0 30px;
  }
  section#projects .float-bar {
    height: 30px;
  }
  section#projects #gallery .mix .card-alt {
    height: 300px;
    width: 300px;
  }
}
@media screen and (min-width: 960px) {
  .animated#gallery {
    opacity: 1;
  }
  .animated#gallery .mix:nth-child(1) > div {
    animation: slideUp 0.75s 0.1s ease both;
    opacity: 0;
  }
  .animated#gallery .mix:nth-child(2) > div {
    animation: slideUp 0.75s 0.2s ease both;
    opacity: 0;
  }
  .animated#gallery .mix:nth-child(3) > div {
    animation: slideUp 0.75s 0.3s ease both;
    opacity: 0;
  }
  .animated#gallery .mix:nth-child(4) > div {
    animation: slideUp 0.75s 0.4s ease both;
    opacity: 0;
  }
  .animated#gallery .mix:nth-child(5) > div {
    animation: slideUp 0.75s 0.5s ease both;
    opacity: 0;
  }
  .animated#gallery .mix:nth-child(6) > div {
    animation: slideUp 0.75s 0.6s ease both;
    opacity: 0;
  }
  .animated#gallery .mix:nth-child(7) > div {
    animation: slideUp 0.75s 0.7s ease both;
    opacity: 0;
  }
  .animated#gallery .mix:nth-child(8) > div {
    animation: slideUp 0.75s 0.8s ease both;
    opacity: 0;
  }
  .animated#gallery .mix:nth-child(9) > div {
    animation: slideUp 0.75s 0.9s ease both;
    opacity: 0;
  }
  section#projects #gallery .mix .card-alt {
    width: 390px;
    height: 390px;
  }
  section#projects .filter {
    font-size: 13pt;
    margin: 0 25px;
    padding: 0 40px;
  }
}
</style>
