<template>
  <q-page class="bg-secondary">
    <div class="column q-pa-xl window-height row">
      <div class="col-auto">
        <div id="profile-header">
          <div class="q-px-md">
              Profile <span style="color: black">Information</span>
          </div>
        </div>
      </div>
      <div class="col-auto row">
        <div class="col-auto q-px-md gt-md">
          <div id="left-card" class="column row fit items-center">
            <div class="row-auto text-center profile-img">
              Profile Picture
            </div>
            <div class="row-auto uploader">
              <q-uploader
              url="http://localhost:8080/upload"
              class="q-mx-auto"
              label="Upload files"
              color="accent"
              style="max-width: 100%;height:300px; box-shadow: 4px 5px rgba(0, 0, 0, 0.25);"
              @added = "selectFile"
            />
          </div>
          <div class="row-auto q-pa-md text-center carousel">
            <div>
              <q-carousel
                v-model="slide"
                vertical
                transition-prev="slide-down"
                transition-next="slide-up"
                swipeable
                animated
                :control-type="controlType"
                control-color="white"
                padding
                arrows
                height="230px"
                class="bg-primary text-white rounded-borders"
                style="box-shadow: 4px 5px rgba(0, 0, 0, 0.25); border: 1px solid white; border-radius: 10px; border: 2px solid #0E86D4;"
              >
                <q-carousel-slide name="style" class="column no-wrap flex-center">
                  <q-icon name="mdi-tooth-outline" size="25px" />
                  <div class="q-mt-md text-center" style="font-size: 16px; font-weight: 600; margin-bottom: 18px;">
                    “Every tooth in a man's head is more valuable than a diamond.” <br><span style="color: black">- Miguel de Cervantes</span>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                  <q-icon name="mdi-tooth-outline" size="25px" />
                   <div class="q-mt-md text-center" style="font-size: 16px; font-weight: 600; margin-bottom: 18px;">
                     “A smile remains the most inexpensive gift...” <br><span style="color: black">- Og Mandino</span>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="layers" class="column no-wrap flex-center">
                  <q-icon name="mdi-tooth-outline" size="25px" />
                  <div class="q-mt-md text-center" style="font-size: 16px; font-weight: 600; margin-bottom: 18px;">
                    “No one can take our smiles away when dental decay is kept miles away.” <br><span style="color: black">- Prof. Dr. Ninad Moon</span>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="map" class="column no-wrap flex-center">
                  <q-icon name="mdi-tooth-outline" size="25px"/>
                  <div class="q-mt-md text-center" style="font-size: 16px; font-weight: 600; margin-bottom: 18px;">
                    “Happiness is your dentist telling you it won’t hurt and then having him catch his hand in the drill.” <br><span style="color: black">- Johnny Carson</span>
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </div>
          </div>
        </div> 
      </div>
      <div class="col q-mx-auto">
          <div id="right-card" class="row fit items-center justify-center">
            <q-form id="q-form" style="width: 75em;">
              <div>
                <div class="q-py-lg">
                  <q-input
                    v-model="firstName"
                    type="text"
                    standout="bg-secondary text-black"
                    label="First Name"
                    style="box-shadow: 4px 5px rgba(0, 0, 0, 0.25); border-radius: 5px;"
                    clearable
                    clear-icon="mdi-close-circle-outline"
                  />
                </div>
                <div class="q-pb-lg">
                  <q-input
                    v-model="lastName"
                    type="text"
                    standout="bg-secondary text-black"
                    label="Last Name"
                    style="box-shadow: 4px 5px rgba(0, 0, 0, 0.25); border-radius: 5px;"
                    clearable
                    clear-icon="mdi-close-circle-outline"
                  />
                </div>
                <div class="q-pb-lg">
                  <q-input
                    v-model="email"
                    type="text"
                    standout="bg-secondary text-black"
                    label="Email Address"
                    style="box-shadow: 4px 5px rgba(0, 0, 0, 0.25); border-radius: 5px;"
                    clearable
                    clear-icon="mdi-close-circle-outline"
                  />
                </div>
                <div class="q-pb-lg">
                  <q-input
                    v-model="contactNo"
                    type="text"
                    standout="bg-secondary text-black"
                    label="Contact Number"
                    style="box-shadow: 4px 5px rgba(0, 0, 0, 0.25); border-radius: 5px;"
                    clearable
                    clear-icon="mdi-close-circle-outline"
                  />
                </div>
                <div class="q-pb-lg">
                  <q-input
                    v-model="password"
                    standout="bg-secondary text-black"
                    style="box-shadow: 4px 5px rgba(0, 0, 0, 0.25); border-radius: 5px;"
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
                    standout="bg-secondary text-black"
                    style="box-shadow: 4px 5px rgba(0, 0, 0, 0.25); border-radius: 5px;"
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
                    glossy
                    color="primary"
                    text-color="white"
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
      slide: ref('style'),
      controlType: ref('flat'),
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

<style>

#profile-header {
  font-size: 35px;
  font-weight: 600; 
  margin: 0px 0px 40px 0px;
  border: 2px solid #0E86D4;
  border-radius: 10px;
  color: #0E86D4;
}

.profile-img {
  font-size: 18px;
  font-weight: 700; 
  margin: 0px 10px 0px 0px 0px;
}

.uploader {
  padding: 23px 20px 23px 20px;
  margin: 0px 0px 0px 0px;
  border-radius: 10px;
  border: 2px solid #0E86D4;
}

#right-card {
  padding: 23px 0px 23px 0px;
  margin: 0px 0px 0px 0px;
  border-radius: 10px;
}

#left-card {
  margin: 0px 0px 0px 0px;
}

#q-form {
  padding: 0px 30px 30px 30px;
  background:#67BBFF;
  border-radius: 10px;
  border: 2px solid #0E86D4;
}

.text {
  font-size: 18px;
  font-weight: 700; 
}

.carousel {
  width: 350px;
}

</style>
