<template>
  <q-page class="bg-secondary">
    
    <!-- Section 1 -->
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

    <!-- Section 2 -->
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

    <!-- Section 3 -->
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

    <!-- Section 4 -->
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
 
    <!-- Section 5 -->
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

    <!-- Section 6 -->
    <section id="about-section-6" class="row justify-center">
      <div class="row items-center justify-center" style="width: 100%;">
        <h3>
          Meet the <span class="text-primary">Team</span>!
        </h3>
      </div>
      <div class="col-12 col-sm-10 col-md-5">
        <div class="about-section-6-div fit column items-center justify-center">
          <div class="image row">
            <q-avatar size="200px">
              <img src="images\Rosero.jpg" fit="scale-down">
            </q-avatar>
          </div>
          <div class="desc text-center">
            <div class="row">
              <h4 class="text-bold">
                Rosero, Ann Catherine 
              </h4>
            </div> 
            <p>Project Manager / Back-End Developer</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-10 col-md-5">
        <div class="about-section-6-div-2 fit column items-center justify-center">
          <div class="image row">
            <q-avatar size="200px">
              <img src="images\De Leon.jpg" fit="scale-down">
            </q-avatar>
          </div>
          <div class="desc text-center">
            <div class="row">
              <h4 class="text-bold">
                De Leon, Joseph 
              </h4>
            </div> 
            <p>Lead Front-End Developer</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-10 col-md-5">
        <div class="about-section-6-div fit column items-center justify-center">
          <div class="image row">
            <q-avatar size="200px">
              <img src="images\Canarejo.jpg" fit="contain">
            </q-avatar>
          </div>
          <div class="desc text-center">
            <div class="row">
              <h4 class="text-bold">
                Cañarejo, Elijah
              </h4>
            </div> 
            <p>Lead Back-End Developer</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-10 col-md-5">
        <div class="about-section-6-div-2 fit column items-center justify-center">
          <div class="image row">
            <q-avatar size="200px">
              <img src="images\Guillermo.jpg" fit="scale-down">
            </q-avatar>
          </div>
          <div class="desc text-center">
            <div class="row">
              <h4 class="text-bold">
                Guillermo, Antoinette 
              </h4>
            </div> 
            <p>Quality Assurance / Front-End Developer</p>
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

/* Section 6 */
.image {
  filter: grayscale(1);
}

.image:hover {
  filter: grayscale(0);
}

#about-section-6 {
  height: 260vh;
  
}

@media (min-width:37.5em){
  .about-section-6-div {
    display: grid;
    grid-template: 
    'image desc';
    column-gap: 5em;
  }

  .about-section-6-div-2 {
    display: grid;
    grid-template: 
    'desc image';
    column-gap: 5em;
  }

  .image {
    grid-area: image;
  }

  .desc {
    grid-area: desc;
  }

  .about-section-6-div > .desc ,
  .about-section-6-div-2 > .desc {
    width: 20em;
    
  }
}

@media (min-width:64em){
  #about-section-6 {
  height: 120vh;  
  }

  .about-section-6-div {
    display: grid;
    grid-template: 
    'image desc .';
  }

  .about-section-6-div-2 {
    display: grid;
    grid-template: 
    '. image desc'; 
  }
}




/* @media (min-width:37.5em){
  #about-section-6 {
  height: 150vh;  
  }

  .about-section-6-div {
    display: grid;
    grid-template: 
    'image ... desc';
    border: 1px solid red;
  }

  .about-section-6-div-2 {
    display: grid;
    border: 1px solid red;
    grid-template: 
    'desc ... image';
  }

  .image {
    grid-area: image;

  }

  .desc {
    grid-area: desc;
  }

  .about-section-6-div > * ,
  .about-section-6-div-2 > * {
    border: 1px solid blue;
    width: 22.5em;
    
  }

  

  
} */

/* @media (min-width:64em){
  .about-section-6-div {
    display: grid;
    grid-template: 
    'image'
    'desc';
  }

  .image {
    grid-area: image;
  }

  .desc {
    grid-area: desc;
  }

  .about-section-6-div > * > * {
    border: 1px solid red;
    height: 100%;
    margin: 0 .15em;
    white-space: nowrap;
  }
} */
</style>