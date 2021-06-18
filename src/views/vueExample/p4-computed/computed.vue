<template>
  <div>
    <h3>computed</h3>
    <p>name: {{fullName}} --computed</p>
    <p>name: {{getName()}} --func</p>
    <p>name: {{getFullname()}} --watch</p>
    <p>FirstName: <input type="text" v-model="firstName" /></p>
    <p>LastNume: <input type="text" v-model="lastName" /></p>
    <p>Obj.a: <input type="text" v-model="obj.a" /></p>
    <p>Obj.b: <input type="text" v-model="obj.b" /></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Computed extends Vue {
  private firstName = 'East'

  private lastName = 'Summer'

  private obj = { a: 1, b: 2 }

  get fullName(): string {
    console.log('new name', this.firstName)
    return this.firstName + this.lastName
  }

  private getName = (): string => {
    console.log('getName invoked', this.firstName)
    return this.firstName + this.lastName
  }

  @Watch('firstName')
  private getFullname(): string {
    return this.firstName + this.lastName
  }

  @Watch('obj', { immediate: true, deep: true })
  private getObjA(newVal: string, oldVal: string): void {
    console.log('obj.a change: ', this.obj.a)
  }

  @Watch('obj.b')
  private getObjB(): void {
    console.log('obj.b change: ', this.obj.b)
  }
}
</script>
