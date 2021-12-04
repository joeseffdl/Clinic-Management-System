<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar class="glossy bg-primary">
        
        <div class="text-h5"><q-img src="icons\logo_white.png" alt="company logo"
          style="width:2em;height:2em;" /> Best <span class="text-accent ">Byte</span> </div>
          <q-space />
        
          <router-link :to="{ path: '/bestbyte'}" style="text-decoration: none">
            <q-btn outline rounded class="text-accent" size="1em" label="About Us" />
          </router-link>

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
