<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import {
  Component, Vue,
} from 'vue-property-decorator'

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
  }
}
</script>
