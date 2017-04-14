<template>
  <nav id="menu">
    <!--<a href="#home"><logo class="logo-menu" color="white"></logo></a>-->
    <ul>
      <li data-menuanchor="home"><a href="#home">Home</a></li>
      <li data-menuanchor="contato"><a href="#contato">Contato</a></li>
    </ul>
  </nav>
</template>

<script>
  import Logo from './Logo.vue'
  export default {
    components: {
      Logo
    },
    name: 'Menu',
    data () {
      return {}
    }
  }
</script>

<style lang="stylus">
  linkMenuColor = #fff
  .logo-menu
    height 45px
    width 35px
    position absolute
    top 5px
    left 10px
  #menu
    position fixed
    width 100vw
    height 55px
    top 0
    left 0
    background-color rgba(0, 0, 0, 0.44)
    box-shadow 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.3)
    ul
      display flex
      justify-content center
      li
        font-size 18pt
        height 55px
        &.active
          a
            color #00bd79
        a
          padding 16px
          display block
          text-decoration none
          color linkMenuColor
          transition 0.3s all linear
          &:link
            text-decoration none
          &:hover
          &:active
            color #00bd79

  @media only screen and (max-device-width: 480px)
    .logo-menu
      height 75px
      width 55px
    #menu
      height 95px
      ul
        li
          height 95px
          font-size 45pt

</style>
