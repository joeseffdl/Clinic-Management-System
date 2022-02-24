<template>
  <q-page class="bg-secondary">
    <q-form class="q-pa-xl" @submit.prevent="submitForm">
      <!-- First Row -->
      <q-card dark bordered>
        <q-card-section class="bg-accent">
          <div class="row q-mx-auto justify-center">
            <div class="col-md-6 col-sm-8 col-xs-12">
              <div class="row justify-center q-my-xl">
                <div class="q-gutter-md">
                  <q-uploader
                    url="http://localhost:8080/upload"
                    class="q-mx-auto "
                    label="Upload files"
                    color="primary"
                    
                    style="max-width: 100%;height:300px;"
                  />

                  <q-input
                    v-model="Clients.name"
                    class="q-mx-auto"
                    type="text"
                    square
                    filled
                    color="secondary"
                    label="Patient Name"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 col-sm-12 col-xs-12 q-my-md q-px-lg q-gutter-y-md"
            >
              <div class="row q-my-xl text-bold text-black">
                <div class="col col-sm-4 col-xs-12">
                  <q-input
                    v-model="Clients.clientSince"
                    type="date"
                    square
                    filled
                    color="secondary"
                    hint="Client Since"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>
                <div class="col col-sm-4 col-xs-12">
                  <q-select
                    v-model="Clients.sex"
                    type="text"
                    square
                    filled
                    label="Sex"
                    :options="options.sex"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>

                <div class="col col-sm-4 col-xs-12">
                  <q-input
                    v-model="Clients.age"
                    type="number"
                    square
                    filled
                    color="secondary"
                    label="Age"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>
              </div>

              <div class="row q-my-xl text-bold text-black q-gutter-y-md">
                <div class="col col-sm-4 col-xs-12">
                  <q-input
                    v-model="Clients.occupation"
                    type="text"
                    square
                    filled
                    color="secondary"
                    label="Occupation"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>
                <div class="col col-sm-4 col-xs-12">
                  <q-input
                    v-model="Clients.mobileNo"
                    mask="(##) - ### - ### - ####"
                    unmasked-value
                    hint="(##) - ### - ### - ####"
                    square
                    filled
                    color="secondary"
                    label="Mobile Number"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>

                <div class="col col-sm-4 col-xs-12">
                  <q-input
                    v-model="Clients.telNo"
                    mask="### - ####"
                    unmasked-value
                    hint="### - ####"
                    square
                    filled
                    color="secondary"
                    label="Telephone Number"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>
              </div>

              <div class="row q-mt-sm justify-center text-bold text-black">
                <div class="col">
                  <q-input
                    v-model="Clients.address"
                    type="text"
                    square
                    filled
                    color="secondary"
                    label="Home Address"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <!-- Second Row -->
      <div class="row q-my-xl">
        <div class="col">
          <q-card dark bordered>
            <q-card-section class="bg-accent">
              <div class="row text-center text-bold text-black q-gutter-y-md">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <q-input
                    v-model="Clients.recentSchedule"
                    type="date"
                    square
                    filled
                    color="secondary"
                    hint="Recent Schedule"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <q-select
                    v-model="Clients.procedure"
                    square
                    filled
                    label="Procedure"
                    :options="options.procedure"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>

                <div class="col-lg-12 col-12 col-xs-12">
                  <q-input
                    v-model="Clients.diagnosis"
                    type="textarea"
                    square
                    filled
                    dense
                    color="secondary"
                    label="Diagnosis"
                    clearable
                    clear-icon="mdi-close"
                    :rules="[(v) => !!v || 'Field is required!']"
                  />
                </div>
                <div class="col-12">
                  <q-btn
                    class="justify-center"
                    type="submit"
                    label="Add Patient Record"
                    color="primary"
                    bordered
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
import axios from 'axios';

export default {
  setup() {
    return {
      options: {
        sex: ["Male", "Female"],
        procedure: [
          "Teeth Cleaning",
          "Teeth Whitening",
          "Extraction",
          "Veneers",
          "Fillings",
          "Crowns",
          "Root Canal",
          "Braces/Invisalign",
          "Bonding",
          "Dentures",
        ],
      },
    };
  },

  data() {
    return {
      Clients: {
        name: "",
        clientSince: "",
        sex: "",
        age: "",
        occupation: "",
        mobileNo: "",
        telNo: "",
        address: "",
        recentSchedule: "",
        procedure: "",
        diagnosis: "",
      },

      showDrId: [],
    }
  },

  async created(){
    this.getDoctor();
  },


  methods: {

    async getDoctor(){
       try {
        const response = await axios.get("http://localhost:5000/login");
        this.showDrId = response.data[0].doctor_id;
  
        if(this.showDrId == undefined ){
          console.log('Unauthorized User!')
        }
      } 
      catch (err) {
        console.log(err);
      }
    },

    async addPatient(){
        try{
            await axios.post("http://localhost:5000/patientProfile", {
                patient_name: this.Clients.name,
                client_since: this.Clients.clientSince,
                sex: this.Clients.sex,
                age: this.Clients.age,
                occupation: this.Clients.occupation,
                mobile_no: this.Clients.mobileNo,
                tel_no: this.Clients.telNo,
                address: this.Clients.address,
                recent_schedule: this.Clients.recentSchedule,
                patient_procedure: this.Clients.procedure,
                diagnosis: this.Clients.diagnosis,
                doctor_id: this.showDrId,
            });
            
            console.log("New Patient Successfully Added!")
            this.$router.push("/patientlist");

        }catch (err) {
            console.log(err);
          }
     },

    async submitForm(){
       this.addPatient();
      
    },

  },
};
</script>
