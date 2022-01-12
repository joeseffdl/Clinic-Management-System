<template>
  <q-page class="bg-secondary">
    <div class="q-pa-lg">
      <div class="row">
        <div class="col-10 q-mx-auto">
          <div class="text-h4 text-bold q-my-md no-wrap">
            Appointments for today:
          </div>
          <div class="row q-gutter-md q-px-auto">
            <div
              v-for="(name, index) in patientName"
              :key="index"
              class="col-auto"
            >
              <q-card
                v-if="show"
                flat
                bordered
                class="my-card bg-primary"
                style="width: 100%; max-width: 250px"
              >
                <q-card-section>
                  <div class="row">
                    <div class="col">
                      <div class="text-h6">Patient</div>
                      <div class="text-subtitle2">{{ name.value }}</div>
                    </div>
                  </div>
                </q-card-section>

                <q-card-section> Procedure: ({{ lorem }}) </q-card-section>

                <q-separator />

                <q-card-actions class="justify-around">
                  <q-btn
                    flat
                    round
                    color="red"
                    icon="mdi-close"
                    @click="removeItem(index)"
                  />
                  <q-btn flat round color="accent" icon="mdi-comment" />
                  <q-btn flat round color="secondary" icon="mdi-share" />
                </q-card-actions>
              </q-card>
            </div>

            <div
              v-for="(name, index) in patientName"
              :key="index"
              class="col-auto"
            >
              <q-card
                v-if="show"
                flat
                bordered
                class="my-card bg-primary"
                style="width: 100%; max-width: 250px"
              >
                <q-card-section>
                  <div class="row">
                    <div class="col">
                      <div class="text-h6">Patient</div>
                      <div class="text-subtitle2">{{ name.value }}</div>
                    </div>
                  </div>
                </q-card-section>

                <q-card-section> Procedure: ({{ lorem }}) </q-card-section>

                <q-separator />

                <q-card-actions class="justify-around">
                  <q-btn
                    flat
                    round
                    color="red"
                    icon="mdi-close"
                    @click="removeItem(index)"
                  />
                  <q-btn flat round color="accent" icon="mdi-comment" />
                  <q-btn flat round color="secondary" icon="mdi-share" />
                </q-card-actions>
              </q-card>
            </div>

            <div
              v-for="(name, index) in patientName"
              :key="index"
              class="col-auto"
            >
              <q-card
                flat
                bordered
                class="my-card bg-primary"
                style="width: 100%; max-width: 250px"
              >
                <q-card-section>
                  <div class="row">
                    <div class="col">
                      <div class="text-h6">Patient</div>
                      <div class="text-subtitle2">{{ name.value }}</div>
                    </div>
                  </div>
                </q-card-section>

                <q-card-section> Procedure: ({{ lorem }}) </q-card-section>

                <q-separator />

                <q-card-actions class="justify-around">
                  <q-btn
                    flat
                    round
                    color="red"
                    icon="mdi-close"
                    @click="removeItem(index)"
                  />
                  <q-btn flat round color="accent" icon="mdi-comment" />
                  <q-btn flat round color="secondary" icon="mdi-share" />
                </q-card-actions>
              </q-card>
            </div>

            <div
              v-for="(name, index) in patientName"
              :key="index"
              class="col-auto"
            >
              <q-card
                flat
                bordered
                class="my-card bg-primary"
                style="width: 100%; max-width: 250px"
              >
                <q-card-section>
                  <div class="row">
                    <div class="col">
                      <div class="text-h6">Patient</div>
                      <div class="text-subtitle2">{{ name.value }}</div>
                    </div>
                  </div>
                </q-card-section>

                <q-card-section> Procedure: ({{ lorem }}) </q-card-section>

                <q-separator />

                <q-card-actions class="justify-around">
                  <q-btn
                    flat
                    round
                    color="red"
                    icon="mdi-close"
                    @click="removeItem(index)"
                  />
                  <q-btn flat round color="accent" icon="mdi-comment" />
                  <q-btn flat round color="secondary" icon="mdi-share" />
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </div>
        <div class="col-2 gt-md">
          <div class="row flex flex-center q-mb-xl">
            <div class="text-h4 text-bold">Time</div>
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
            <div class="text-h4 text-bold">Weather</div>
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

export default {
  name: "System",

  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      time: ref("01:50"),
    };
  },
  data() {
    return {
      patientName: [{ value: "Patient A" }],
      show: true,
    };
  },
  methods: {
    removeItem(seconds) {
      setTimeout(() => (this.show = false), seconds * 1000);
    },
  },
};
</script>
