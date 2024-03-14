<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
import StyleEditor from './components/StyleEditor'
import ResumeEditor from './components/ResumeEditor'
import './assets/reset.css'

export default {
  name: 'App',
  components: {
    StyleEditor,
    ResumeEditor
  },
  data() {
    return {
      interval: 0,
      currentStyle: '',
      enableHtml: false,
      fullStyle: [
        `/*
* Inspired by http://strml.net/
* 最近看到一个很好玩的库
* 身为front end engineer, 终生学习者。
* 我也来学习一波，也来写一份自我介绍吧！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写自我介绍了 */


`,
        `
/* 这个自我介绍好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 读者 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
        ,
        `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
      currentMarkdown: '',
      fullMarkdown: `李维涛
----

我觉得自己的标签： 前端开发里最爱篮球的一部分人

技能
----

* 前端开发
* 中距离投篮
* 善于交流分享开心

爱情经历
----

1. 高中校园爱情到至今

链接
----

* [GitHub](https://github.com/weitao-Li)
`
    }
  },
  created() {
    this.makeResume();
  },
  methods: {
    makeResume: async function () {
      await this.progressivelyShowStyle(0)
      await this.progressivelyShowResume(3)
      await this.progressivelyShowStyle(1)
      await this.showHtml(4)
      await this.progressivelyShowStyle(2)
    },
    showHtml: function () {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        this.enableHtml = true
        resolve()
      })
    },
    progressivelyShowStyle(n) {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        let interval = this.interval
        let showStyle = (async function () {
          let style = this.fullStyle[n]
          if (!style) { return }
          // 计算前 n 个 style 的字符总数
          let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
          let prefixLength = length - style.length
          if (this.currentStyle.length < length) {
            let l = this.currentStyle.length - prefixLength
            let char = style.substring(l, l + 1) || ' '
            this.currentStyle += char
            if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom()
              })
            }
            // console.warn('test', this.currentStyle);
            setTimeout(showStyle, interval)
          } else {
            resolve()
          }
        }).bind(this)
        showStyle()
      })
    },
    progressivelyShowResume() {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        let length = this.fullMarkdown.length
        let interval = this.interval
        let showResume = () => {
          if (this.currentMarkdown.length < length) {
            this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
            // eslint-disable-next-line
            let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
            let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
            if (prevChar === '\n' && this.$refs.resumeEditor) {
              this.$nextTick(() => this.$refs.resumeEditor.goBottom())
            }
            setTimeout(showResume, interval)
          } else {
            resolve()
          }
        }
        showResume()
      })
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}
</style>
