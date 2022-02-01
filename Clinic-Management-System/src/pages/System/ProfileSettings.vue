<template>
  <q-page class="bg-secondary">
    <div class="q-pa-xl window-height row">
      <div class="col-4 q-mx-auto gt-md">
        <div class="row fit q-pt-xl justify-center" >
          
          <div class="q-px-md text-h2 text-center" >
            Profile Information
            <div class="text-h5 text-center q-my-lg">
              Profile Picture
            </div>
            <q-uploader
            url="http://localhost:8080/upload"
            class="q-mx-auto "
            label="Upload files"
            color="primary"
            style="max-width: 100%;height:300px;"
          />
          </div>
        </div> 
      </div>
      <div class="col-6 q-mx-auto">
        <div class="row fit items-center justify-center">
          <q-form style="width: 75em;" >
            <div>
              <div class="q-py-lg">
                <q-input
                  v-model="firstName"
                  type="text"
                  standout="bg-primary text-white"
                  label="First Name"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                />
              </div>
              <div class="q-pb-lg">
                <q-input
                  v-model="lastName"
                  type="text"
                  standout="bg-primary text-white"
                  label="Last Name"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                />
              </div>
              <div class="q-pb-lg">
                <q-input
                  v-model="emailAddress"
                  type="text"
                  standout="bg-primary text-white"
                  label="Email Address"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                />
              </div>
              <div class="q-pb-lg">
                <q-input
                  v-model="contactNumber"
                  type="text"
                  standout="bg-primary text-white"
                  label="Contact Number"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                />
              </div>
              <div class="q-pb-lg">
                <q-input
                  v-model="password"
                  standout="bg-primary text-white"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                  label="Password"
                  :type="isPwd ? 'password' : 'text'"
                >
                  <template #append>
                    <q-icon
                      :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
              <div class="q-pb-lg">
                <q-input
                  v-model="confirmPassword"
                  standout="bg-primary text-white"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                  label="Confirm Password"
                  :type="isPwd ? 'password' : 'text'"
                >
                  <template #append>
                    <q-icon
                      :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
              <div class="row justify-center q-mt-lg">
                <q-btn
                  push
                  color="primary"
                  label="Save"
                  size="lg"
                  class="q-px-lg"
                />
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      text: ref(""),
      firstName: ref(""),
      lastName: ref(""),
      emailAddress: ref(""),
      contactNumber: ref(""),
      password: ref(""),
      isPwd: ref(true),
      confirmPassword: ref(""),
    };
  },
};
</script>
