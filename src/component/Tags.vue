<template>
<div class="home-tags">
    <ul>
        <a
        v-for="list in lists" 
        :key="list.title" 
        v-bind:href="list.src"
        v-bind:class="[list.hidden ? 'htags-tag hidden' : list.cls]"
        @click.capture="chooseView(list, $event)"
        >{{ list.title }}</a>
    </ul>
</div>
</template>

<style lang="less">
.home-tags {
  font-size: 16px;
  text-align: center;
  margin: 50px auto;
  width: 75%;
  max-width: 1720px;
  line-height: 1.7;
}

.home-tags .htags-tag {
  font-size: 1.2em;
  color: #5e95bc;
  display: inline-block;
  margin: 0 20px;
  text-decoration: none;
}

.home-tags .htags-tag.hidden {
  display: none;
}

.home-tags .htags-tag::before {
  content: "#";
  vertical-align: -2px;
  color: #3c6e91;
}

.home-tags .htags-tag:hover {
  color: #b8d0e1 !important;
}

.home-tags .htags-tag.-score1,
.home-tags .htags-tag.-score2 {
  font-size: 1.2rem;
  color: #5e95bc;
}

.home-tags .htags-tag.-score3,
.home-tags .htags-tag.-score4 {
  font-size: 1.4rem;
  color: #a6c4da;
}

.home-tags .htags-tag.-score5,
.home-tags .htags-tag.-score6 {
  font-size: 1.6rem;
  color: #47a3d1;
}

.home-tags .htags-tag.-score7,
.home-tags .htags-tag.-score8 {
  font-size: 1.8rem;
  color: #7bbba8;
  font-weight: 300;
}

.home-tags .htags-tag.-score10,
.home-tags .htags-tag.-score9 {
  font-size: 2rem;
  color: #5ed8b1;
  font-weight: 100;
}
</style>

<script>
import scriptImport from '../script';

export default {
  data() {
    return {
      modal5: false,
      choosedList: {}
    };
  },
  methods: {
    getRandomClass() {
      return `htags-tag -score${Math.floor(Math.random() * 10) + 1}`;
    },

    chooseView(thisList, $event) {
      let lists = this.$store.state.lists,
        title = thisList.title;

      for (let index = 0; index < lists.length; index++) {
        if (lists[index].title === title && lists[index].isChoose) {
          $event.preventDefault();
          this.$data.choosedList = Object.assign(thisList, {});
          this.choose();
          break;
        }
      }
    },

    choose() {
      this.$Modal.confirm({
        title: '示例浏览选择',
        content: '您要选择在当前网页显示该效果吗？',
        okText: "在当前网页浏览",
        cancelText: "打开新网页浏览",
        onOk: () => {
            scriptImport(this.$data.choosedList.entry);
        },
        onCancel: () => {
            this.$data.modal5 = false;
            setTimeout(() => {
                window.open(this.$data.choosedList.src);
            }, 500);
        }
      });
    }
  },

  computed: {
    lists() {
      let lists = this.$store.state.lists.slice(0);

      lists.forEach(list => {
        list.cls = this.getRandomClass();
      });

      return lists;
    }
  }
};
</script>


