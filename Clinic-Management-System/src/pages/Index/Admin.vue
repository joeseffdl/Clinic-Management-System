<template>
  <q-page class="bg-secondary q-pa-xl">
    <div class="row justify-center align-center" style="height: 55vh;">
      <div class="div-row row full-width justify-center">
        <div class="row fit items-end justify-center text-bold text-center text-h5">
          Best <span class="text-primary">Byte</span> &nbsp;Admin
        </div> 
      </div>
      <div class="col-xs-12 col-md-6 q-px-xl self-center">
        <q-form @submit.prevent="login" >
          <q-input v-model="formData.email" standout="bg-accent text-white" class="q-mb-md" type="email" bottom-slots label="Email" dense clearable :rules="[v => !!v || 'Field is required!']"  >
            <template #prepend>
              <q-icon round dense flat name="mdi-account" />
            </template>
          </q-input>

          <q-input v-model="formData.password" standout="bg-accent text-white" class="q-mb-md" bottom-slots label="Password" :type="isPwd ? 'password' : 'text'"  clearable dense :rules="[v => !!v || 'Field is required!']" >
            <template #append>
              <q-icon
              :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
              class="cursor-pointer"
              @click="isPwd = !isPwd" />
            </template>
          </q-input>
          <q-btn
            color= "primary"
            class="full-width q-mb-md"
            icon-right="mdi-login"
            label="Login"
            type="submit"
            size="1em" />
        </q-form>
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";

export default {
  name: "Admin",
  setup() {
    return {
      formData: {
        email: ref(''),
        password: ref(''),
      },
      isPwd: ref(true),
    };
  },
};
</script>
