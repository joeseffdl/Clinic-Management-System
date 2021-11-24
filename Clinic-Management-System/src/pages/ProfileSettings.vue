<template>
  <q-page>
    <div>
      <q-form class="q-ma-xl q-pa-xl">
        <div class="column fullscreen items-center justify-center">
          <div class="col self-start" style="margin: 110px 0 0 80px">
            <div class="text-h2 gt-sm">Profile Information</div>
          </div>
          
          <div class="col">
            <div class="row fullscreen items-center" style="margin: 50px 0 0 0">

              <div class="col items-center justify-center" style="margin: 0 auto 0 auto;">
                <div class="column items-center justify-center">
                  <div class="col text-h5 q-pb-xs">Profile Picture</div>
                  <div class="col" style="padding: 0 0 80px 0;">
                    <q-uploader url="http://localhost:8080/upload" label="Upload files" color="primary" square flat bordered style="max-width: 500px; height: 300px;"/>
                  </div>
                  <div class="col" style="margin: 0 auto 0 auto;">
                    <q-btn push color="primary" label="Save" size="lg" class="q-px-lg"/>
                  </div>
                </div>
              </div>

              <div class="col gt-sm" style="margin: 0 75px 0 10px;">
                <div class="q-py-lg" style="max-width: 700px;">
                  <q-input v-model="firstName" type="text" standout="bg-primary text-white" label="First Name" clearable clear-icon="mdi-close-circle-outline"/>
                </div>
                <div class="q-pb-lg" style="max-width: 700px;">
                  <q-input v-model="lastName" type="text" standout="bg-primary text-white" label="Last Name" clearable clear-icon="mdi-close-circle-outline"/>
                </div>
                <div class="q-pb-lg" style="max-width: 700px;">
                  <q-input v-model="emailAddress" type="text" standout="bg-primary text-white" label="Email Address" clearable clear-icon="mdi-close-circle-outline"/>
                </div>
                <div class="q-pb-lg" style="max-width: 700px;">
                  <q-input v-model="contactNumber" type="text" standout="bg-primary text-white" label="Contact Number" clearable clear-icon="mdi-close-circle-outline"/>
                </div>
                <div class="q-pb-lg" style="max-width: 700px;">
                  <q-input v-model="password" standout="bg-primary text-white" clearable clear-icon="mdi-close-circle-outline" label="Password" :type="isPwd ? 'password' : 'text'">
                    <template #append>
                      <q-icon :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                    </template>
                  </q-input>
                </div>
                <div class="q-pb-lg" style="max-width: 700px;">
                  <q-input v-model="confirmPassword" standout="bg-primary text-white" clearable clear-icon="mdi-close-circle-outline" label="Confirm Password" :type="isPwd ? 'password' : 'text'">
                    <template #append>
                      <q-icon :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref(''),
      firstName: ref(''),
      lastName: ref(''),
      emailAddress: ref(''),
      contactNumber:ref(''),
      password: ref(''),
      isPwd: ref(true),
      confirmPassword: ref(''),
    }
  }
}
</script>