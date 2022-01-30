<template>
  <q-page class="bg-secondary">
    <div class="q-pa-lg">
      <div class="row">
        <div class="col-10 q-mx-auto">
          <q-table
            grid
            class="q-px-md"
            card-class="bg-primary text-secondary"
            title="Appointments for Today"
            :rows="allClients"
            :columns="columns"
            row-key="allClients.id"
            :filter="dateNow"
            no-data-label="No Appointments for today"
            hide-header
            hide-pagination
            :rows-per-page-options="[0]"
          >
            <!-- <template #top-right>
              <q-input v-model="filter" class="fit" borderless debounce="300" placeholder="Search">
                <template #append>
                  <q-icon name="mdi-table-search" />
                </template>
              </q-input>
            </template> -->
            <!-- <template #body-cell>
              <q-btn
                class=" text-red"
                flat
                dense
                icon="mdi-delete"
                @click.stop="remove(props.row)"
              />
            </template> -->
          </q-table>
        </div>
        <div class="col-2 gt-md">
          <div class="row flex flex-center q-my-md">
            <div class="text-h6">Time</div>
            <q-card class="flex flex-center" rounded>
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-input v-model="time" filled mask="time" :rules="['time']">
                <template #append>
                  <q-icon name="mdi-clock-outline">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time v-model="time" color="primary">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="secondary"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </q-card>
          </div>

          <div class="row flex flex-center q-my-xl">
            <div class="text-h6 ">Weather</div>
            <q-card class="flex flex-center">
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-input v-model="time" filled mask="time" :rules="['time']">
                <template #append>
                  <q-icon name="mdi-clock-outline">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time v-model="time" color="primary">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="secondary"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { mapActions, mapGetters } from "vuex";
import { date } from 'quasar'

const columns = [
  {
    name: "name",
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "procedure",
    label: "Procedure",
    align: "left",
    field: (row) => row.procedure,
    format: (val) => `${val}`,
  },
  {
    name: "diagnosis",
    label: "Diagnosis",
    align: "left",
    field: (row) => row.diagnosis,
    format: (val) => `${val}`,
  },
  {
    name: "schedule",
    label: "Schedule",
    align: "left",
    field: (row) => row.recentSchedule,
    format: (val) => `${val}`,
  },
];

const rows = [];

export default {
  name: "Home",

  setup() {
    const timeStamp = Date.now()
    const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')
      return {
        filter: ref(''),
        dateNow: formattedString,
        rows,
        columns,
        time: ref("01:50"),
      };
  },
  computed: {
    ...mapGetters("module_a", ["allClients"]),  
  },
  // methods: {
  //   ...mapActions("module_a", ["removeClient"]),
  //   remove(props) {
  //     this.$q
  //       .dialog({
  //         title: "Confirm",
  //         message: "Are you sure to Delete this event?",
  //         ok: {
  //           push: true,
  //         },
  //         cancel: {
  //           color: "negative",
  //         },
  //         persistent: true,
  //       })
  //       .onOk(() => {
  //         this.removeClient(props);
  //       });
  //   },
    
  // }
};
</script>

