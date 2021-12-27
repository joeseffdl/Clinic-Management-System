<template>
  <q-page class="bg-secondary ">
    <div class="row fullscreen text-center items-center q-pb-xl">
      <div class="col-6 gt-md self-center">
        <div class="col self-center text-h1 " style="max-width:750px;margin:auto;">Welcome to<br> Best Byte!</div>
        <q-btn :to="{name: 'About'}" outline  class="text-primary q-mt-lg" size="1.5rem" label="About Us" />

      </div>

      <div class="col-6 q-gutter-xl self-center " style="width: 750px;margin: 0 auto 0 auto;" >
        <div class=" items-center text-h2 q-mr-xl" >Login as:</div>
        
          <q-btn 
            :to=" { name: 'Guest'}"
            class="q-mr-xl"
            outline
            style="color: goldenrod;"
            icon="mdi-account"
            label="Guest"
            size="3em"
          />
        
          <q-btn
            :to="{ name: 'Admin'}"
            outline
            style="color: black;"
            icon="mdi-code-tags"
            label="Admin"
            size="3em"
          />

        <router-link :to=" { name: 'SignUp'}" >
          <div class="text-h6 q-my-md">New here? Sign Up now!</div>
        </router-link>
      </div>
    </div>
  </q-page>
</template>

