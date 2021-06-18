<template>
  <div class="div" ref="features">
    <h3>插槽</h3>
    <slot :user="user"></slot>
    <div class="header" ref="slot">
      <slot name="header" :user="user"></slot>
    </div>
    <p>Inject: {{foo}}</p>
    <p>InjectReactive: {{value}}</p>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Inject, InjectReactive,
} from 'vue-property-decorator'

@Component
export default class Features extends Vue {
  // https://cn.vuejs.org/v2/guide/components-slots.html#作用域插槽
  private user = {
    firstname: 'east',
    lastname: 'summer',
  }

  @Inject() readonly foo!: string

  @InjectReactive() value!: string

  mounted(): void {
    console.log(this.$refs.features, this.$refs.slot)
  }
}
</script>

<style scoped lang="scss">
.div {
  width: 200px;
  height: 200px;
  border: 1px solid #aaa;
}
</style>
