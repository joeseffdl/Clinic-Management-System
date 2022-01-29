<template>
  <q-page class="bg-secondary">
    <div class="row fullscreen text-center items-center content-center">
      <div
        class="col-6 q-gutter-lg self-center"
        style="max-width: 650px; margin: 0 auto 0 auto"
      >
        <div class="text-h2 q-pb-xl">Welcome Back!</div>



      <q-form class="q-ma-xl q-pa-xl" @submit.prevent="login" >
        <q-input v-model="formData.email" type="email" standout="bg-accent" bottom-slots label="Email"  :dense="dense" clearable >
    
          <template #prepend>
            <q-icon round dense flat name="mdi-account" />
          </template>
        </q-input>

        <q-input v-model="formData.password" standout="bg-accent" bottom-slots label="Password"  :type="isPwd ? 'password' : 'text'"  clearable :dense="dense">
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
          style="height: 600px; max-width: 800px"
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


      showEmail: [],
      showPass: [],
     
    }

  },

  /*async created(){
    await this.getEmail();
    await this.getPass();
  },*/


  

  methods: {
  

    /*async getEmail(){
      await axios.getEmail(`http://127.0.0.1:8000/api/doctorprofile/${this.formData.email}`);
      this.showEmail = response.json();
      },*/

    
    /*async getEmail(){
      var response = await fetch('http://127.0.0.1:8000/api/doctorprofile/');
      this.showEmail = await response.json();
      },

    async getPass(){
      var response = await fetch('http://127.0.0.1:8000/api/doctorprofile/' + this.formData.password);
      this.showPass = await response.json();
      },*/

      
    /*async getPass(){
      await axios.getPass(`http://127.0.0.1:8000/api/doctorprofile/${this.formData.password}`);
      this.showPass = response.json();
      },*/
  
    async login() {


      await axios.post('http://127.0.0.1:8000/api/login/', {
             email: this.formData.email,
             password: this.formData.password,
          })
          .then(
            resp => console.log(resp,"Login successfully"),
            
            
            )
          .catch(err => console.log(err))

       /*if(this.formData.email != "" && this.formData.password != "") {
        if(this.formData.email == this.showEmail && this.formData.password == this.showPass) {
            console.log("Login Successfully!");
       
        } else {
            console.log(this.showEmail,this.formData.email,"The email and / or password is incorrect");
        }
      } else {
        console.log("A email and password must be present");*/

    },

    /*checkLogin(){
      
      if(this.formData.email != "" && this.formData.password != "") {
        if(this.formData.email == this.getEmail && this.formData.password == this.getPass) {
            console.log("Login Successfully!");
            this.$router.push({ name: "system" });
        
        } else {
            console.log("The email and / or password is incorrect");
        }
      } else {
        console.log("A email and password must be present");
      }
      
    }*/

    onSubmit() {
        {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "mdi-account",
            message: "Welcome!",
          });
          this.$router.push("/system");
        }
      },
  
  }
};
</script>
