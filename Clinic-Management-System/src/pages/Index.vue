<template>
  <q-page class="bg-secondary ">
    <div class="row text-center">
      <div class="col-6 gt-md self-center q-mt-xl" >
        <q-img src="icons\code.png" style="width:600px;height:600px;"></q-img>
      </div>
      <div class="col-6 q-gutter-xl self-center " style="max-width:650px;margin: 0 auto 0 auto;" >
        <div class="text-h2 ">Login as:</div>
        <q-btn
          outline
          style="color: goldenrod"
          class=""
          icon="mdi-account"
          label="Guest"
          size="3em"
        />
        <q-btn
          outline
          style="color: black"
          class=""
          icon="mdi-code-tags"
          label="Admin"
          size="3em"
        />
        <div class="text-h6 q-mb-lg">New here? Sign Up now!</div>
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
