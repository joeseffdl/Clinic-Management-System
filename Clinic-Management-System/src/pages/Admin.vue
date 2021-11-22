<template>
  <q-page class="bg-secondary ">
    <div class="row fullscreen text-center items-center content-center">
      <div class="col-6 q-gutter-lg self-center " style="max-width:650px;margin: 0 auto 0 auto;" >
        <div class="text-h2 q-pb-xl">Welcome Back!</div>
        <q-input v-model="text" standout="bg-accent" bottom-slots label="Username"  :dense="dense">
    
        <template #append>
          <q-icon round dense flat name="mdi-account" />
        </template>
      </q-input>

        <q-input v-model="password" standout="bg-accent" bottom-slots label="Password"  :type="isPwd ? 'password' : 'text'"  :dense="dense">
        <template #append>
          <q-icon
            :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

        <q-btn
          color= "primary"
          class=""
          icon-right="mdi-login"
          label="Login"
          type="submit"
          size="2em"
        />
      </div>
      <div class="col-6 gt-md self-center">
        <q-img 
        class="q-mt-xl"
      src="icons\byte_black.png"
      spinner-color="black"
      style="height:600px ; max-width:800px;"
    />
      </div>
      
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'Admin',
  setup () {
    return {
      password: ref(''),
      isPwd: ref(true),
      email: ref(''),
      text: ref(''),
      ph: ref(''),
      dense: ref(false)
    }
  }
}
</script>