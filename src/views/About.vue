<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator'
import G from '@/views/vueExample/g-class/gClass'

@Component
export default class About extends Vue {
  private data = {
    type: 'string',
    name: '私有变量',
  }

  mounted(): void {
    interface test {
      name: string,
      age: number
    }

    const result: test = {
      name: 'lg',
      age: 12,
    }
    console.log('result: ', result)
    const ghy = new G('耿恒玉', 25)
    console.log('ghy: ', ghy)
    ghy.sayHi()
  }
}
</script>
