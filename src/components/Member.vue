<template>
 <router-link :to="{name:'Members', params:{id:member.id}}" class="box"> 
   <!--  <div class="media-content">
        <p class="title is-4">{{member.fullname}}</p>
        <p class="subtitle is-6">{{member.email}}</p>
    </div> -->
    <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://repository-images.githubusercontent.com/15949540/b0a70b80-cb15-11e9-8338-661f601406a1" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{member.fullname}}</p>
        <p class="subtitle is-6">{{member.email}}</p>
      </div>
    </div>
  </div>
</div>
 </router-link>
</template>

<script>
export default {
  props: ["member"],
};
</script>

<style></style>
