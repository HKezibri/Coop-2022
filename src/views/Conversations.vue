<template>
  <div>
      <Header/>
      <section class="section">
        <template v-for="conversation in conversations">
            <Conversation :key="conversation.id" :conversation="conversation" />
        </template>
      </section>
  </div>
</template>

<script>
import Conversation from '@/components/Conversation.vue'
import Connection from './Connection.vue'
export default{

    components: {
        Conversation,
        Connection
    },
    data(){
        return{
            conversations:[]
        }
    },
    mounted(){
        this.$api.get('channels').then(response=>{
            this.conversations = response.data
        })
    }
}
</script>