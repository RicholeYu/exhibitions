<template>
<div class="home-tags">
    <ul>
        <a v-for="list in lists" 
        :key="list.title" 
        v-bind:href="list.src"
        v-bind:class="[list.hidden ? 'htags-tag hidden' : list.cls]">{{ list.title }}</a>
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
    content: '#';
    vertical-align: -2px;
    color: #3c6e91;
}

.home-tags .htags-tag:hover {
    color: #b8d0e1!important;
}

.home-tags .htags-tag.-score1,.home-tags .htags-tag.-score2 {
    font-size: 1.2rem;
    color: #5e95bc;
}

.home-tags .htags-tag.-score3,.home-tags .htags-tag.-score4 {
    font-size: 1.4rem;
    color: #a6c4da;
}

.home-tags .htags-tag.-score5,.home-tags .htags-tag.-score6 {
    font-size: 1.6rem;
    color: #47a3d1;
}

.home-tags .htags-tag.-score7,.home-tags .htags-tag.-score8 {
    font-size: 1.8rem;
    color: #7bbba8;
    font-weight: 300;
}

.home-tags .htags-tag.-score10,.home-tags .htags-tag.-score9 {
    font-size: 2rem;
    color: #5ed8b1;
    font-weight: 100;
}
</style>

<script>
export default {

    methods: {

        getRandomClass () {
            return `htags-tag -score${Math.floor(Math.random() * 10) + 1}`;;
        }

    },

    computed: {

        lists () {
            let lists = [];

            lists = this.$store.state.lists;

            lists.forEach((list,) => {
                list.cls = this.getRandomClass();
            });

            return lists;
        }

    }
    
}
</script>


