<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar class="glossy bg-primary">
        
        <div class="text-h5"><q-img src="icons\logo_white.png" alt="company logo"
          style="width:2em;height:2em;" /> Best <span class="text-accent ">Byte</span> </div>
        <!-- Nav Bar -->
        <q-toolbar-title style="padding: 0.25em">
            
        </q-toolbar-title>


        <div class="gt-sm">
          <q-btn outline rounded class="text-accent" size="1em" label="Dashboard"></q-btn>
        </div>

        <!-- Start Dashboard -->
        <div class="lt-md">
          <q-btn
            flat
            dense
            round
            class="text-accent"
            icon="mdi-menu"
            aria-label="Menu"
            size="1.5em"
            @click="toggleLeftDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Clinic Dashboard
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <!-- End Dashboard -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated >
        <q-toolbar class="glossy bg-primary">
          <q-space/>&copy; Snow Squirrel 2021<q-space/>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'About Us',
    caption: 'Company Profile',
    icon: 'mdi-store',
    link: 'https://quasar.dev'
  },
  {
    title: 'Help',
    caption: 'System Guide',
    icon: 'mdi-help',
    link: 'https://quasar.dev'
  },
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
