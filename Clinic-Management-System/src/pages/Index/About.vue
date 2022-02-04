<template>
  <q-page class="bg-secondary">
    <section style="background: linear-gradient(#0E86D4,#0E86D4,#0E86D4,#DAF3FF)">
      <div class="row full-height justify-center">
        <div id="about-section" class="col self-center text-white text-center">
          <div>
            <h5>About Best <span class="text-secondary">Byte</span></h5>
          </div>
          <div>
            <h2>To help you schedule and manage your patients with ease</h2>
          </div>
          <div>
            <h4> {{ lorem }}</h4>
          </div>
        </div>
      </div>
    </section>

    <section id="about-section-2">
      <div class="column fit justify-center text-center">
        <div class="row justify-center">
          <div id="about-section-2-div" class="col">
            <h1>
              <q-img
                src="icons\logo_black.png"
                alt="Best Byte Logo"
                style="width: 2em; height: 2em"
              />
              Best <span class="text-primary">Byte</span>
            </h1>
            <h4>
            <strong>Lorem Ipsum.</strong> 
            Etiam maximus elit posuere, posuere neque vitae, consectetur ex.
            Sed mollis mauris ultrices ligula tempor, non accumsan nisi rutrum.
            </h4>
          </div>
        </div>
      </div>
    </section>

    <section id="about-section-3-4" class="column" >
      <div class="row fit justify-end">  
        <div class="col-12 col-md-5 self-center">
          <div id="behind-name-section" class="row justify-start">
            <h3>Behind the <span class="text-primary">name</span></h3>
            <div id="section-3-4-p">
              <p>{{ lorem }}</p>
              <br/>
              <p>{{ lorem }}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6" >
          <div class="row gt-sm fit items-center justify-center">
            <q-img 
              src="images\Tooth_3.jpg"
              alt="Tooth Image"
              height="70vh"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="about-section-4">
      <div class="row reverse-wrap fit">
        <div class="col-12 col-md-6">
          <div class="row gt-sm full-height items-center justify-center">
            <q-img 
              src="images\Tooth_2.jpg"
              alt="Tooth Image"
              height="70vh"
              width="100%"
            />
          </div>
        </div>
        <div class="col-12 col-md-6 self-center">
          <div id="behind-name-section" class="row text-justify justify-end">
            <h3>When it <span class="text-primary">started</span></h3>
            <div id="section-3-4-p">
              <p>{{ lorem }}</p>
              <br/>
              <p>{{ lorem }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about-section-5" style="background: linear-gradient(#0E86D4,#DAF3FF,#DAF3FF,#0E86D4)">
      <div class="column fit justify-center text-center">
        <div class="row justify-center">
          <div id="about-section-5-div" class="col">
            <h1>
              Best <span class="text-primary">Byte</span>
            </h1>
            <h4>
              Quisque pharetra dapibus bibendum. 
              Integer ullamcorper nisl id pellentesque laoreet.
            </h4>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    // const url = ref('https://picsum.photos/')
    const lorem = ref('Etiam maximus elit posuere, posuere neque vitae, consectetur ex. Sed mollis mauris ultrices ligula tempor, non accumsan nisi rutrum. Donec consectetur arcu sit amet pellentesque accumsan. Aenean dignissim, ipsum feugiat convallis rutrum, tellus eros facilisis velit, et volutpat nibh elit vel felis. Suspendisse quis ultricies leo, vitae pharetra sapien.')
  
    return {
      lorem,
      // url, 
      // refresh () {
      //   url.value = 'https://picsum.photos/' + Math.random()
      // },
    }
    
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
  height: 80vh;
}

#about-section-3-4 {
  height: 100vh;
}

/* Section 1 */
#about-section > * {
  margin: 1em ;
}

#about-section > div > h2 {
  font-size: 2rem;
}

#about-section > div > h4 {
  font-size: 1rem;
  padding: 0 2em;
}

#about-section > div > h5 {
  font-size: 1.25rem;
}

@media (min-width:40em){
  #about-section > * {
    margin: 1em ;
  }

  #about-section > div > h2 {
  font-size: 2.5rem;
  }

  #about-section > div > h4 {
    font-size: 1.15rem;
    padding: 0 1.15em;
  }

  #about-section > div > h5 {
  font-size: 1.35rem;
  }
}

@media (min-width:60em){
  #about-section > * {
    margin: 2em ;
  }

  #about-section > div > h2 {
  font-size: 3rem;
  }

  #about-section > div > h4 {
    font-size: 1.5rem;
    padding: 0 1.5em;
  }

  #about-section > div > h5 {
  font-size: 1.5rem;
  }
}

@media (min-width: 80em){
  #about-section > div > h4 {
    padding: 0 5.5em;
  }
}

/* Section 2 */
#about-section-2 {
  height: 60vh;
}

#about-section-2-div > h1 {
    font-size: 4rem;
}
#about-section-2-div > h4 {
    font-size: 1rem;
    padding: 0 1em;
}

@media (min-width: 40em){
  #about-section-2-div > h1 {
    font-size: 5rem;
  }
#about-section-2-div > h4 {
    font-size: 1.5rem;
    padding: 0 2em;
  }
}

@media (min-width: 60em){
  #about-section-2-div > h1 {
    font-size: 6rem;
  }
#about-section-2-div > h4 {
    font-size: 2rem;
    padding: 0 4em;
  }
}

@media (min-width: 80em){
  #about-section-2-div > h4 {
    padding: 0 10em;
  }
}

/* Section 3 - 4 */


#behind-name-section {
  margin-top: 1em;
  padding: 0 5em;
  overflow: hidden;
}

#section-3-4-p {
  padding: 2em 0;
}

@media (min-width: 64em){
  #behind-name-section {
  padding: 0 3em;
  }

  #section-3-4-p {
  padding: 1em 0em;
  }
}

@media (min-width: 80em){
  #behind-name-section {
  padding: 0em 3em;
  font-size: 1rem;
  }

  #section-3-4-p {
  padding: 2em 0;
  font-size: 1rem;
  }
}

/* Section 5 */
#about-section-5 {
  height: 80vh;
}

#about-section-5-div > h1 {
    font-size: 4rem;
}
#about-section-5-div > h4 {
    font-size: 1rem;
    padding: 0 1em;
}

@media (min-width: 40em){
  #about-section-5-div > h1 {
    font-size: 5rem;
  }
#about-section-5-div > h4 {
    font-size: 1.5rem;
    padding: 0 2em;
  }
}

@media (min-width: 60em){
  #about-section-5-div > h1 {
    font-size: 6rem;
  }
#about-section-5-div > h4 {
    font-size: 2rem;
    padding: 0 4em;
  }
}

@media (min-width: 80em){
  #about-section-5-div > h4 {
    padding: 1em 10em;
  }
}
</style>