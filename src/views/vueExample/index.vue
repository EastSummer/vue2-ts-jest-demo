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
    <router-link to="/vue/test">test</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Provide, ProvideReactive,
} from 'vue-property-decorator'
import Lifecycle from './p2-lifecycle/lifecycle.vue'
import Databind from './p3-data-binding/databind.vue'
import Computed from './p4-computed/computed.vue'
import Directive from './p5-directive/directive.vue'
// Component
import Define from './p6-component/define.vue'
import Features from './p6-component/features.vue'

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
  @Provide('foo') foo = 'foo'

  @ProvideReactive('value') value = ''

  private handleChangeDefine = ():void => console.log('Define click')

  // 一些参考
  // 官方文档：https://www.npmjs.com/package/vue-property-decorator#Ref
  // https://www.it610.com/article/1279891986387582976.htm
}
</script>
