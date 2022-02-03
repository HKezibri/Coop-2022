<template>
  <div>
    <Header />
    <section class="section">
        <template v-for="member in members">
          <router-link :to="{name:'Member', params:{idMembre:member.id}}" :key="member.id" class="box">
            <!-- <Member :key="member.id" :member="member" /> -->
                 <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img :src="avatar(member)">
                    </figure>
                  </div>
                  <div class="media-content">
                      <p class="title is-4">{{member.fullname}}</p>
                      <p class="subtitle is-6">{{member.email}}</p>
                  </div>
                  
                </div>
              </div>
          </router-link>
        </template>
    </section>
  </div>
</template>

<script>
import Member from "@/components/Member.vue"
export default {
  components: {
    Member
  },
  data() {
    return {
        members: []
    };
  },
    mounted() {
    this.$api.get(`members`).then((response) => {
      this.members = response.data;
    });
  },
};
</script>

<style></style>
