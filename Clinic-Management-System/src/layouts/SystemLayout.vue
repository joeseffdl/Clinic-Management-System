<template>
  <q-layout view="hHh Lpr lFf">
    <!-- (Optional) The Header -->
    <q-header reveal elevated>
      <q-toolbar class="glossy bg-primary text-h5">
        <q-btn flat round dense icon="mdi-menu" @click="drawer = !drawer" />
        <q-space />
        Best <span class="text-accent">Byte</span>
        <!-- <q-img
          src="icons\logo_white.png"
          alt="company logo"
          style="width: 2em; height: 2em"
        /> -->
        <q-space />
      </q-toolbar>
    </q-header>

    <!-- (Optional) The Footer
    <q-footer reveal elevated >
        <q-toolbar class="glossy bg-primary">
          <q-space/>&copy; Snow Squirrel 2021<q-space/>
        </q-toolbar>
      </q-footer> -->

    <q-drawer         
      v-if="miniState != true"
      v-model="drawer"
      class="shadow-5 bg-secondary"
      show-if-above
      :width="200"
      :breakpoint="600"
      :mini="!drawer || miniState"
        @click.capture="drawerClick"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item v-ripple clickable to="/home">
            <q-item-section avatar>
              <q-icon name="mdi-home" />
            </q-item-section>

            <q-item-section> Home Page </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/profile">
            <q-item-section avatar>
              <q-icon name="mdi-account" />
            </q-item-section>

            <q-item-section> Profile </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/appointments">
            <q-item-section avatar>
              <q-icon name="mdi-timetable" />
            </q-item-section>

            <q-item-section> Appointments </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/patientlist">
            <q-item-section avatar>
              <q-icon name="mdi-medical-bag" />
            </q-item-section>

            <q-item-section> Patient Records </q-item-section>
          </q-item>

          
        </q-list>
        <q-item v-ripple class="bg-red glossy absolute-bottom" clickable>
            <q-item-section avatar >
              <q-icon name="mdi-logout"/>
            </q-item-section>

            <q-item-section> Settings </q-item-section>
          </q-item>
      </q-scroll-area>

      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon="mdi-chevron-double-left"
          style="z-index: 1;"
          @click="miniState = true"
        />
      </div>
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px" 
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="80px" class="q-mb-sm">
            <img src="icons\logo_black.png" />
          </q-avatar>
          <div class="text-weight-bold">Profile Name</div>
          <div>@bestbyte</div>
        </div>
      </q-img>
    </q-drawer>
    <q-drawer   
      v-else
      v-model="drawer"
      class="shadow-5 bg-secondary"
      show-if-above
      :width="200"
      :breakpoint="500"
      :mini="miniState"
      @mouseover="miniState = false"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item v-ripple clickable to="/home">
            <q-item-section avatar>
              <q-icon name="mdi-home" />
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/profile">
            <q-item-section avatar>
              <q-icon name="mdi-account" />
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/appointments">
            <q-item-section avatar>
              <q-icon name="mdi-timetable" />
            </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/patientlist">
            <q-item-section avatar>
              <q-icon name="mdi-medical-bag" />
            </q-item-section>
          </q-item>

        </q-list>
        <q-item v-ripple class="bg-red glossy absolute-bottom"  clickable>
          <q-item-section avatar>
            <q-icon name="mdi-logout" />
          </q-item-section>
        </q-item>
      </q-scroll-area>
      
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px" 
      >
        <div class="absolute-center bg-transparent">
          <q-avatar size="50px" class="">
            <img src="icons\logo_black.png" />
          </q-avatar>
        </div>
      </q-img>
    </q-drawer>
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SystemLayout",

  setup () {
    const miniState = ref(true)

    return {
      drawer: ref(false),
      miniState,

      drawerClick (e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation()
        }
      }
    }
  }
};
</script>
