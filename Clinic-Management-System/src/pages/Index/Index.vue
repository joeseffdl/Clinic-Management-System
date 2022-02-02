<template>
  <q-page class="bg-accent" style="font-family: Source Sans Pro">
    <div class="container">
      <!-- Section 1 -->
      <section class="section-1">
        <q-img 
          v-for="mode in fitModes" 
          :key="mode"
          src="images\Dental_chair_2.jpg" :fit="mode" 
          class="fit"
        >
        <template #loading>
          <q-spinner-gears color="secondary" />
        </template>
          <div class="row absolute-full items-center">
            <div class="col section-col-1 text-white">
              <div class="row justify-center">
                <h1>Have a bite with Best&nbsp;<span class="text-accent">Byte</span></h1>
              </div>
              <div class="row justify-center">
                <h3>‘‘You’re never fully dressed without a smile’’</h3>         
              </div>
              <div class="row justify-center">
                <h4> -Martin Charnin</h4>           
              </div>
            </div>
          </div>
        </q-img>
      </section>
        
      <!-- Section 2 -->
      <section class="bg-white section-2 row ">
        <div class="col">
          <div class="row justify-start">
            <h1 class="text-primary">Schedule Appointments<br/><span class="text-black">Now</span></h1>
          </div>
          <div class="row justify-start">
            <h4 >
              Best Byte help dentists to schedule with 
              ease and manage their patients in one application.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Donec in ultricies justo, et auctor est. Cras augue diam, 
              interdum ut tellus eget, efficitur aliquam urna. 
              Aenean sed eleifend mi, nec iaculis leo. Nulla facilisi. 
              
            </h4>            
          </div>
          <div class="row justify-start">
            <h4>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </h4>            
          </div>
        </div>
      </section>

      <!-- Section 3 -->
      <section class="section-3 row justify-center">
        <div class="col">
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            :autoplay="3500"
            infinite
            control-color="white"
            navigation
            padding
            arrows
            height="100%"
            class="carousel bg-accent text-white shadow-1 rounded-borders"
          >
            <template #navigation-icon="{ active, btnProps, onClick }">
              <q-btn v-if="active" size="lg" icon="mdi-tooth" color="secondary" flat round dense @click="onClick" />
              <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
            </template>

            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <q-icon name="mdi-apple" size="128px" />
              <h3 class="text-center">
                {{ lorem }}
              </h3>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <q-icon name="mdi-google" size="128px" />
              <h3 class="text-center">
                {{ lorem }}
              </h3>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <q-icon name="mdi-microsoft" size="128px" />
              <h3 class="text-center">
                {{ lorem }}
              </h3>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <q-icon name="mdi-facebook" size="128px" />
              <h3 class="text-center">
                {{ lorem }}
              </h3>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </section>

      <!-- Section 4 -->
      <section class="section-4">
        <q-img 
          v-for="mode in fitModes" 
          :key="mode"
          src="images\Dental_chair_1.jpg" :fit="mode" 
          class="fit"
        >
        <template #loading>
          <q-spinner-gears color="secondary" />
        </template>
          <div class="row absolute-full items-center">
            <div class="col section-col-1 text-white">
              <div class="row justify-center">
                <h1 class="text-center"><span class="text-secondary">Start</span> now <span class="text-secondary">@</span> Best&nbsp;<span class="text-secondary">Byte</span>!</h1>
              </div>
              <div class="row justify-center">
                <q-btn 
                color="primary"
                size="1.35em" 
                glossy 
                :to="{ name: 'SignUp' }" 
                icon-right="mdi-tooth" 
                label="Click Here!"
                style="padding: 0.5em" />         
              </div>
              
            </div>
          </div>
        </q-img>
      </section>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      fitModes: ['cover' ],
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',    }
  }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section { 
  height: 100vh;
}

h1 { 
  font-weight: bold;
}

/* Section 1 */
.section-1 {
  text-align: center;
}

.section-col-1 > * {
  margin: 20px 0;
}

/* Section 2 */
.section-2 {
  padding: 4em 2em;
}
.section-2 > div > div > h1{
  font-size: 2.5rem;
}
.section-2 > div > div > h4 {
  margin-top: 1.5em;
  font-size: 1.5rem;
}

@media (min-width: 40rem) {
  .section-2{
    padding: 6em;
  }
  .section-2 > div > div > h1{
    font-size: 3rem;
  }
  .section-2 > div > div > h4 {
    margin-top: 1.75em;
    font-size: 1.75rem;
  }
}

@media (min-width: 60rem) {
  .section-2{
    padding: 8em 6em;
  }
  .section-2 > div > div > h1{
    font-size: 4.5rem;
  }
  .section-2 > div > div > h4 {
    margin-top: 2.5em;
    font-size: 2rem;
  }
}

</style>