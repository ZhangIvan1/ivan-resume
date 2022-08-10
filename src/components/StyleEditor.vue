<template>
  <div class="styleEditor" ref="container">
    <div class="code" v-html="codeInStyleTag"></div>
    <pre class="" v-html="highlightedCode"></pre>
    <div v-on:click="test()">test</div>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  export default {
    name: 'StyleEditor',
    props: ['code'],
    computed: {
      highlightedCode: function () {
        // console.warn('test-xxx', Prism.highlight(this.code, Prism.languages.css));
        return Prism.highlight(this.code, Prism.languages.css)
      },
      codeInStyleTag: function () {
        return `<style>${this.code}</style>`
      }
    },
    methods: {
      goBottom() {
        this.$refs.container.scrollTop = 100000
      },
      test() {
        console.warn('test-test', this.codeInStyleTag);
        console.warn('test-5', Prism.highlight(this.code, Prism.languages.css));
      }
    }
  }

</script>

<style scoped>
  pre{
  }
  @media (max-width:500px){
    pre{
    }
  }
  .code {
    display: none;
  }
</style>
