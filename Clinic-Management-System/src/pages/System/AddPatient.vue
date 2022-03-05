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
                    hide-upload-btn
                    name="patient"
                    class="q-mx-auto"
                    label="Upload files"
                    color="primary"
                    style="max-width: 100%; height: 300px"
                    accept=".jpeg, .jpg, .png"
                    @added="selectFile"
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
import axios from "axios";

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
        selectedFile: "",
        picture_extension: "",
      },

      showDrId: [],
    };
  },

  async created() {
    this.getDoctor();
  },

  methods: {
    async getDoctor() {
      try {
        const response = await axios.get("http://localhost:5000/login");
        this.showDrId = response.data[0].doctor_id;

        if (this.showDrId == undefined) {
          console.log("Unauthorized User!");
        }
      } catch (err) {
        console.log(err);
      }
    },

    //Upload Photo
    selectFile(file) {
      this.Clients.selectedFile = file[0];
    },

    async submitForm() {
      const fd = new FormData();

      fd.append("patient_name", this.Clients.name);
      fd.append("client_since", this.Clients.clientSince);
      fd.append("sex", this.Clients.sex);
      fd.append("age", this.Clients.age);
      fd.append("occupation", this.Clients.occupation);
      fd.append("mobile_no", this.Clients.mobileNo);
      fd.append("tel_no", this.Clients.telNo);
      fd.append("address", this.Clients.address);
      fd.append("recent_schedule", this.Clients.recentSchedule);
      fd.append("patient_procedure", this.Clients.procedure);
      fd.append("diagnosis", this.Clients.diagnosis);
      fd.append("doctor_id", this.showDrId);

      if (this.Clients.selectedFile != "") {
        if (this.Clients.selectedFile.type == "image/jpeg") {
          this.Clients.picture_extension = ".jpeg";
        } else if (this.Clients.selectedFile.type == "image/jpg") {
          this.Clients.picture_extension = ".jpg";
        } else if (this.Clients.selectedFile.type == "image/png") {
          this.Clients.picture_extension = ".png";
        } else {
          console.log("Upload jpeg, jpg, and png only");
        }

        fd.append("patient", this.Clients.selectedFile);
        const new_name =
          "patient" +
          "-" +
          this.Clients.selectedFile.name +
          this.Clients.picture_extension;
        fd.append("patient_pic", "patient_pictures\\" + new_name);
      }

      this.$axios
        .post("http://localhost:5000/patientProfile", fd, {})
        .then(function () {
          console.log("New Patient Successfully Added!");
          window.location.reload();
        })
        .catch(function (err) {
          console.log("Something went wrong", err);
        });
    },
  },
};
</script>
