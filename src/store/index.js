// define vuex Store
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        step: 0,
        lists: [{
            title: '弹雪花',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花1',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花2',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花3',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花4',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花5',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花6',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花7',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花8',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花9',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花10',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花11',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花12',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花13',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花14',
            src: './snow/index.html',
            hidden: false
        }, {
            title: '弹雪花15',
            src: './snow/index.html',
            hidden: false
        }]
    },
    mutations: {
        showTag (state, tagName) {
            state.lists.forEach((list, index) => {
                let related = list.title.indexOf(tagName) > -1;
                list.hidden = !related;
            });
        } 
    }
});

export default store;