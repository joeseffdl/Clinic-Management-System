<template>
  <q-layout view="lHh Lpr lFf" class="bg-secondary">
    <q-header reveal elevated>
      <q-toolbar class="row glossy bg-primary items-center justify-center">
        <div class="col">
          <q-btn
            outline
            rounded
            style="width: 105px"
            color="secondary"
            label="Back"
            icon="mdi-arrow-left"
          />
        </div>
        <q-toolbar-title class="col" style="padding: 0.25em">
          Settings
        </q-toolbar-title>
        <div class="text-h5">
          Best<span class="text-accent">Byte</span>
          <q-img
            src="icons\logo_white.png"
            alt="company logo"
            style="width: 2em; height: 2em"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated>
      <q-toolbar class="glossy bg-primary">
        <q-space />&copy; Snow Squirrel 2021<q-space />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
