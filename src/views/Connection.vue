<template>
       <section class="hero is-warning is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">     
                            <div class="box">
                                <h1 class="title">Coop</h1>
                                <h2 class="subtitle">Se connecter</h2>
                            </div>                   
                            <form class="box" @submit.prevent="validation">
                                <div class="field">
                                    <label class="label">Email</label>
                                    <div class="control">
                                        <input class="input" type="email" v-model="email" >
                                    </div>
                                </div>
                                <div class="field">
                                    <p class="">
                                        <input class="input" type="password" required v-model="password">
                                        <span class="icon is-small is-left">
                                        </span>
                                    </p>
                                </div>
                                <div class="buttons">
                                    <button class="button">Valider</button>
                                    <router-link class="button is-text" to="/creation-compte">Creer un compte</router-link>
                                </div>
                                
                            </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>


export default {
  name: 'Home',
  data(){
      return{
          fullname: "Hiba KEZIBRI",
          email: "kezibri.hiba@gmail.com",
          password: "test"
      }
  },
  methods:{
      validation(){
          this.$api.post('members/signin',{
              email:this.email,
              password:this.password
          }).then(response=>{
              //console.log(response.data)
              //alert('Votre etes connecte')
              this.$store.commit('setToken',response.data.token);
              this.$store.commit('setMember',response.data.member);
              this.$router.push("/")
          }).catch(error=>{
              //alert(error.response.data.message)
              //this.$router.push("/connection")
          })
      },
  },

}
</script>
