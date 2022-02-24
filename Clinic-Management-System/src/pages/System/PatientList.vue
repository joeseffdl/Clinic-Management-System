<template>
  <q-page class="bg-secondary">
    <div class="q-pa-xl">
      <div class="fit">
        <q-table
          :rows= "patientList"
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
            <div
              v-for="(item, patient_id) in currentItem"
              :key="patient_id"
              class="q-my-md q-mx-lg"
              style="overflow: hidden;" 
            >
              <span class="text-bold text-uppercase">{{ patient_id }}:</span>&nbsp;<span
                >{{ item }}
              </span>
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
                >ID: {{ currentItemData.patient_id }}</span
              >
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
import axios from 'axios';

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
    headerStyle: 'max-width: 800px',
    width: '800px'
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
    headerStyle: 'max-width: 800px',
    width: '800px'
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
    headerStyle: 'max-width: 800px',
    width: '800px'
  },
  {
    name: "actions",
    label: "Actions",
    align: "center",
    headerStyle: 'max-width: 800px',
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
    return{

      patientList: [],

    }
  },

  created(){
    this.show_PatientProfile();
  },

  methods: {

    //View PatientList
    async show_PatientProfile() {
      try {
        const response = await axios.get("http://localhost:5000/patientProfile");
        this.patientList = response.data;

        if(this.patientList == [] ){
          console.log('No Records Found')
        }
        else if (this.patientList == undefined){
          console.log('Error')
        }

      } 
      catch (err) {
        console.log(err);
      }
    },

    view(row) {
      this.currentItem = row;
      this.viewToggle = true;
    },


    //Update Patient Record in patientlist
    async updatePatient_Data() {
      try {
        await axios.put(`http://localhost:5000/patientProfile/`+ this.currentItemData.patient_id,
          {
                patient_name: this.currentItemData.patient_name,
                client_since: this.currentItemData.client_since,
                sex: this.currentItemData.sex,
                age: this.currentItemData.age,
                occupation: this.currentItemData.occupation,
                mobile_no: this.currentItemData.mobile_no,
                tel_no: this.currentItemData.tel_no,
                address: this.currentItemData.address,
                recent_schedule: this.currentItemData.recent_schedule,
                patient_procedure: this.currentItemData.patient_procedure,
                diagnosis: this.currentItemData.diagnosis
          }
        );
        console.log("Updated Successfully!")
        window.location.reload();
      } 
      catch (err) {
        console.log(err);
      }
    },

    update(props) {
      this.currentItemData = { ...props };
      this.updateToggle = true;
    },


    //Delete Patient Record
    async deletePatient_Data() {
      try {
        await axios.delete(`http://localhost:5000/patientProfile/` + this.currentItemData.patient_id);
        console.log('Deleted Successfully!')
        window.location.reload();
      } 
      catch (err) {
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
    

  }


};

</script>
