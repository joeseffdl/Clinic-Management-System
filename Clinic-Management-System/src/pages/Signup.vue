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

          <div>
            <q-input  v-model="formData.lastName" square filled dense color="primary" 
            label="Last Name" clearable clear-icon="mdi-close"
            :rules="[val => !!val || 'Field is required!']" />
          </div>

          <div>
            <q-input  v-model="email" square filled dense color="primary" 
            label="Email" clearable clear-icon="mdi-close"
            :rules="[val => !!val || 'Email is required!']" />
          </div>

          <div>
            <q-input  v-model="password" square filled dense color="primary" 
            label="Password" :type="isPwd ? 'password' : 'text'" clearable clear-icon="mdi-close"
            :rules="[val => !!val || 'Password is required!']" >
              <template #append>
                <q-icon :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
                  @click="isPwd = !isPwd" />  
              </template>
            </q-input>
          </div>

          <!-- <div>
            <q-input  v-model="confirm_password" square filled dense color="primary" 
            label="Re-enter Password" :type="isPwd ? 'password' : 'text'" clearable clear-icon="mdi-close"
            :rules="[val => !!password || 'Password does not match!']" >
              <template #append>
                <q-icon :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
                  @click="isPwd = !isPwd" />  
              </template>
            </q-input>
          </div> -->

          <div class="q-pt-lg">
            <q-btn push color="primary" type="submit" label="Sign Up" size="xl" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue'

export default defineComponent({
  name: "PageSignup",
  
  setup () {
      return {
        password: ref(''),
        isPwd: ref(true),
        email: ref(''),
        text: ref(''),
      }
    },

  data() {
    return {
      formData: {
        firstName: null,
        lastName: null
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
