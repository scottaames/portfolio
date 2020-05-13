<template>
  <div>
    <section class="hero is-overlay is-relative is-fullheight-with-navbar">
      <div class="hero-body">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div class="container">
          <h1 class="tracking-in-expand-fwd-top title has-text-white-ter is-1">
            Hello, I'm Scott.
          </h1>
          <h2
            class="tracking-in-expand-fwd-bottom subtitle has-text-white-ter is-3"
          >
            I'm a Full-Stack Web Developer
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="sass">
@import "~compass-mixins"

@function multiple-box-shadow ($n)
  $value: '#{random(2000)}px #{random(2000)}px #FFF'
  @for $i from 2 through $n
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF'

  @return unquote($value)

$shadows-small:  multiple-box-shadow(700)
$shadows-medium: multiple-box-shadow(200)
$shadows-big:    multiple-box-shadow(100)

.hero
  //height: 100%
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)
  overflow: hidden

#stars
  width: 1px
  height: 1px
  background: transparent
  box-shadow: $shadows-small
  animation         : animStar 50s linear infinite

  &:after
    content: " ";
    white-space: pre;
    position: absolute
    top: 2000px
    width: 1px
    height: 1px
    background: transparent
    box-shadow: $shadows-small

#stars2
  width: 2px
  height: 2px
  background: transparent
  box-shadow: $shadows-medium
  animation         : animStar 100s linear infinite

  &:after
    content: " ";
    white-space: pre;
    position: absolute
    top: 2000px
    width: 2px
    height: 2px
    background: transparent
    box-shadow: $shadows-medium

#stars3
  width: 3px
  height: 3px
  background: transparent
  box-shadow: $shadows-big
  animation         : animStar 150s linear infinite

  &:after
    content: " ";
    white-space: pre;
    position: absolute
    top: 2000px
    width: 3px
    height: 3px
    background: transparent
    box-shadow: $shadows-big


@keyframes animStar
  from
    transform: translateY(0px)
  to
    transform: translateY(-2000px)
</style>

<style lang="css" scoped>
.tracking-in-expand-fwd-top {
  -webkit-animation: tracking-in-expand-fwd-top 0.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand-fwd-top 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
}

@-webkit-keyframes tracking-in-expand-fwd-top {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(-500px);
    transform: translateZ(-700px) translateY(-500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd-top {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(-500px);
    transform: translateZ(-700px) translateY(-500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}

.tracking-in-expand-fwd-bottom {
  -webkit-animation: tracking-in-expand-fwd-bottom 0.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand-fwd-bottom 0.8s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

@-webkit-keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(500px);
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(500px);
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
</style>
