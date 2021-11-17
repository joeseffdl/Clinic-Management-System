<template>
  <q-page class="bg-secondary ">
    <div class="row fullscreen text-center items-center">
      <div class="col-6 gt-md self-center">
        <div class="col self-center text-h1 " style="margin: 0 auto 0 auto;">Quote of the day</div>
      </div>
      <div class="col-6 " style="width:750px;margin: 0 auto 0 auto;" >
        <q-form @submit="submitForm">
          <div>
            <q-input  v-model="formData.firstName" square filled dense color="primary" 
            label="First Name" clearable clear-icon="mdi-close"
            :rules="[val => !!val || 'Field is required!']" />
          </div>
          <div class="q-pt-lg">
            <q-btn pushed type="submit" label="Submit" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageSignup",

  data() {
    return {
      formData: {
        firstName: null,
        }
    }
  },
  methods: {
    submitForm() {
      alert('Your name is: ' + this.formData.firstName);
    }
  }
});
</script>
