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
@media screen and (min-width: 1024px) {
    #search-wrapper {
        width: 80rem;
    }
};

@media screen and (max-width: 1024px) {
    #search-wrapper {
        width: 90%;
    }
};

#search-wrapper {
  margin: 10rem auto 0;

  form {
    border: .2rem solid #666;
    border-radius: .7rem;
    padding: 0 .3rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 5rem;
    text-align: left;
    width: 100%;
    .tran(border);
  }

  form.focus {
      border: .2rem solid #44ae73;
  }

  .search-ct {

    position: relative;

    .search {
      height: 4.6rem;
      border: 0;
      background: transparent;
      outline: none;
      color: #ccc;
      margin-left: 1rem;
      width: 600px;
      font-size: 1.4rem;
      font-weight: 300;
    }

    .search-icon {
      font-family: "iconfont";
      font-size: 3.2rem;
      font-style: normal;
      color: #44ae73;
      float: right;
      height: 4rem;
      line-height: 4rem;
      position: absolute;
      top: .3rem;
      bottom: .3rem;
      right: 0;
      padding: 0 2rem;
      border-radius: .3rem;
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


