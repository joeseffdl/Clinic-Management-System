<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar class="glossy bg-primary">
      
        <q-toolbar-title class="self" style="padding: 0.25em">
            Sign Up
        </q-toolbar-title>
        <div class="text-h5"> Best <span class="text-accent ">Byte</span> <q-img src="icons\logo_white.png" alt="company logo"
          style="width:2em;height:em;" /></div>

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
