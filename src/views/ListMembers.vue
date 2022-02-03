<template>
  <div>
    <Header />
    <section class="section">
     <!-- <div  v-for="member in members" class="box">
               <p class="title is-4"> {{member.fullname}}</p>
               <p class="title is-6"> {{member.email}}</p>

               <section class="section">
                 <template v-for="member in $store.state.members">
                   <div :key="member.id" class="box">
                     <h2 class="title">{{member.fullname}}</h2>
                     <h3 class="subtitle">{{member.email}}</h3>
                   </div>
                  </template>
                </section>
      </div>-->
        <template v-for="member in members">
            <Member :key="member.id" :member="member" />
        </template>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Member from "@/components/Member.vue"
export default {
  components: {
    Header,
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
