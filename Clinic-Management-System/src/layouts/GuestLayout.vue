<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar class="glossy bg-primary">
        <router-link :to=" { path: '/Index'}" style="text-decoration:none">  
          <q-btn flat class="" icon="mdi-keyboard-backspace"/>
        </router-link>
        <q-space />

        <!-- Nav Bar -->
        <q-toolbar-title style="padding: 0.25em">
            <div class="text-center">Doctor Login</div>
        </q-toolbar-title>

        <q-space />

      </q-toolbar>
    </q-header>
    
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

</script>
