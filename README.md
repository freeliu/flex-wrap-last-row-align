# flex-wrap-last-row-align
This is A vue plugin that adds a custom directive(v-flex-wrap-align) to handle css flex-wrap last row items align with above

##  Install

```sh
npm i vue-flex-wrap-last-row-align
```

##  Usage
```js
// main.js || main.ts
import vueFlexWrapLastRowAlign from "vue-flex-wrap-last-row-align";
const app = createApp(App)
app.use(vueFlexWrapLastRowAlign)
app.mount("#app")
```
```vue
<template>
  <div class="flex-wrap-container" v-flex-wrap-align>
    <div class="item" v-for="i in 5" :key="i">
    </div>
  </div>
</template>
<style scoped>
.flex-wrap-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}
.item {
  height: 120px;
  width: 120px;
  background-color: skyblue;
}
</style>
```

