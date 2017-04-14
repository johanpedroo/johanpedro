<template>
  <section class="section-fp" data-anchor="contato" id="section2">
    <section class="content-contato">
      <h2 class="title is-1">Contato</h2>
      <article class="dados-contato">
        <span class="fone"><a href="tel:+5544998812993"><i class="flaticon-telephone"></i> (44)99881-2993</a></span>
        <span class="face"><a href="https://www.facebook.com/johanpedroo" target="_blank">
          <i  class="flaticon-social"></i>/johanpedroo</a>
        </span>
        <span class="git"><a href="https://github.com/johanpedroo" target="_blank">
          <i  class="flaticon-symbol"></i>/johanpedroo</a>
        </span>
        <span class="email"><a href="mailto:johanpedroo@gmail.com">
          <i  class="flaticon-tool"></i> johanpedroo@gmail.com</a>
        </span>
      </article>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Contato',
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
  @import '../assets/css/style.styl'
  @media only screen and (min-width: 480px)
    #section2
      display flex
      justify-content center
      height 100vh
      h2.title
        background-color #00bd79
        color #fff
        left 50%
        font-size 23pt
        box-shadow 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.3)
        top -20px
      .content-contato
        position absolute
        max-width calc(100vh - 100px)
        background-color #fff
        top 130px
        left 50px
        right 50px
        height calc(100vh - 160px)
        margin 0 auto
        .dados-contato
          font-family fontNome
          font-size 20pt
          min-height 540px
          max-height calc(100vh - 160px)
          span
            top 20px
            display block
            text-align center
            line-height 13vh
            position relative
            color #7d7a7a
            a
              color #7d7a7a
            i:before
              font-size 30pt
            &.fone
              font-size 2vw
              top 40px
            &.face
            &.git
            &.email
              font-size 3vw
  @media only screen and (max-device-width: 480px)
    #section2
      h2.title
        width 350px
        left 50%
        font-size 40pt
      .content-contato
        max-width 100vw
        top 200px
        height calc(100vh - 370px)
        .dados-contato
          font-family fontNome
          font-size 20pt
          height auto
          margin-top 50px
          span
            top 40px
            i:before
              font-size 40pt
            &.fone
            &.face
            &.git
            &.email
              font-size 8vw
</style>
