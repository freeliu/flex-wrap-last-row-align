# flex-wrap-last-row-align
Handle css flex-wrap last row align width above

##  Install

```sh
npm i @freeliu/vue-flex-wrap-last-row-align
```

##  Usage
```js
// main.js || main.ts
import flexWrapAlign from "@/plugin/flex-wrap-align";
const app = createApp(App)
app.use(flexWrapAlign)
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
  row-gap: 20px;
}
.item {
  height: 120px;
  width: 120px;
  background-color: skyblue;
}
</style>
```

