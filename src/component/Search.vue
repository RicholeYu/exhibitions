<template>
    <div id="search-wrapper">
        <form autocomplete="off" v-bind:class="{focus: isFocus}" @submit.prevent.self>
            <div class="search-ct">
                <input type="text" class="search" placeholder="Search..." autocomplete="off" 
                @focus="isFocus=true;" 
                @blur="isFocus=false;"
                @keyup="insertTagName">
                <i class="search-icon icon-wxbsousuotuiguang"></i>
            </div>
        </form>
    </div>
</template>

<style lang="less">
@import url(../static/css/iconfont.css);

.tran(@property){  
    -webkit-transition:@property .3s ease-out;  
    -moz-transition:@property .3s ease-out;  
    -o-transition:@property .3s ease-out;  
    transition:@property .3s ease-out;  
}  

#search-wrapper {

  display: flex;
  justify-content: center;
  margin-top: 100px;

  form {
    border: 2px solid #666;
    border-radius: 7px;
    padding: 0 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 50px;
    text-align: left;
    width: 750px;
    .tran(border);
  }

  form.focus {
      border: 2px solid #44ae73;
  }

  .search-ct {

    position: relative;

    .search {
      height: 46px;
      border: 0;
      background: transparent;
      outline: none;
      color: #ccc;
      margin-left: 10px;
      width: 600px;
      font-size: 1.4rem;
      font-weight: 300;
    }

    .search-icon {
      font-family: "iconfont";
      font-size: 32px;
      font-style: normal;
      color: #44ae73;
      float: right;
      height: 40px;
      line-height: 40px;
      position: absolute;
      top: 3px;
      bottom: 3px;
      right: 0px;
      padding: 0 20px;
      border-radius: 3px;
      background-color: rgba(206, 206, 206, 0.1);
      cursor: pointer;
      font-weight: 300;
      .tran(color);
      .tran(background-color);
    }

  }

  .search-icon:hover {
    color: #fff;
    background-color: #44ae73;
  }
}
</style>

<script>
export default {
    data () {
        return {
            isFocus: false
        }
    },

    methods: {
        insertTagName () {
            this.$store.commit('showTag', window.event.target.value);
        }
    }
};
</script>


