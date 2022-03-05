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
            :rows="events"
            :columns="columns"
            row-key="events.sched_id"
            no-data-label="No Appointments for today"
            no-results-label="No Appointments for today"
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
          <div class="row column flex flex-center q-mb-xl">
            <div class="col text-h4 text-center text-bold q-py-sm flex-center">
              Time
            </div>
            <q-card id="timeqcard" class="col flex flex-center q-ma-md" rounded>
              <div id="clock">
                <div class="clockbox">{{ time }}</div>
              </div>
            </q-card>
          </div>

          <div class="row flex flex-center q-my-xl">
            <div class="text-h4 text-bold q-py-sm">Weather</div>
            <q-card id="weatherqcard" class="flex flex-center">
              <div id="weather">
                <main
                  id="weather-sub"
                  :class="
                    typeof weather != 'undefined' && weathertemp > cool
                      ? 'warm'
                      : ''
                  "
                >
                  <div
                    id="upper"
                    :class="
                      typeof weather != 'undefined' && weathertemp > cool
                        ? 'warm'
                        : ''
                    "
                  >
                    <div class="search-box">
                      <input
                        v-model="query"
                        type="text"
                        class="search-bar"
                        placeholder="Enter location..."
                        @keypress="fetchWeather"
                      />
                    </div>

                    <div class="location-box">
                      <div class="location">
                        {{ weathercity }} {{ weathercountry }}
                      </div>
                      <div class="date">{{ date }}</div>
                    </div>
                  </div>
                  <div
                    id="lower"
                    :class="
                      typeof weather != 'undefined' && weathertemp > cool
                        ? 'warm'
                        : ''
                    "
                  >
                    <div class="weather-box">
                      <div class="temp">{{ Math.round(weathertemp) }}°C</div>
                      <div class="weather">{{ weather }}</div>
                    </div>
                  </div>
                </main>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { date } from "quasar";
import axios from "axios";

const columns = [
  {
    name: "name",
    label: "Name",
    align: "left",
    field: (row) => row.sched_title,
    format: (val) => `${val}`,
  },
  {
    name: "procedure",
    label: "Procedure",
    align: "left",
    field: (row) => row.sched_detail,
    format: (val) => `${val}`,
  },
  {
    name: "time",
    label: "Time",
    align: "left",
    field: (row) => row.sched_time,
    format: (val) => `${val}`,
  },
  {
    name: "schedule",
    label: "Schedule",
    align: "left",
    field: (row) => row.sched_date,
    format: (val) => `${val}`,
  },
];

const rows = [];

export default {
  name: "Home",

  setup() {
    const timeStamp = Date.now();
    const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD");
    return {
      filter: ref(""),
      dateNow: formattedString,
      rows,
      columns,
    };
  },

  data() {
    return {
      api_key: "f4e9d4ec221c78509ccaf1ee2ac4967d",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weathertemp: Number(),
      weathercity: "What is the Weather today?",
      weathercountry: "",
      weather: "Search Here!",
      date: "",
      cool: Number(27),
      interval: null,
      time: null,

      events: [],
    };
  },


  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval);
  },

  created() {
    //get today's appointment from db
    this.getAppointments_Data();

    // update the time every second
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
  },

  methods: {
    //Show Appointments
    async getAppointments_Data() {
      try {
        const response = await axios.get(`http://localhost:5000/appointments/`+ this.dateNow );
        this.events = response.data;

        if (this.events == undefined) {
          console.log("No Records Found");
        }
      } catch (err) {
        console.log(err);
      }
    },

    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
        this.date = this.dateBuilder();
      }
    },

    setResults(results) {
      console.log(results);
      this.weathercity = results.name;
      this.weathercountry = results.sys.country;
      this.weathertemp = results.main.temp;
      this.weather = results.weather[0].description;
    },

    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day}, ${date} ${month} ${year}`;
    },
  },
};

/*
  methods: {
   ...mapActions("module_a", ["removeClient"]),
    remove(props) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure to Delete this event?",
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
     },*/
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Quicksand", sans-serif;
}

#weather {
  background-color: #0e86d4;
  background-size: cover;
  background-position: bottom;
  transition: 0.3s;
  padding: 11px 10px 11px 10px;
  min-width: 210px;
  max-width: 250px;
}

#weather-sub {
  color: #ffff;
  background-color: #5885af;
  border: 0.3rem solid #fff;
  border-radius: 10px;
}

#weather-sub.warm {
  color: #ffff;
  background-color: #fda194;
  border: 0.3rem solid #fff;
  border-radius: 10px;
}

#timeqcard {
  border-radius: 10px;
  margin: -5px auto 0px auto;
  box-shadow: 4px 5px rgba(0, 0, 0, 0.25);
}

#weatherqcard {
  border-radius: 10px;
  box-shadow: 4px 5px rgba(0, 0, 0, 0.25);
  margin-top: -5px;
}

#upper {
  background: #41729f;
  color: #ffff;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 5px;
  padding-bottom: 10px;
}

#upper.warm {
  background: #e96f6b;
  color: #ffff;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 5px;
  padding-bottom: 10px;
}

#lower {
  background: #5885af;
  color: #ffff;
  border-radius: 0px 0px 10px 10px;
  padding-top: 15px;
}

#lower.warm {
  background: #fda194;
  color: #ffff;
  border-radius: 0px 0px 10px 10px;
  padding-top: 15px;
}

.search-box {
  width: 100%;
  margin-bottom: 25px;
  padding-top: 8px;
}

.search-box .search-bar {
  display: block;
  width: 85%;
  padding: 15px;
  margin: 15px auto;

  color: black;
  font-size: 20px;
  appearance: none;
  border: solid white;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: #d4f1f4;
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: #ffff;
  border-radius: 16px 0px 16px 0px;
  color: #05445e;
  font-size: 20px;
}

.location-box .location {
  color: #ffff;
  padding: 0px 20px 5px 20px;
  margin-top: -10px;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  text-shadow: 2px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #ffff;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 10px 5px 0px 5px;
}

.weather-box {
  text-align: center;
  padding: 0px 8px 30px 8px;
  margin-top: -10px;
}

.weather-box .temp {
  display: inline-block;
  padding: 3px 15px;
  color: #05445e;
  font-size: 50px;
  font-weight: 900;
  text-shadow: 2px 3px rgba(0, 0, 0, 0.25);
  background-color: #d4f1f4;
  border-radius: 16px;
  margin: 20px 0px 0px 0px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #ffff;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 5px 0px 5px;
  font-style: italic;
}

#clock {
  background-color: #0e86d4;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  min-width: 225px;
}

.clockbox {
  background: linear-gradient(to bottom, #41729f 50%, #5885af 50%);
  color: #ffff;
  border: 0.3rem solid #fff;
  border-radius: 10px;
  font-size: 35px;
  font-weight: 600;
  text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  padding: 0px 10px 0px 10px;
  text-align: center;
}
</style>
