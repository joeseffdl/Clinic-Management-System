<template>
  <q-page class="bg-secondary q-pa-xl">
    <div class="row justify-center align-center" style="height: 55vh;">
      <div class="div-row row full-width justify-center">
        <div class="row fit items-end justify-center text-bold text-center text-h5">
          Log into Best <span class="text-primary">Byte</span>
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
      <div class="col-xs-12 col-md-6 q-px-xl q-gutter-y-md self-center">
        <q-btn outline disable icon="mdi-google" class="full-width" icon-left align="center" label="Continue with Google" /> 
        <q-btn outline disable icon="mdi-facebook" class="full-width" align="center" label="Continue with Facebook" />
      </div>
    </div>
  </q-page>
</template>
<script>


import { ref } from 'vue'
import axios from 'axios'


export default {
  name: 'Guest',
  components:{

  },
  
  data () {
    return {
      formData: {
        email: ref(''),
        password: ref(''),
      },
      text: ref(''),
      isPwd: ref(true),
      showPass: [],
      showId:[],
     
    }
  },

   methods: {

     async addLogin(){
        try{
            await axios.post("http://localhost:5000/login", {
                doctor_id: this.showId,
                email : this.formData.email,
            });

        }catch (err) {
            console.log(err);
          }
        
     },


    async show_doctorProfile() {
      try {
        const response = await axios.get(`http://localhost:5000/login/` + this.formData.email);
        this.showPass = response.data.password;
        this.showId = response.data.id;
          if(this.showPass == this.formData.password){
            console.log("Login Successfully")
            this.$router.push("/home");
            this.addLogin()
          }
          else if (this.showPass == undefined){
            console.log("Invalid email")
          }
          else{
            console.log("Invalid password")
          }
      } 
      catch (err) {
        console.log(err);
      }
    },

  
    async login() {

      this.show_doctorProfile();
    },

    
    onSubmit() {
        {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "mdi-account",
            message: "Welcome!",
          });
          this.$router.push("/home");
        }
      },
  
  }
};
</script>
