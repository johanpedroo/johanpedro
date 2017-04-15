<template>
    <section class="intro section-fp" data-anchor="home" id="sectionl">
      <div class="fp-bg"></div>
      <canvas id="spiders" class="hidden-xs"></canvas>
      <section class="logo-container">
        <article>
          <logo class="logo" color="white"></logo>
        </article>
        <article class="nome">
          Johan Pedro Inês
        </article>
        <article class="dev">
          Developer
        </article>
      </section>
    </section>
</template>

<script>
  import Logo from './Logo'
  export default {
    name: 'Home',
    components: {
      Logo
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
  @import '../assets/css/style.styl'
  @media only screen and (min-width: 480px)
    .intro
      width: 100vw;
      height: 100vh;
      text-align: center;
      color: #fff;
      position:relative;
      display flex
      justify-content: center;
      z-index 100
    #sectionl
      .fp-bg
        background-image: url('../assets/bg.jpg');
        background-size: cover;
        background-position: center 30%;
        width 100vw
        height  100vh
        -webkit-filter: blur(1px);
        -moz-filter: blur(1px);
        -o-filter: blur(1px);
        -ms-filter: blur(1px);
        filter: blur(1px);
    #spiders
      position: absolute;
      top 0
      left 0
      width 100vw
      height 100vh

    .logo-container
      position absolute
      top 0
      height 100vh
      width 100vw
      display flex
      justify-content center
      flex-direction column
      .logo
        -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        -moz-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        width: 20vw;
        margin 0 auto
        line
        path
          box-shadow: -5px -5px 5px #888;
    article
      &.nome
        font-family: fontNome
        top: 30%;
        left: calc(50% - 300px);
        font-size 4em
        font-weight 500
        text-shadow 0 0.3rem 0.9rem rgba(0,0,0,.4)
        -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        -moz-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
      &.dev
        font-family fontNome
        font-size 3em
        text-shadow 0 0.3rem 0.9rem rgba(0,0,0,.4)
        -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        -moz-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  @media only screen and (max-device-width: 480px)
    .intro
      padding: 0;
    .logo-container
      .logo
        min-width: 150px;
        width: 50vw
      .nome
        font-size 8.2em
      .dev
        font-size 6.5em

</style>

