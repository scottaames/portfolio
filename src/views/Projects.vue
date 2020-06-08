<template>
  <section id="projects" class="flex">
    <div class="brand">
      <h1 class="title pt-6 pb-4">
        PROJECTS
      </h1>
    </div>
    <div class="divider pb-6 mb-3">
      <hr />
    </div>
    <div class="filter-wrap animated fade-in" data-animation="fade-in">
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

    <div id="gallery" class="container-proj animated flex row wrap">
      <div
        class="mix"
        :class="project.language"
        :key="project.key"
        v-for="project in projects"
        style="display: inline-block;width=100%"
      >
        <div>
          <div
            class="card-alt"
            :style="{
              backgroundImage: `url(${project.imageUrl})`,
            }"
          ></div>
          <div class="text">
            <div class="bold">{{ project.title }}</div>
            <span class="highlight">{{ project.subtitle }}</span>
          </div>
          <div class="button-alt">GITHUB</div>
          <!-- <div
              :class="{ disabled: project.demoUrl ? false : true }"
              class="button-alt"
              >DEMO</div
            > -->
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
*,
*:before,
*:after {
  box-sizing: border-box;
}
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
  color: #e31b6d;
}
.bold {
  font-family: 'Raleway-bold';
}
.button-alt {
  border: 2px solid #fff;
  box-sizing: inherit;
  cursor: pointer;
  display: inline-block;
  font-size: 13pt;
  padding: 10px 20px;
  transition: all 0.5s;
}
.transition {
  transition: 0.7s;
}
section#projects {
  color: #616161;
  line-height: 11pt;
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
@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}
@keyframes flipInX {
  from {
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
    -webkit-transform: perspective(400px) rotateY(90deg);
    transform: perspective(400px) rotateY(90deg);
  }
  40% {
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    -webkit-transform: perspective(400px) rotateY(-20deg);
    transform: perspective(400px) rotateY(-20deg);
  }
  60% {
    opacity: 1;
    -webkit-transform: perspective(400px) rotateY(10deg);
    transform: perspective(400px) rotateY(10deg);
  }
  80% {
    -webkit-transform: perspective(400px) rotateY(-5deg);
    transform: perspective(400px) rotateY(5deg);
  }
  to {
    opacity: 1;
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes popDown {
  0% {
    transform: translateY(-100px);
  }
}
@keyframes slideUp {
  0% {
    transform: translateY(300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideDown {
  0% {
    transform: translateY(-300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes toBottomFromTop {
  49% {
    transform: translateY(100%);
  }
  50% {
    opacity: 0;
    transform: translateY(-100%);
  }
  51% {
    opacity: 1;
  }
}
@keyframes popIn {
  0% {
    transform: scale(0);
  }
  60% {
    opacity: 1;
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
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
  background: #e31b6d;
  color: white;
}
section#projects .float-bar .row {
  bottom: 0;
  left: -30px;
  position: absolute;
  top: 0;
  margin: auto 0;
  transition: left 0.5s ease-in-out;
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
  left: 0;
  position: absolute;
  right: 0;
  border: 2px solid #e31b6d;
  font-size: 13pt;
  margin: 0 auto;
  padding: 7px 0;
  width: 170px;
}
section#projects #gallery .mix {
  display: inline-block;
  position: relative;
}
section#projects #gallery .mix .waypoint {
  background: #fff;
}
section#projects #gallery .mix .button-alt:hover {
  background: #e31b6d;
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
  width: calc(50vw - 8px);
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
@media screen and (max-width: 400px) {
  section#projects #gallery .mix .card-alt {
    width: 100vw;
  }
}
@media screen and (min-width: 600px) {
  section#projects {
    line-height: 18pt;
  }
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
  }
}
@media screen and (min-width: 960px) {
  .waypoint {
    opacity: 0;
  }

  .animated.waypoint#gallery {
    opacity: 1;
  }
  .animated.waypoint#gallery .mix:nth-child(1) > div {
    animation: slideUp 0.75s 0.1s ease both;
    opacity: 0;
  }
  .animated.waypoint#gallery .mix:nth-child(2) > div {
    animation: slideUp 0.75s 0.2s ease both;
    opacity: 0;
  }
  .animated.waypoint#gallery .mix:nth-child(3) > div {
    animation: slideUp 0.75s 0.3s ease both;
    opacity: 0;
  }
  .animated.waypoint#gallery .mix:nth-child(4) > div {
    animation: slideUp 0.75s 0.4s ease both;
    opacity: 0;
  }
  .animated.waypoint#gallery .mix:nth-child(5) > div {
    animation: slideUp 0.75s 0.5s ease both;
    opacity: 0;
  }
  .animated.waypoint#gallery .mix:nth-child(6) > div {
    animation: slideUp 0.75s 0.6s ease both;
    opacity: 0;
  }
  .animated.waypoint#gallery .mix:nth-child(7) > div {
    animation: slideUp 0.75s 0.7s ease both;
    opacity: 0;
  }
  .animated.waypoint#gallery .mix:nth-child(8) > div {
    animation: slideUp 0.75s 0.8s ease both;
    opacity: 0;
  }
  .animated.waypoint#gallery .mix:nth-child(9) > div {
    animation: slideUp 0.75s 0.9s ease both;
    opacity: 0;
  }
  .animated.slide-up {
    animation: slideUp 0.75s ease both;
  }
  .animated.slide-down {
    animation: slideDown 0.75s ease both;
  }
  .animated.slide-in-left {
    animation: slideInLeft 0.75s ease both;
  }
  .animated.slide-in-right {
    animation: slideInRight 0.75s ease both;
  }
  .animated.flip-in-x {
    animation: flipInX 0.75s ease both;
  }
  .animated.fade-in {
    animation: fadeIn 0.75s ease both;
  }
  .animated.pop-in {
    animation: popIn 1s both;
  }
  section#projects #gallery .mix .card-alt {
    width: 390px;
  }
  section#projects .filter {
    font-size: 13pt;
    margin: 0 25px;
    padding: 0 40px;
  }
}
</style>
