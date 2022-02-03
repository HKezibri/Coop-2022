<template>
    <div>Deconnexion en cours</div>
</template>

<script>
export default{
    mounted(){
        this.$store.commit("setToken",false);
        setTimeout(()=>{
            this.$router.push("/connection");
        }, 100);
    },
}
</script>