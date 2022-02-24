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
            class="q-mx-auto "
            label="Upload files"
            color="primary"
            style="max-width: 100%;height:300px;"
            url='http://localhost:5000/profilePic'
            @added = "selectFile"
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
                  v-model="email"
                  standout="bg-primary text-white"
                  label="Email Address"
                  clearable
                  clear-icon="mdi-close-circle-outline"
                />
              </div>
              <div class="q-pb-lg">
                <q-input
                  v-model="contactNo"
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
                  @click="saveChanges"
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
import axios from 'axios';


export default {
  setup() {
    return {
      text: ref(""),
      file: "",
      firstName: ref(""),
      lastName: ref(""),
      email: ref(""),
      contactNo: ref(""),
      password: ref(""),
      isPwd: ref(true),
      confirmPassword: ref(""),
      profilePic:"",
      selectedFile:'',
      check_if_document_upload: false,

      drprofile:[],
    };
  },
  

  async created(){
    this.show_DrProfile();
  },

  methods: {

  //Display
  async show_DrProfile() {
    try {
      const response = await axios.get("http://localhost:5000/doctorProfile").then(res => {
        this.firstName = res.data[0].firstName
        this.lastName = res.data[0].lastName
        this.email= res.data[0].email
        this.contactNo = res.data[0].contactNo
        this.password = res.data[0].password
        this.confirmPassword = res.data[0].confirmPassword
        this.selectedFile = res.data[0].profile_pic
      });

    } 
    catch (err) {
      console.log(err);
    }
  },

  //Upload Photo
  selectFile(file){
    this.selectedFile = file[0];
    this.check_if_document_upload= true;
    console.log(file[0])
  },

  selectFile1(file){
    this.selectedFile = file[0];
    this.check_if_document_upload= true;
    console.log(file[0])
  },

  //Update 
  async updateProfile() {
    try {
      await axios.put("http://localhost:5000/doctorProfile",
        {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          contactNo: this.contactNo,
          password: this.password,
          confirmPassword: this.confirmPassword,
          profile_pic: this.selectedFile.name,
        }
      );
      console.log("Updated Successfully!")
      window.location.reload();
    } 
    catch (err) {
      console.log(err);
    }
  },

  async saveChanges(){
    const fileData = new FormData()
    fileData.append('profile_pic',this.selectedFile)

    this.$axios.put('http://localhost:5000/profilePic', fileData,{
      headers: {
        'Content-Type':'multipart/form-data'
      }
    }).then(function(){
      console.log('SUCCESS')
    }).catch(function(){
      console.log('FAILED')
    })

    /*
    try {
      await axios.put("http://localhost:5000/profilePic",
        {
          profile_pic: this.selectedFile,
        }
      );
      console.log("Updated Successfully!")
    } 
    catch (err) {
      console.log(err);
    }
    */

  }








}
};

</script>
