<template>
  <q-page class="bg-secondary ">
    <div class="row fullscreen text-center items-center q-pb-xl">
      <div class="col-6 gt-md self-center">
        <div class="col self-center text-h1 " style="margin: 0 auto 0 auto;">Health is Wealth</div>
      </div>
      <div class="col-6 " style="width:750px;margin: 0 auto 0 auto;" >
        
        <q-form class="q-ma-xl q-pa-xl" @submit.prevent="submitForm" >
          <div class=" items-center text-h3 q-mb-lg" >Create your account</div>
          <div>
            <q-input  v-model="formData.firstName" type="text" square filled dense color="primary" 
            label="First Name" clearable clear-icon="mdi-close"
            :rules="[v => !!v || 'Field is required!']" />
          </div>

          <div>
            <q-input  v-model="formData.lastName" type="text" square filled dense color="primary" 
            label="Last Name" clearable clear-icon="mdi-close"
            :rules="[v => !!v || 'Field is required!']" />
          </div>

          <div>
            <q-input  v-model="formData.email" type="email" square filled dense color="primary" 
            label="Email" clearable clear-icon="mdi-close"
            :rules="[v => !!v || 'Email is required!']" />
          </div>

          <div>
            <q-input  ref="FieldPassword" v-model="formData.password" square filled dense 
            color="primary" label="Password" :type="isPwd ? 'password' : ''" lazy-rules clearable
            clear-icon="mdi-close" :rules="Required"  >
              <template #append>
                <q-icon :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
                  @click="isPwd = !isPwd" />  
              </template>
            </q-input>
          </div>

          <div>
            <q-input  ref="FieldPasswordConfirm" v-model="formData.password_confirm" square filled dense 
            color="primary" label="Confirm Password" :type="isPwd ? 'password' : ''" lazy-rules clearable
            clear-icon="mdi-close" :rules="Confirm" >
              <template #append>
                <q-icon :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
                  @click="isPwd = !isPwd" />  
              </template>
            </q-input>
          </div>

          <div class="q-pt-lg">
            <q-btn push color="primary" type="submit" label="Sign Up" size="xl" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from 'axios'

export default defineComponent({
  name: "Signup",
  
  setup () {
      return {
        isPwd: ref(true),
        text: ref(''),
      }
    },

  data() {
    return {
      formData: {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        password_confirm:''
        },

        doctorprofile : []
    }
  },


  computed: {
    Confirm() {
      return [
        (v) => !!v || "Field is required!",
        /*(v) => v == this.$refs.FieldPassword.value || "Password do not match!"*/
      ]
    },
    Required() {
      return [(v) => !!v || "Field is required!"]
    }
  },

  async created(){
    await this.getData();
  },

   methods: {

     async getData(){
      var response = await fetch('http://127.0.0.1:8000/api/doctorprofile/');
      this.doctorprofile = await response.json();
      },


      async submitForm(){

        await axios.post('http://127.0.0.1:8000/api/doctorprofile/',this.formData)
        .then(
          res => {
            console.log(res)
          }

        ).catch(
          err => {
            console.log(err)
          }
        )


      }


     
     /*async submitForm() 
      {
          await this.getData();

          await fetch('http://127.0.0.1:8000/api/doctorprofile/', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.formData)
          });

          console.log("Submit form was clicked!");

        }*/
      }
    });

</script>
