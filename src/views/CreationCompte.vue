<template>
  <section class="hero is-warning is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <div class="box">
              <h1 class="title">Coop</h1>
              <h2 class="subtitle">Creer un compte</h2>
            </div>
            <form class="box" @submit.prevent="validation">
              <div class="field">
                <input class="input" type="text" required v-model="fullname" />
              </div>
              <div class="field">
                <input class="input" type="email" required v-model="email" />
              </div>
              <div class="field">
                <input class="input" type="password" required v-model="password" />
              </div>
              <div class="buttons">
                <button class="button">Valider</button>
                <router-link class="button is-text" to="/connection"
                  >Se connecter</router-link
                >
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
  name: "Home",
  data() {
    return {
      fullname: "Hiba KEZIBRI",
      email: "kezibri.hiba@gmail.com",
      password: "test",
    };
  },
  methods: {
    validation() {
      this.$api
        .post("members", {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
          alert("Votre compte a ete cree. Vous pouvez vous connecter");
        })
        .catch((error) => {
          alert(error.response.data.message);
          this.$router.push("/");
        });
    },
  },
};
</script>
