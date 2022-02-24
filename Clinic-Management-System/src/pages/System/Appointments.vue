<template>
  <q-page class="bg-secondary">
    <!-- Display Event -->
    <q-dialog v-model="displayEvent">
      <div>
        <q-card style="width: 550px">
          <q-toolbar class="bg-accent glossy" style="min-width: 200px">
            <q-toolbar-title>
              {{ event.sched_title }}
            </q-toolbar-title>
            <q-space />
            <q-btn-group flat>
              <q-btn
                v-close-popup
                flat
                round
                color="red"
                icon="mdi-delete"
                @click.stop="deleteEvent(event)"
              />
              <q-btn
                v-close-popup
                flat
                round
                color="primary"
                icon="mdi-pen"
                @click.stop="editEvent()"
              />
              <q-btn v-close-popup flat round color="black" icon="mdi-close" />
            </q-btn-group>
          </q-toolbar>
          <q-card-section class="inset-shadow bg-secondary">
            <div>
              {{ (event.sched_time ? event.sched_time + " - " : "") + event.sched_detail}}
            </div>
            <q-card-actions align="right">
              <q-btn v-close-popup flat label="OK" color="secondary" />
            </q-card-actions>
          </q-card-section>
        </q-card>
      </div>
    </q-dialog>
    <!-- Edit Event -->
    <q-dialog v-model="showEdit" persistent>
      <div>
        <q-card style="width: 500px">
          <q-toolbar class="bg-accent glossy" style="min-width: 400px">
            <q-toolbar-title> Update Event </q-toolbar-title>
            <q-space />
            <q-btn v-close-popup flat round color="black" icon="mdi-close" />
          </q-toolbar>
          <q-card-section class="bg-secondary">
            <q-form class="q-ma-sm" @submit="onEdit">
              <q-input
                v-model="event.sched_title"
                color="accent"
                label="NAME"
                clearable
              />

              <q-select
                v-model="event.sched_detail"
                color="accent"
                label="Procedure"
                :options="options.procedure"
                autofocus
                :rules="[(v) => !!v || 'Field is required!']"
              />

              <q-input
                v-model="event.sched_time"
                color="accent"
                type="time"
                label="TIME"
                clearable
              />

              <q-input
                v-model="event.duration_days"
                color="accent"
                type="number"
                label="DURATION IN DAYS"
              />

              <q-select
                v-model="event.bgcolor"
                :options="options.bgcolor"
                icon="mdi-palette"
                color="accent"
                label="COLOR"
              />
              <q-card-actions align="right">
                <q-btn flat label="OK" type="submit" color="primary" />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </q-dialog>
    <!-- Add Event -->
    <q-dialog v-model="addEvent" persistent>
      <div>
        <q-card style="width: 500px">
          <q-toolbar class="bg-secondary glossy" style="min-width: 400px">
            <q-toolbar-title> Add Event </q-toolbar-title>
            <q-space />
            <q-btn v-close-popup flat round color="black" icon="mdi-close" />
          </q-toolbar>
          <q-card-section class="bg-primary">
            <q-form class="q-ma-sm" @submit="onSubmit">
              <q-input
                v-model="eventsForm.name"
                color="accent"
                label="NAME"
                autofocus
                :rules="[(v) => (v && v.length > 0) || 'Field cannot be empty']"
                clearable
              />

              <q-select
                v-model="eventsForm.procedure"
                color="accent"
                label="Procedure"
                :options="options.procedure"
                autofocus
                :rules="[(v) => !!v || 'Field is required!']"
              />

              <q-input
                v-model="eventsForm.time"
                color="accent"
                type="time"
                label="TIME"
                clearable
              />

              <q-input
                v-model="eventsForm.days"
                color="accent"
                type="number"
                label="DURATION IN DAYS"
                :rules="[(val) => val > 0 || 'Input should be greater than 0']"
              />

              <q-select
                v-model="eventsForm.bgcolor"
                :options="options.bgcolor"
                icon="mdi-palette"
                color="accent"
                label="COLOR"
              />

              <q-card-actions align="right">
                <q-btn flat label="OK" type="submit" color="secondary" />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </q-dialog>

    <div class="q-pa-xl">
      <div class="subcontent">
        <navigation-bar @today="onToday" @prev="onPrev" @next="onNext" />
        <div class="row justify-center">
          <div style="display: flex; max-width: 800px; width: 100%">
            <q-calendar-month
              ref="calendar"
              v-model="selectedDate"
              color="accent"
              show-day-of-year-label
              :month-label-size="size"
              date-align="right"
              :day-min-height="80"
              :style="blue"
              animated
              bordered
              @click-date="onClickDate"
              @click-day="onClickDay"
            >
              <template #day="{ scope: { timestamp } }">
                <template
                  v-for="event in eventsMap[timestamp.date]" 
                  :key="event['sched_id']"
                >
                  <div
                    :class="badgeClasses(event, 'day')"
                    @click="showEvent(event)"
                  >
                    <div class="title q-calendar__ellipsis">
                      {{ event['sched_title'] }}
                      <q-tooltip>{{ event['sched_detail'] }}</q-tooltip>
                    </div>
                  </div>
                </template>
              </template>
            </q-calendar-month>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {
  QCalendarMonth,
  addToDate,
  parseDate,
  parseTimestamp,
  today,
} from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";
import NavigationBar from "src/components/NavigationBar.vue";

import { defineComponent } from "vue";
import axios from 'axios';


const CURRENT_DAY = new Date();
function getCurrentDay(day) {
  const newDay = new Date(CURRENT_DAY);
  newDay.setDate(day);
  const tm = parseDate(newDay);
  return tm.date;
}

export default defineComponent({
  name: "MonthNow",
  components: {
    NavigationBar,
    QCalendarMonth,
  },
  
  setup() {
    return {
      options: {
        bgcolor: [
          "Red",
          "Pink",
          "Purple",
          "Deep-Purple",
          "Indigo",
          "Blue",
          "Light-Blue",
          "Cyan",
          "Teal",
          "Green",
          "Light-Green",
          "Lime",
          "Yellow",
          "Amber",
          "Orange",
          "Deep-Orange",
          "Brown",
          "Grey",
          "Blue-Grey",
        ],
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
      blue: {
          '--calendar-border': '#64b5f6 1px solid',
          '--calendar-border-dark': '#e3f2fd 1px solid',
          '--calendar-border-section': '#90caf9 1px dashed',
          '--calendar-border-section-dark': '#90caf9 1px dashed',
          '--calendar-border-current': '#64b5f6 2px solid',
          '--calendar-border-current-dark': '#2979ff 2px solid',
          '--calendar-color': '#0d47a0',
          '--calendar-color-dark': '#e3f2fd',
          '--calendar-background': '#e3f2fd',
          '--calendar-background-dark': '#0d47a0',
          '--calendar-current-color': '#027BE3',
          '--calendar-current-color-dark': '#2979ff',
          '--calendar-current-background': '#00000000',
          '--calendar-current-background-dark': '#0d47a0',
          '--calendar-disabled-date-color': '#e3f2fd',
          '--calendar-disabled-date-color-dark': '#bebebe',
          '--calendar-disabled-date-background': '#90caf9',
          '--calendar-disabled-date-background-dark': '#121212',
          '--calendar-active-date-color': '#e3f2fd',
          '--calendar-active-date-color-dark': '#ffff66',
          '--calendar-active-date-background': '#2979ff',
          '--calendar-active-date-background-dark': '#64b5f6',
          '--calendar-outside-color': '#0d47a0',
          '--calendar-outside-color-dark': '#bebebe',
          '--calendar-outside-background': '#00000000',
          '--calendar-outside-background-dark': '#121212',
          '--calendar-selected-color': '#027BE3',
          '--calendar-selected-color-dark': '#027BE3',
          '--calendar-selected-background': '#cce7ff',
          '--calendar-selected-background-dark': '#cce7ff', 
        }
    };
  },

  data() {
    return {
      size: "md",
      selectedDate: today(),
      displayEvent: false,
      addEvent: false,
      showEdit: false,
      nowDate: addToDate(parseTimestamp(today()), { day: 1 }).date,
      eventsForm: {
        name: "",
        procedure: "",
        time: "All Day",
        days: 1,
        bgcolor: "Red",
      },

      showDrId: [],
      events:[],

    };
  },
  
  computed: {

    eventsMap() {
      const map = {};
      if (this.events.length > 0) {
        this.events.forEach((event) => {
          (map[event.sched_date] = map[event.sched_date] || []).push(event);
          if (event.duration_days !== undefined) {
            let timestamp = parseTimestamp(event.sched_date);
            let days = event.duration_days;

            do {
              timestamp = addToDate(timestamp, { day: 1 });
              if (!map[timestamp.date]) {
                map[timestamp.date] = [];
              }
              map[timestamp.date].push(event);
            } while (--days > 1);
          }
        });
      }
      return map;
      
    },
  },

  
  async created(){
    this.getDoctor();
    this.getAppointments_Data();
  },


  methods: {

      //Get Doctor ID
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


      //Show Appointments
      async getAppointments_Data(){
        try {
          const response = await axios.get("http://localhost:5000/appointments");
          this.events = response.data;
    
          if(this.events == undefined ){
            console.log('No Records Found')
          }

        } 
        catch (err) {
          console.log(err);
        }
      },


      //Insert new appointment
      async addAppointment_Data(){
        try{
            await axios.post("http://localhost:5000/appointments", 
            {
                doctor_id: this.showDrId,
                sched_title: this.eventsForm.name,
                sched_detail: this.eventsForm.procedure,
                sched_date: getCurrentDay(this.event.scope.timestamp.day),
                sched_time: this.eventsForm.time,
                duration_days: this.eventsForm.days,
                bgcolor:this.eventsForm.bgcolor.toLowerCase(),
            });
            
            console.log("Appointment Successfully Added!")
            window.location.reload();

        }catch (err) {
            console.log(err);
          }
     },

      onSubmit() {
      this.addEvent = false;
      this.addAppointment_Data();
      window.location.reload();
    },

    //Update Appointment
    async updateAppointment_Data() {
      try {
        await axios.put(`http://localhost:5000/appointments/`+ this.event.sched_id,
          {
                sched_title: this.event.sched_title,
                sched_detail: this.event.sched_detail,
                sched_time: this.event.sched_time,
                duration_days: this.event.duration_days,
                bgcolor:this.event.bgcolor.toLowerCase(),
          }
        );
        console.log("Updated Successfully!")
        window.location.reload();
      } 
      catch (err) {
        console.log(err);
      }
    },

    editEvent() {
      this.showEdit = true;
    },

    onEdit() {
      this.showEdit = false;
      this.updateAppointment_Data();
    },


    //Delete Appointment
    async deleteAppointment_Data() {
      try {
        await axios.delete(`http://localhost:5000/appointments/` + this.event.sched_id);
        console.log('Deleted Successfully!')
        window.location.reload();
      } 
      catch (err) {
        console.log(err);
      }
    },
    
    deleteEvent(event) {
      // this.events = this.events.filter((item) => item !== event);
      this.events = this.deleteAppointment_Data();

      if (this.events.includes(event)) {
        this.$q.notify({
          message: "Event not deleted due to an unknown error.",
          color: "red",
        });
      } else {
        this.$q.notify({
          message: "Event deleted successfully.",
          color: "green",
        });
      }

    },
    

    // Badge
    badgeClasses(event, type) {
      return {
        [`text-white bg-${event.bgcolor}`]: true,
        "rounded-border": true,
      };
    },


    // Calendar
    showEvent(event) {
        this.event = event;
        this.displayEvent = true;
        console.log("showEvent clicked", event);
    },
    
    onToday() {
      this.$refs.calendar.moveToToday();
    },

    onPrev() {
      this.$refs.calendar.prev();
    },
    
    onNext() {
      this.$refs.calendar.next();
    },

    onClickDate(event) {
      this.event = event;
      this.addEvent = true;
    },

    onClickDay(event) {
      //console.log(typeof(event.scope.timestamp.day))
    },

    
  },
});
</script>
