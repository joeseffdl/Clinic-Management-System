<template>
  <q-page class="bg-secondary ">
    <div class="row fullscreen text-center items-center content-center">
      <div class="col-6 q-gutter-lg self-center " style="max-width:650px;margin: 0 auto 0 auto;" >
        <div class="text-h2 q-pb-xl">Welcome Back!</div>
        <q-form @submit="onSubmit"  >
          <q-input v-model="email" type="email" standout="bg-accent" bottom-slots label="Email"  :dense="dense"  required clearable >
      
            <template #prepend>
              <q-icon round dense flat name="mdi-account" />
            </template>
          </q-input>

          <q-input v-model="password" standout="bg-accent" bottom-slots label="Password"  :type="isPwd ? 'password' : 'text'" required clearable :dense="dense">
            <template #append>
              <q-icon
              :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
              class="cursor-pointer"
              @click="isPwd = !isPwd" />
            </template>
          </q-input>
          <q-btn
            color= "primary"
            class=""
            icon-right="mdi-login"
            label="Login"
            type="submit"
            size="2em" />
        </q-form>
          
      </div>

      <div class="col-6 gt-md self-center">
        <q-img 
        class="q-mt-xl"
      src="icons\byte_black.png"
      spinner-color="black"
      style="height:600px ; max-width:800px;" />
    
      </div>
      
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'Guest',
  
  setup(){
    const $q = useQuasar()
    const myForm = ref(null)
    const password = ref('')
    const isPwd = ref(true)
    const email = ref('')
    const text = ref('')
    const dense = ref(false)

    return{
      password,
      isPwd,
      email,
      text,
      dense,
      myForm,

      onSubmit () {
        {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'mdi-account',
            message: 'Welcome!'
          }) 
        this.$router.push('/system');
        } 
      },
    }
  },
}
</script>