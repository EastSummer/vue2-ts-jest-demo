<template>
  <div>
    <h3>directive</h3>
    <p v-text="text"></p>
    <p v-html="html"></p>
    <p v-show="active">v-show</p>
    <p v-if="active">v-if</p>
    <p v-else-if="text === 1">v-else-if</p>
    <p v-else>v-else</p>
    <ul>
      <li v-for="(item, index) in arr" :key="item">{{item}}: {{index}}</li>
      <li v-for="(key, value, index) in obj" :key="key">
        {{key}}: {{value}} --{{index}}
      </li>
    </ul>
    <div>
      <input type="checkbox" :value="1" v-model="arr" />
      <input type="checkbox" :value="2" v-model="arr" />
      <input type="checkbox" :value="3" v-model="arr" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Derictive extends Vue {
  private text = 'text'

  private active = false

  private html = '<span>this is html</span>'

  private arr = [1, 2, 3]

  private obj = { a: 'a', b: 'b', c: 'c' }

  // v-on @
  // v-bind :
  // v-model
  // 修饰符 .number .trim .lazy
  // v-pre
  // v-cloak
  // v-once
}
</script>
