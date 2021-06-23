<template>
  <div id="instance">
    this is Vue
    <!-- <lifecycle /> -->
    <!-- <databind /> -->
    <!-- <computed /> -->
    <!-- <directive /> -->
    <!-- <Define active @change="handleChangeDefine" /> -->

    <Features>
      <template v-slot="slotProps">
        <p>header {{slotProps.user.firstname}}</p>
      </template>
      <template #header="{ user }">
        <p >解构 -- {{user.firstname}}</p>
      </template>
    </Features>
    <input type="text" v-model="value" />

    <hr />
    <h3 class="scss">scss</h3>
    <hr />
    <router-link to="/vue/test">test</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Provide, ProvideReactive,
} from 'vue-property-decorator'
import {
  State,
  Getter,
  // Action,
  // Mutation,
  namespace,
} from 'vuex-class'

import { IMod1 } from '../../store/mod/interface'

import Lifecycle from './p2-lifecycle/lifecycle.vue'
import Databind from './p3-data-binding/databind.vue'
import Computed from './p4-computed/computed.vue'
import Directive from './p5-directive/directive.vue'
// Component
import Define from './p6-component/define.vue'
import Features from './p6-component/features.vue'
// Vuex

const mod1S = namespace('mod1')

@Component({
  components: {
    Lifecycle,
    Databind,
    Computed,
    Directive,
    Define,
    Features,
  },
})
export default class VueExample extends Vue {
  @State mod1!: IMod1

  @Getter fullName: any

  // @Action('foo') actionFoo

  @mod1S.Mutation('add') add!: any

  @Provide('foo') foo = 'foo'

  @ProvideReactive('value') value = ''

  private handleChangeDefine = ():void => console.log('Define click')

  get a(): string {
    return this.$store.state
  }

  created(): void {
    console.log('111', this.mod1)
    console.log('222', this.fullName)
    this.add(3)
  }

  // 一些参考
  // 官方文档：https://www.npmjs.com/package/vue-property-decorator#Ref
  // https://www.it610.com/article/1279891986387582976.htm
}
</script>

<style scoped lang="scss">
@import "@/styles/index.scss";

.scss {
  @include font();
}
</style>
