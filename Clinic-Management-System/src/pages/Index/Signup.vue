<template>
  <q-page class="bg-secondary q-pa-xl">
    <div class="row justify-center align-center" style="height: 55vh;">
      <div class="col-xs-12 col-md-6 q-px-xl self-center">
        <div class="div-row row full-width justify-center">
          <div class="row fit items-end justify-center text-bold text-center text-h5">
            Sign up to Best <span class="text-primary">Byte</span> 
          </div>
          <div class="row fit justify-center align-center q-mt-md">
            By creating an account, you agree to our&nbsp;<a href="terms-of-service/" target="blank">Terms of Service</a> 
          </div>
          <div class="row fit justify-center align-center">
            and have read and understand the&nbsp;<a href="privacy/" target="blank">Privacy Policy.</a> 
          </div>
        </div>
        <q-form class="q-mt-lg" @submit.prevent="submitForm" >
          <q-input
            v-model="formData.firstName"
            type="text"
            dense
            color="primary"
            label="First Name"
            standout="bg-accent text-white"
            clearable
            clear-icon="mdi-close"
            :rules="[(v) => !!v || 'Field is required!']"
          />

          <q-input
            v-model="formData.lastName"
            type="text"
            square
            filled
            dense
            color="primary"
            label="Last Name"
            clearable
            clear-icon="mdi-close"
            :rules="[(v) => !!v || 'Field is required!']"
          />

          <q-input
            v-model="formData.email"
            type="email"
            square
            filled
            dense
            color="primary"
            label="Email"
            clearable
            clear-icon="mdi-close"
            :rules="[(v) => !!v || 'Email is required!']"
          />
        
          <q-input
            ref="FieldPassword"
            v-model="formData.password"
            square
            filled
            dense
            color="primary"
            label="Password"
            :type="isPwd ? 'password' : ''"
            lazy-rules
            clearable
            clear-icon="mdi-close"
            :rules="Required"
          >
            <template #append>
              <q-icon
                :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        
          <q-input
            ref="FieldPasswordConfirm"
            v-model="formData.password_confirm"
            square
            filled
            dense
            color="primary"
            label="Confirm Password"
            :type="isPwd ? 'password' : ''"
            lazy-rules
            clearable
            clear-icon="mdi-close"
            :rules="Confirm"
          >
            <template #append>
              <q-icon
                :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        
          <q-btn
            class="full-width q-mb-md"
            color="primary"
            type="submit"
            label="Sign Up"
            size="1em"
          />
        </q-form>
      </div>
      <div class="gt-sm col-md-6 self-center q-mt-xl">
        <q-carousel
          v-model="slide"
          animated
          navigation
          infinite
          :autoplay="autoplay"
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from 'axios'

export default defineComponent({
  name: "Signup",

  setup() {
    return {
      isPwd: ref(true),
      text: ref(""),
       slide: ref(1),
      autoplay: ref(true)
    };
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

    }

  },


  computed: {
    Confirm() {
      return [
        (v) => !!v || "Field is required!",
        //(v) => v == this.$refs.FieldPassword.value || "Password do not match!"
      ]

    },
    Required() {
      return [(v) => !!v || "Field is required!"];
    },
  },


   methods: {
 
      async submitForm(){

        //Check password and password_confirm 
        if (this.formData.password != this.formData.password_confirm){
          console.log("Passwords do not match. Try again!")
        }

        else{
          try{
            await axios.post("http://localhost:5000/doctorProfile", {
              firstName: this.formData.firstName,
              lastName: this.formData.lastName,
              email: this.formData.email,
              password: this.formData.password
            });
            this.$router.push("/guest");
            console.log("Data Added Successfully!")
            
          } catch (err) {
            console.log(err);
          }
        }
      }
    }
  });
</script>
