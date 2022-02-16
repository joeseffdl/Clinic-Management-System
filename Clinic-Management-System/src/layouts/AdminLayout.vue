<template>
  <q-layout view="hHh LpR fFf">
    <q-header >
      <q-toolbar id="toolbar" class="bg-secondary">
        <q-item dense :to="{ name: 'Index' }">
          <div class="text-h5 text-white">
            <q-img
              src="icons\logo_white.png"
              alt="Best Byte Logo"
              style="width: 2em; height: 2em"
            />
          </div>
        </q-item>
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
        <q-toolbar class="bg-secondary text-black">
          <q-space/>&copy; Snow Squirrel 2021<q-space/>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<style scoped>
#toolbar {
  padding: 1.75em 1em;
}
</style>
