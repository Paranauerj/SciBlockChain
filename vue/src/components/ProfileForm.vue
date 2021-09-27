<template>
  <div>
    <div v-if="loggedIn">
    <!-- Create Profile Form -->
    <div class="sp-blog__main sp-box sp-shadow sp-form-group" v-if="!isRegistered">
        <form class="sp-blog__main__form">
          <div class="sp-blog__main__rcpt__header sp-box-header">
            Create your profile
          </div>

          <input class="sp-input" placeholder="Name" v-model="name" required/>
          <input class="sp-input" placeholder="University" v-model="university" required/>
          <input class="sp-input" placeholder="Link" v-model="link" required/>
          <textarea class="sp-input" placeholder="About me" v-model="about" required></textarea>

          <sp-button :disabled="loggedIn == 0" @click="submit">Create Profile</sp-button>
          <br><br>
          <div class="sp-token-send__main__fees__header"><strong>Fixed Fee: </strong>15CTO</div> 
        </form>
    </div>

    <!-- List user info -->
    <div class="sp-type-list sp-type__list" v-else>
      <div class="sp-type-list__main sp-box sp-shadow">
          <div class="sp-type-list__header sp-box-header">INFO</div>
          <div>
            <!---->
            <div class="sp-type-list__item">
                <div class="sp-type-list__item__icon">
                  <div class="sp-icon sp-icon-Docs"></div>
                </div>

                <!-- User data -->
                <div class="sp-type-list__item__details">
                  <div class="sp-type-list__item__details__field">
                    <strong>Address</strong>
                    <br> {{profileData.creator}}
                  </div>
                  <div class="sp-type-list__item__details__field">
                    <strong>Id</strong>
                    <br> {{profileData.id}}
                  </div>
                  <div class="sp-type-list__item__details__field">
                    <strong>Name</strong>
                    <br><input type="text" ref="name" v-model="name" :disabled="!isEditing" :class="{view: !isEditing}">
                  </div>
                  <div class="sp-type-list__item__details__field">
                    <strong>University</strong>
                    <br> <input type="text" ref="university" v-model="university" :disabled="!isEditing" :class="{view: !isEditing}">
                  </div>
                  <div class="sp-type-list__item__details__field">
                    <strong>Link</strong>
                    <br> <input type="text" ref="link" v-model="link" :disabled="!isEditing" :class="{view: !isEditing}">
                  </div>
                  <div class="sp-type-list__item__details__field">
                    <strong>About</strong>
                    <br> <textarea ref="about" v-model="about" :disabled="!isEditing" :class="{view: !isEditing}"></textarea>
                  </div>
                  
                </div>
                <div class="sp-type-list__item__more" style="width: auto; height: auto;">
                  <!--<div class="sp-icon sp-icon-More"></div>-->
                  <button @click="isEditing = !isEditing" v-if="!isEditing">
                    Edit
                  </button>
                  <button @click="isEditing = false; updateProfile()" v-else-if="isEditing">
                    Save
                  </button>
                  <button v-if="isEditing" @click="isEditing = false; deleteProfile()">Delete</button>
                  <button v-if="isEditing" @click="isEditing = false">Cancel</button>

                </div>
            </div>
          </div>
      </div>
      <!----><!----><!---->
    </div>
    </div>
  </div>
</template>

<style>
.option-radio > .button {
  height: 40px;
  width: 50%;
}
.profile_item {
    padding-left: 1vw;
    margin-bottom: 1vh;
    font-size: 1.5rem;
    background: hsl(0, 0%, 97%);
    color: rgb(88, 88, 88);
}
.view {
  border-color: transparent;
  background-color: initial;
  color: initial;
  margin-left: -0.3rem;
}
</style>

<script>
export default {
  data(){
    return {
      isEditing: false,
      name: "",
      university: "",
      link: "",
      about: ""
    }
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
    },
    isRegistered(){
        return (
          this.getUserData().length == 1
        )
    },

    profileData(){
      return this.getUserData()[0];
    },


  },
  methods: {
    async submit() {
      const value = {
        creator: this.currentAccount,
        name: this.name,
        university: this.university,
        link: this.link,
        about: this.about
      };
      await this.$store.dispatch("paranauerj.scichain.scichain/sendMsgCreateProfile", {
        value,
        fee: [],
      }); 
    },

    async updateProfile(){
      const value = {
        id: this.profileData.id,
        creator: this.currentAccount,
        name: this.name,
        university: this.university,
        link: this.link,
        about: this.about
      };
      await this.$store.dispatch("paranauerj.scichain.scichain/sendMsgUpdateProfile", {
        value,
        fee: [],
      }); 
    },

    async deleteProfile(){
      const value = {
        id: this.profileData.id,
        creator: this.currentAccount
      };
      if(confirm("This will delete your profile. It's not possible to restore this action once it's complete. You can create a new one whenever your want. Are you sure?")){
        await this.$store.dispatch("cosmonaut.blog.blog/sendMsgDeleteProfile", {
          value,
          fee: [],
        }); 
      }
    },


    getUserData(){
      return (this.$store.getters["paranauerj.scichain.scichain/getProfileAll"]({
              params: {}
            })?.Profile ?? []
        ).filter( prof => {
            return prof.creator == this.currentAccount ? prof : undefined;
        });
    },

    loadUserInfo(){
      this.name = this.profileData.name;
      this.university = this.profileData.university;
      this.link = this.profileData.link;
      this.about = this.profileData.about;
    }
  },
  mounted(){
    if(this.isRegistered){
      this.loadUserInfo();
    }
  },

  updated(){
    if(this.name == "" && this.isRegistered){
      this.loadUserInfo();
    }
  }
};
</script>
