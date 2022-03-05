<template>
  <q-page class="bg-secondary">
    <div class="q-pa-xl">
      <div class="fit">
        <q-table
          :rows="patientList"
          :columns="columns"
          :filter="filter"
          no-data-label="I didn't find anything for you"
          no-results-label="The filter didn't uncover any results"
          row-key="patientList.patient_id"
          card-class="bg-accent text-primary"
          bordered
        >
          <!-- 
          Q-Table Add-ons
          
          hide-pagination
          :rows-per-page-options="[0]"
          wrap-cells -->

          <template #body-cell="props">
            <q-td :props="props">
              <tr class="text-black text-bold">
                {{
                  props.value
                }}
              </tr>
            </q-td>
          </template>

          <template #body-cell-actions="props">
            <q-td :props="props">
              <q-btn
                flat
                dense
                color="secondary"
                icon="mdi-eye"
                @click.stop="view(props.row)"
              />
              <q-btn
                flat
                dense
                color="primary"
                icon="mdi-pen"
                @click.stop="update(props.row)"
              />
              <q-btn
                flat
                dense
                color="red"
                icon="mdi-delete"
                @click.stop="remove(props.row)"
              />
            </q-td>
          </template>

          <template #top-left>
            <q-input v-model="filter" dense debounce="300" placeholder="Search">
              <template #append>
                <q-icon color="primary" name="mdi-table-search" />
              </template>
            </q-input>
          </template>

          <template #top-right>
            <q-btn
              class="text-accent"
              color="primary"
              icon-right="mdi-plus"
              dense
              :to="{ name: 'Add' }"
            />
          </template>

          <template #no-data="{ icon, message, filtered }">
            <div class="full-width row flex-center q-gutter-sm">
              <q-icon size="2em" name="mdi-emoticon-dead" />
              <span> Well this is sad... {{ message }} </span>
              <q-icon size="2em" :name="filtered ? 'mdi-filter' : icon" />
            </div>
          </template>
        </q-table>
      </div>
    </div>

    <!-- View Dialog -->
    <q-dialog v-model="viewToggle" class="flex flex-center shadow-10 gt-xs">
      <q-card bordered style="width: 800px; max-width: 60vw">
        <q-card-section class="q-pa-lg bg-accent">
          <q-card class="bg-secondary q-mx-xl q-py-lg">
            <q-card-section class="row flex flex-center bg-primary">
              <q-icon
                class="q-mx-sm"
                size="2rem"
                color="green-3"
                name="mdi-eye"
              ></q-icon>
              <span class="text-h6 text-bold"
                >PATIENT'S DATA</span
              ></q-card-section
            >
            <div>
              <q-avatar
                class="q-mx-auto q-my-md flex flex-center"
                size="10em"
                color="primary"
              >
                <img
                  :src="patientPic"
                  @error="$event.target.src = 'icons\\byte_white.png'"
                />
              </q-avatar>
            </div>
            <div
              v-for="(item, patient_id) in currentItem"
              :key="patient_id"
              class="q-my-md q-mx-lg"
              style="overflow: hidden"
            >
              <span class="text-bold text-uppercase">{{ patient_id }}:</span
              >&nbsp;<span>{{ item }} </span>
            </div>
          </q-card>
        </q-card-section>
        <q-card-actions align="right" class="bg-primary text-secondary">
          <q-btn v-close-popup flat label="OK" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Update Dialog -->
    <q-dialog v-model="updateToggle" class="flex flex-center shadow-10 gt-xs">
      <q-card bordered style="width: 800px; max-width: 60vw">
        <q-card-section class="q-pa-lg bg-accent">
          <q-card class="bg-secondary q-mx-xl q-py-lg">
            <q-card-section class="row flex flex-center bg-primary"
              ><q-icon
                class="q-mx-sm"
                size="2rem"
                color="green-3"
                name="mdi-pen"
              ></q-icon>
              <span class="text-h6 text-bold">
                UPDATE PATIENT'S DATA</span
              ></q-card-section
            >

            <q-form class="q-my-md q-mx-xl">
              <span class="text-bold text-uppercase"
                >ID: {{ currentItemData.patient_id }}
              </span>
              <q-uploader
                name="patient1"
                class="q-mx-auto"
                label="Upload files"
                color="accent"
                style="
                  max-width: 100%;
                  height: 300px;
                  box-shadow: 4px 5px rgba(0, 0, 0, 0.25);
                "
                hide-upload-btn
                accept=".jpeg, .jpg, .png"
                @added="selectFile"
              />
              <q-input v-model="currentItemData.patient_name" label="NAME" />
              <q-input
                v-model="currentItemData.client_since"
                type="date"
                label="CLIENT SINCE"
              />
              <q-select
                v-model="currentItemData.sex"
                :options="options.sex"
                label="SEX"
              />
              <q-input
                v-model="currentItemData.age"
                type="number"
                label="AGE"
              />
              <q-input
                v-model="currentItemData.occupation"
                label="OCCUPATION"
              />
              <q-input
                v-model="currentItemData.mobile_no"
                mask="(##) - ### - ### - ####"
                unmasked-value
                label="MOBILE NO"
              />
              <q-input
                v-model="currentItemData.tel_no"
                mask="### - ####"
                unmasked-value
                label="TEL NO"
              />
              <q-input v-model="currentItemData.address" label="ADDRESS" />
              <q-input
                v-model="currentItemData.recent_schedule"
                type="date"
                label="RECENT SCHEDULE"
              />
              <q-select
                v-model="currentItemData.patient_procedure"
                :options="options.procedure"
                label="PROCEDURE"
              />
              <q-input v-model="currentItemData.diagnosis" label="DIAGNOSIS" />
            </q-form>
          </q-card>
        </q-card-section>
        <q-card-actions align="right" class="bg-primary text-secondary">
          <q-btn
            v-close-popup
            type="submit"
            flat
            label="UPDATE"
            @click="updatePatient_Data"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.patient_name,
    format: (val) => `${val}`,
    sortable: true,
    headerClasses: "bg-primary text-secondary",
    headerStyle: "max-width: 800px",
    width: "800px",
  },
  {
    name: "sex",
    required: true,
    label: "Sex",
    align: "left",
    field: (row) => row.sex,
    format: (val) => `${val}`,
    sortable: true,
    headerClasses: "bg-primary text-secondary",
    headerStyle: "max-width: 800px",
    width: "800px",
  },
  {
    name: "procedure",
    required: true,
    label: "Procedure",
    align: "left",
    field: (row) => row.patient_procedure,
    format: (val) => `${val}`,
    sortable: true,
    headerClasses: "bg-primary text-secondary",
    headerStyle: "max-width: 800px",
    width: "800px",
  },
  {
    name: "actions",
    label: "Actions",
    align: "center",
    headerStyle: "max-width: 800px",
    headerClasses: "bg-primary text-secondary",
  },
];

const rows = [];

export default {
  setup() {
    return {
      columns,
      rows,
      filter: ref(""),
      viewToggle: ref(false),
      updateToggle: ref(false),
      currentItem: ref(null),
      currentItemData: ref(null),
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
      patientList: [],
      patientPic: "",
      patientPic_update: "",
      selectedFile: "",
      picture_extension: "",
    };
  },

  created() {
    this.show_PatientProfile();
  },

  methods: {
    //View PatientList
    
    async show_PatientProfile() {
      try {
        const response = await axios.get(
          "http://localhost:5000/patientProfile"
        );
        this.patientList = response.data;

        if (this.patientList == []) {
          console.log("No Records Found");
        } else if (this.patientList == undefined) {
          console.log("Error");
        }
      } catch (err) {
        console.log(err);
      }
    },

    view(row) {
      this.currentItem = row;
      this.viewToggle = true;
      this.show_PatientPic();
    },

    async show_PatientPic() {
      try {
        const response = await axios.get(
          `http://localhost:5000/patientProfile/` + this.currentItem.patient_id
        );
        this.patientPic = response.data[0].patient_pic;
      } catch (err) {
        console.log(err);
      }
    },

    async show_PatientPic_Update() {
      try {
        const response = await axios.get(
          `http://localhost:5000/patientProfile/` + this.currentItemData.patient_id
        );
        this.patientPic_update = response.data[0].patient_pic;
      } catch (err) {
        console.log(err);
      }
    },


    //Update Patient Record in patientlist
    selectFile(file) {
      this.selectedFile = file[0];
    },

    async updatePatient_Data() {
      const fd = new FormData();

      fd.append("patient_name", this.currentItemData.patient_name);
      fd.append("client_since", this.currentItemData.client_since);
      fd.append("sex", this.currentItemData.sex);
      fd.append("age", this.currentItemData.age);
      fd.append("occupation", this.currentItemData.occupation);
      fd.append("mobile_no", this.currentItemData.mobile_no);
      fd.append("tel_no", this.currentItemData.tel_no);
      fd.append("address", this.currentItemData.address);
      fd.append("recent_schedule", this.currentItemData.recent_schedule);
      fd.append("patient_procedure", this.currentItemData.patient_procedure);
      fd.append("diagnosis", this.currentItemData.diagnosis);

      if (this.selectedFile != "") {
        if (this.selectedFile.type == "image/jpeg") {
          this.picture_extension = ".jpeg";
        } else if (this.selectedFile.type == "image/jpg") {
          this.picture_extension = ".jpg";
        } else if (this.selectedFile.type == "image/png") {
          this.picture_extension = ".png";
        } else {
          console.log("Upload jpeg, jpg, and png only");
        }
        fd.append("patient", this.selectedFile);
        const new_name =
          "patient" + "-" + this.selectedFile.name + this.picture_extension;
        fd.append("patient_pic", "patient_pictures\\" + new_name);
      } else {
        console.log(this.patientPic_update);
        fd.append("patient_pic", this.patientPic_update);
      }

      this.$axios
        .put(
          `http://localhost:5000/patientProfile/` +
            this.currentItemData.patient_id,
          fd,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function () {
          console.log("Updated Successfully!");
          window.location.reload();
        })
        .catch(function () {
          console.log("Something went wrong");
        });
    },

    update(props) {
      this.currentItemData = { ...props };
      this.updateToggle = true;
      this.show_PatientPic_Update();
    },

    //Delete Patient Record
    async deletePatient_Data() {
      try {
        await axios.delete(
          `http://localhost:5000/patientProfile/` +
            this.currentItemData.patient_id
        );
        console.log("Deleted Successfully!");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    },

    remove(props) {
      this.currentItemData = { ...props };
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to Delete this patient?",
          ok: {
            push: true,
          },
          cancel: {
            color: "negative",
          },
          persistent: true,
        })
        .onOk(() => {
          this.deletePatient_Data();
        });
    },
  },
};
</script>
