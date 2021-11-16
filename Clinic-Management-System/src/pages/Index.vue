<template>
  <q-page class="bg-secondary ">
    <div class="row fullscreen text-center items-center">
      <div class="col-6 gt-md self-center">
        <div class="col self-center text-h1 " style="margin: 0 auto 0 auto;">Welcome to Lorem ipsum</div>
      </div>
      <div class="col-6 q-gutter-xl self-center " style="max-width:650px;margin: 0 auto 0 auto;" >
        <div class="text-h2 q-pa-md">Login as:</div>
        <router-link :to=" { path: '/guest'}" style="text-decoration: none">  
          <q-btn
            outline
            style="color: goldenrod"
            class=""
            icon="mdi-account"
            label="Guest"
            size="3em"
          />
        </router-link>
        <router-link :to=" { path: '/dev'}" style="text-decoration: none">
          <q-btn
            outline
            style="color: black"
            class=""
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

  data() {
    return {
      selected: null,
    };
  },
});
</script>
