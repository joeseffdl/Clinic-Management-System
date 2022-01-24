<template>
  <q-page class="bg-secondary">
    <div class="q-pa-xl">
      <div class="row">
        <div class="col-6 gt-md">
          <div class="row-6">
            <div class="text-h2 text-center q-mx-auto q-my-md">
              Profile Information
            </div>
            <div class="row justify-center q-mx-auto">
              <div class="text-h5 text-center q-my-lg">Profile Picture</div>
            </div>
            <q-uploader
              url="http://localhost:8080/upload"
              class="q-mx-auto"
              label="Upload files"
              color="primary"
              square
              flat
              bordered
              style="max-width: 500px; height: 300px"
            />
          </div>
        </div>
        <div class="col-6 q-mx-auto justify-center no-wrap">
          <q-form class="q-mt-xl q-pa-auto gt-xs">
            <div class="col fit">
              <div class="q-py-lg" style="max-width: 700px">
                <q-input
                  v-model="firstName"
                  type="text"
                  standout="bg-primary text-white"
                  label="First Name"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                />
              </div>
              <div class="q-pb-lg" style="max-width: 700px">
                <q-input
                  v-model="lastName"
                  type="text"
                  standout="bg-primary text-white"
                  label="Last Name"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                />
              </div>
              <div class="q-pb-lg" style="max-width: 700px">
                <q-input
                  v-model="emailAddress"
                  type="text"
                  standout="bg-primary text-white"
                  label="Email Address"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                />
              </div>
              <div class="q-pb-lg" style="max-width: 700px">
                <q-input
                  v-model="contactNumber"
                  type="text"
                  standout="bg-primary text-white"
                  label="Contact Number"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                />
              </div>
              <div class="q-pb-lg" style="max-width: 700px">
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
              <div class="q-pb-lg" style="max-width: 700px">
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
