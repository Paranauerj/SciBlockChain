<template>
  <div>
    <div class="sp-blog__main sp-box sp-shadow sp-form-group">
        <form class="sp-blog__main__form">
          <div class="sp-blog__main__rcpt__header sp-box-header">
            Create an Article
          </div>

          <input class="sp-input" placeholder="Title" v-model="title" :disabled="loggedIn == 0" required/>
          <!--<input class="sp-input" placeholder="Ipfs" v-model="ipfs" />-->
           <label>
            <input class="sp-input square-borders" type="file" ref="file" v-on:change="handleFileUpload()" :disabled="loggedIn == 0" accept=".pdf" required/>
          </label>
          <br><br>
          <!--<div v-for="(option, index) in options" v-bind:key="'option' + index">
            <input class="sp-input" placeholder="Option" v-model="option.title" />
          </div>-->
          <!--<sp-button @click="add">+ Add option</sp-button>-->
          <sp-button :disabled="loggedIn == 0" @click="submit">Create Article</sp-button>
          <br><br>
          <div class="sp-token-send__main__fees__header"><strong>Fixed Fee: </strong>5CTO</div> 
        </form>
    </div>
  </div>
</template>
<style scoped>
  .square-borders {
    border-radius: 0px !important;
  }
</style>
<script>
import { AddToIPFS } from '../services/ipfs.js'

export default {
  name: "ArticleForm",
  data() {
    return {
      title: "",
      ipfs: "",
      file: "",
    };
  },
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
    }
  },
  methods: {
    async submit() {
      const value = {
        creator: this.currentAccount,
        title: this.title,
        ipfs: this.ipfs,
      };
      await this.$store.dispatch("paranauerj.scichain.scichain/sendMsgCreateArticle", {
        value,
        fee: [],
      }); 
    },

    async handleFileUpload(){
      this.file = this.$refs.file.files[0];
      
      if(this.file['type'] == "application/pdf"){
        AddToIPFS(this.file, (info) => {
          this.ipfs = info.cid.toString();
        });
      }
      
    }
  }
};
</script>