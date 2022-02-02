<template>
  <q-layout view="hhh lpR fff">
    <q-header reveal elevated>
      <q-toolbar class="glossy bg-primary">
        <div class="text-h5">
          <q-img
            src="icons\logo_white.png"
            alt="company logo"
            style="width: 2em; height: 2em"
          />
          Best <span class="text-accent">Byte</span>
        </div>
        <q-space />
        <div class="gt-sm">
          <q-btn flat :to="{ name: 'Index' }" icon="mdi-home" label="Home" /> 
          <q-btn flat :to="{ name: 'About' }" icon="mdi-information" label="About" /> 
          <q-btn flat :to="{ name: 'BestByte' }" icon="mdi-account-group" class="q-pr-md" label="Meet the Team" /> 
          <q-btn-dropdown flat icon="mdi-account-plus" class="q-pr-md" label="Sign In"> 
            <q-list>
              <q-item v-close-popup clickable :to="{ name: 'Guest' }">
                <q-item-section avatar>
                  <q-avatar icon="mdi-doctor" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Doctor</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup clickable :to="{ name: 'Admin' }">
                <q-item-section avatar>
                  <q-avatar icon="mdi-code-tags" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Admin</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator inset color="accent" />
              <q-item v-close-popup clickable :to="{ name: 'SignUp' }">
                <q-item-section avatar>
                  <q-avatar icon="mdi-account-plus" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label >Register</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div> 
        <q-btn class="lt-md" flat round dense icon="mdi-menu" @click="drawerRight = !drawerRight" />
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawerRight"
        side="right"           
        overlay
        :width="200"
        elevated
        :mini ="$q.screen.md"
        :mini-width="0"
        @mouseleave="drawerRight = false"
      >
        <q-scroll-area class="fit bg-secondary">
          <div class="q-pa-sm text-primary q-gutter-sm">
            <q-btn flat :to="{ name: 'Index' }" icon="mdi-home" class="fit" align="left" label="Home" /> 
            <q-separator color="accent" />
            <q-btn flat :to="{ name: 'About' }" icon="mdi-information" class="fit" align="left" label="About" /> 
            <q-separator color="accent" />
            <q-btn flat icon="mdi-account-group" class="fit" align="left" label="Meet the Team" /> 
            <q-separator color="accent" />
            <q-btn-dropdown flat icon="mdi-account-plus" class="fit" align="left" label="Sign In"> 
              <q-list>
                <q-item v-close-popup clickable :to="{ name: 'Guest' }">
                  <q-item-section avatar>
                    <q-avatar icon="mdi-doctor" color="primary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Doctor</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item v-close-popup clickable :to="{ name: 'Admin' }">
                  <q-item-section avatar>
                    <q-avatar icon="mdi-code-tags" color="primary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Admin</q-item-label>
                  </q-item-section>
                </q-item>

                <q-separator inset color="accent"  />
                <q-item v-close-popup clickable :to="{ name: 'SignUp' }">
                  <q-item-section avatar>
                    <q-avatar icon="mdi-account-plus" color="primary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label >Register</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-separator color="accent" />
          </div>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer  elevated>
      <q-toolbar class="glossy bg-primary">
        <q-space />&copy; Snow Squirrel 2021<q-space />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    let drawerRight = ref(false)
    const screenSize = 1023
    return {
      drawerRight,
      screenSize
    }
  },
}
</script>
