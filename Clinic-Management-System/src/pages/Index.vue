<template>
  <q-page class="bg-secondary ">
    <div class="row fullscreen text-center items-center q-pb-xl">
      <div class="col-6 gt-md self-center">
        <div class="col self-center text-h1 " style="max-width:750px;margin:auto;">Welcome to Lorem ipsum</div>
      </div>

      <div class="col-6 q-gutter-xl self-center " style="width: 750px;margin: 0 auto 0 auto;" >
        <div class=" items-center text-h2 q-pb-xl q-mr-xl" >Login as:</div>
        <router-link :to=" { path: '/guest'}" style="text-decoration: none">  
          <q-btn
            class="q-mr-xl"
            outline
            style="color: goldenrod;"
            icon="mdi-account"
            label="Guest"
            size="3em"
          />
        </router-link>
        <router-link :to=" { path: '/admin'}" style="text-decoration: none">
          <q-btn
            outline
            style="color: black;"
            icon="mdi-code-tags"
            label="Admin"
            size="3em"
          />
        </router-link>
        <router-link :to=" { path: '/signup'}" >
          <div class="text-h6 q-my-md">New here? Sign Up now!</div>
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",

  // setup() {
  //   const loading = ref(true)

  //   setTimeout(() => {
  //     loading.value = false
  //   }, 1500)
  //   return {
  //     loading
  //   }
  // },

  data() {
    return {
      selected: null,
    };
  },
});
</script>
