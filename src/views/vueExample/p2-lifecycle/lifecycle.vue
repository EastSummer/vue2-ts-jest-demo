<template>
  <h3>lifecycle</h3>
</template>

<script lang="ts">
import { VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Lifecycle extends Vue {
  text = 'text'

  beforeCreate(): void {
    console.log('beforeCreate: ', this.$el)
  }

  created(): void {
    console.log('created', this.$el)
  }

  beforeMount(): void {
    console.log('beforeMount', this.$el)
  }

  mounted(): void {
    console.log('mounted', this.$el)
  }

  beforeUpdate(): void {
    console.log('beforeUpdate', this)
  }

  updated(): void {
    console.log('updated', this)
  }

  activated(): void {
    console.log('activated', this)
  }

  deactivated(): void {
    console.log('deactiveted', this)
  }

  beforeDestroy(): void {
    console.log('beforeDestroy', this)
  }

  destroy(): void {
    console.log('destroy', this)
  }

  render(h: (arg0: string, arg1: Record<string, unknown>, arg2: string) => VNode): VNode {
    console.log('render function invoked')
    return h('div', {}, this.text)
    // throw new TypeError('render error')
  }

  // 正式打包上线不会调用，只提示当前组件
  // renderError (h, err) {
  //   return h('div', {}, err.stack)
  // }

  // errorCaptured () {
  //   // 会向上冒泡，并且正式环境可以使用
  // }
}
</script>
