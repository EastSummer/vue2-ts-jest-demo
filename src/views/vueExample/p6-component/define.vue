<template>
  <div>
    <h3>Component-define</h3>
    <input type="text" v-model="text">
    <p @click="handleChange">click it!</p>
    <p v-show="active">see me if active</p>
    <p>{{value}}</p>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Emit,
} from 'vue-property-decorator'

@Component
export default class Define extends Vue {
  // https://blog.csdn.net/zxl1990_ok/article/details/113358011
  @Prop(Boolean) active?: boolean

  @Prop({
    default: 20,
    validator: (val) => val > 10,
  }) value!: number

  private text = 0

  // https://blog.csdn.net/zxl1990_ok/article/details/113389620
  @Emit('change')
  handleChange(): string {
    return 'chanege'
  }
}

</script>
