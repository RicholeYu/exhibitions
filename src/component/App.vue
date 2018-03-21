<template>
  <div class="page">
      <Search />
      <Tags />
  </div>
</template>

<style lang="less" rel="stylesheet/less">

@media screen and (min-width: 1024px) {
  html {
    font-size: 12px;
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 10px;
  }
}

* {
  padding: 0;
  margin: 0;
  font-family: "Microsoft Yahei";
}

body {

  background: url(../static/image/bg.png) repeat;

  .page {
    overflow-x: hidden;
  }

}
</style>

<script>
import Search from "./Search";
import Tags from "./Tags";

export default {
  components: { Search, Tags }
};
</script>


