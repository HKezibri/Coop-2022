
<template>
  <div>
    <Header />
    <section class="section">
      <div class="box" v-if="conversation">
        <p class="title is-4">{{conversation.topic}}</p>
        <p class="subtitle is-6">{{conversation.label}}</p>
      </div>
      <poster-message :conversation = "conversation" />

      <template v-for="message in messages">
        <div class="card md-2">
          <div class="card-content">
            <div class="content">{{message.message}}</div>
          </div>
        </div>
      </template>
    </section>
    </div>
</template>

<script>

import PosterMessage from "../components/PosterMessage.vue";
export default {
  components:{
    PosterMessage
  },
  data(){
    return{
      conversation: false,
      messages: [],
    };
  },
  mounted(){
    this.chargerConversation();
    this.$bus.$on('charger-conversation', this.chargerConversation)
    this.$bus.$on('charger-messages', this.chargerMessage)

  },
    methods:{
    chargerConversation(){
      this.$api.get(`channels/${this.$route.params.id}`).then((response) => {
      this.conversation = response.data;
      this.chargerMessage();
      });
    },
    chargerMessage(){
      this.$api.get(`channels/${this.$route.params.id}`).then((response) => {
      this.message = response.data;
     });
    }
  }

 
};
</script>
