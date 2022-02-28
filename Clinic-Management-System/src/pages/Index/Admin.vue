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
import axios from 'axios'

export default {
  name: "Admin",
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
      
    };
  },

  methods: {
    
    async addLogin(){
        try{
            await axios.post("http://localhost:5000/adminlogin", {
                login_email : this.formData.email,
                login_pw : this.formData.password,
            });

        }catch (err) {
            console.log(err);
          }
        
     },

     async show_admin() {
      try {
        const response = await axios.get(`http://localhost:5000/admin/` + this.formData.email);
        this.showPass = response.data.admin_password;
          if(this.showPass == this.formData.password){
            console.log("Login Successfully")
            window.open('http://localhost:3000/')
            /*this.$router.push("/home");*/
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

      this.show_admin();
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
