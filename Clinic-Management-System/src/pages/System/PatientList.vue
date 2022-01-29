<template>
  <q-page class="bg-secondary">
    <div class="q-pa-md">
      <div class="absolute-center">
        <q-table
          :rows="allClients"
          :columns="columns"
          :filter="filter"
          no-data-label="I didn't find anything for you"
          no-results-label="The filter didn't uncover any results"
          row-key="allClients.id"
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
              color="black"
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
              v-for="(item, id) in currentItem"
              :key="id"
              class="q-my-md q-mx-lg"
              style="overflow: hidden;" 
            >
              <span class="text-bold text-uppercase">{{ id }}:</span>&nbsp;<span
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
                >ID: {{ currentItemData.id }}</span
              >
              <q-input v-model="currentItemData.name" label="NAME" />
              <q-input
                v-model="currentItemData.clientSince"
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
                v-model="currentItemData.mobileNo"
                mask="(##) - ### - ### - ####"
                unmasked-value
                label="MOBILE NO"
              />
              <q-input
                v-model="currentItemData.telNo"
                mask="### - ####"
                unmasked-value
                label="TEL NO"
              />
              <q-input v-model="currentItemData.address" label="ADDRESS" />
              <q-input
                v-model="currentItemData.recentSchedule"
                type="date"
                label="RECENT SCHEDULE"
              />
              <q-select
                v-model="currentItemData.procedure"
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
            @click="updateItem"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { mapActions, mapGetters } from "vuex";

const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
    headerClasses: "bg-dark text-secondary",
    headerStyle: 'max-width: 800px',
    width: '800px'
  },
  {
    name: "sex",
    required: true,
    label: "Sex",
    align: "center",
    field: (row) => row.sex,
    format: (val) => `${val}`,
    sortable: true,
    headerClasses: "bg-dark text-secondary",
    headerStyle: 'max-width: 800px',
    width: '800px'
  },
  {
    name: "procedure",
    required: true,
    label: "Procedure",
    align: "center",
    field: (row) => row.procedure,
    format: (val) => `${val}`,
    sortable: true,
    headerClasses: "bg-dark text-secondary",
    headerStyle: 'max-width: 800px',
    width: '800px'
  },
  {
    name: "actions",
    label: "Actions",
    align: "center",
    headerStyle: 'max-width: 800px',
    headerClasses: "bg-dark text-secondary",
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
  computed: {
    ...mapGetters("module_a", ["allClients"]),
  },
  methods: {
    ...mapActions("module_a", ["removeClient", "updateClient"]),
    remove(props) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to Delete this user?",
          ok: {
            push: true,
          },
          cancel: {
            color: "negative",
          },
          persistent: true,
        })
        .onOk(() => {
          this.removeClient(props);
        });
    },
    view(row) {
      this.currentItem = row;
      this.viewToggle = true;
    },
    update(props) {
      this.currentItemData = { ...props };
      this.updateToggle = true;
    },
    updateItem(currentItemData) {
      this.updateClient(this.currentItemData);
    },
  },
};
</script>
