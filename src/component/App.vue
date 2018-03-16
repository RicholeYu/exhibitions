<template>
  <div class="page">
      <Search />
      <Tags />
  </div>
</template>

<style lang="less" rel="stylesheet/less">
    * {
        padding: 0;
        margin: 0;
        font-family: "Microsoft Yahei";
    }

    body {
        background: url(../static/image/bg.png) repeat;
    }
</style>

<script>
    import Search from "./Search";
    import Tags from "./Tags";
    
    export default {
        components: { Search, Tags }
    };

</script>


