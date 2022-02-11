<template>
  <q-page class="bg-secondary">
    <div class="row fullscreen text-center items-center content-center">
      <div
        class="col-6 q-gutter-lg self-center"
        style="max-width: 650px; margin: 0 auto 0 auto"
      >
        <div class="text-h1 text-center q-pb-md">Welcome Back!</div>


      <q-form class="q-ma-xl q-pa-xl" @submit.prevent="login" >
        <q-input v-model="formData.email" type="email"  bottom-slots label="Email"  :dense="dense" clearable :rules="[v => !!v || 'Field is required!']"  >
    
          <template #prepend>
            <q-icon round dense flat name="mdi-account" />
          </template>
        </q-input>

        <q-input v-model="formData.password"  bottom-slots label="Password"  :type="isPwd ? 'password' : 'text'"  clearable :dense="dense" :rules="[v => !!v || 'Field is required!']" >
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
          style="height: 100%; max-width: 100%"
        />
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
      dense: ref(false),

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
                userType: 1
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
