<template>
  <div>
    <br/><h3> List of Articles </h3>
    <div>
    <div class="sp-blog__main sp-box sp-shadow sp-form-group">
        <div class="sp-box-header">My Uploaded Articles</div>
        <div v-for="article in articles" v-bind:key="'article' + article.id" class="blog_item">
            <p>ID: {{article.id}}</p>
            <p>Title: {{ article.title }}</p>
            <p><a v-bind:href="'https://ipfs.io/ipfs/'+ article.ipfs" target="_blank">See your article</a></p>
        </div>
    </div>
    </div>
  </div>
</template>
<style>
.option-radio > .button {
  height: 40px;
  width: 50%;
}
.blog_item {
    padding-left: 1vw;
    margin-bottom: 1vh;
    font-size: 1.5rem;
    background: hsl(0, 0%, 97%);
    color: rgb(88, 88, 88);
}
</style>
<script>
export default {
  computed: {

    currentAccount() {
      if (this._depsLoaded) {
        if (this.loggedIn) {
          return this.$store.getters['common/wallet/address']
        } else {
          return null
        }
      } else {
        return null
      }
    },
    loggedIn() {
      if (this._depsLoaded) {
        return this.$store.getters['common/wallet/loggedIn']
      } else {
        return false
      }
    },
    articles() { 
      return (
        this.$store.getters["paranauerj.scichain.scichain/getArticleAll"]({
          params: {}
        })?.Article ?? []
      ).filter( art => {
          return art.creator == this.currentAccount ? art : undefined;
      });
    },
  },
  methods: {

  },
};
</script>
