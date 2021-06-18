<template>
  <div>
    <h3>data-binding</h3>
    <div :id="aaa" @click="handleClick">
      {{isActive ? 'isActive' : 'isnotActive'}}
      <p v-html="html"></p>
      <p :class="{active: !isActive}">class1</p>
      <p :class="[{active: !isActive}]">class2</p>
      <p :style="[styles, style2]">style</p>
      <p>{{getJoinedArr(arr)}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Databind extends Vue {
  private isActive = false

  private arr: number[] = [1, 2, 3]

  private html = '<span>123</span>'

  private aaa = 'main'

  private styles = {
    color: 'red',
    fontSize: '16px',
  }

  private style2 = {
    color: 'blue',
  }

  private handleClick = (): void => {
    // eslint-disable-next-line no-alert
    alert('clicked')
  }

  private getJoinedArr = (arr: number[]): string => arr.join(' ')
}
</script>
