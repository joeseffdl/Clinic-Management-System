<template>
  <q-page class="bg-secondary ">
      <!-- First Row -->
      <q-card dark bordered>
        <q-card-section class="bg-accent">
          <div class="row q-mx-auto justify-center" >
            <div class="col-lg-3 col-md-6 col-sm-8 col-xs-12">
              <div class="row justify-center q-my-xl">  
                <div>
                  <q-avatar size="225px" color="primary">
                  {{client.name[0]}}
                  </q-avatar>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 q-my-md">
              <div class="row justify-center text-black q-my-xl"> 
                <div>
                  <h3 class="q-my-lg">Patient</h3>
                  <h5 class="q-my-xs">{{client.name}}</h5>
                  <q-btn class="q-my-lg q-mx-lg full-width" color="secondary" text-color="black" label="A button" />
                </div>
              </div> 
            </div>
            
            <div class="col-lg-6 col-sm-12 col-xs-12 q-my-lg q-px-lg q-gutter-y-md">
              <div class="row q-my-xl text-bold text-black ">
                <div class="col col-sm-4 col-xs-12" >
                  <div>Client since
                    <div class="text-body2">
                      {{client.clientSince}}
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-xs-12" >
                  <div>Sex
                    <div class="text-body2">
                      {{client.sex}}
                      
                    </div>
                  </div>
                </div>
                
                <div class="col col-sm-4 col-xs-12" >
                  <div>Age 
                    <div class="text-body2">
                      {{client.age}}
                    </div>
                  </div>
                </div>
              </div>

              <div class="row q-my-xl text-bold text-black q-gutter-y-md">
                <div class="col col-sm-4 col-xs-12 ">
                  <div>Occupation 
                    <div class="text-body2">
                      {{client.occupation}}
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-xs-12">
                  <div>Mobile No.
                    <div class="text-body2">
                      {{client.mobileNo}}
                    </div>
                  </div>
                </div>

                <div class="col col-sm-4 col-xs-12">
                  <div>Telephone No.
                    <div class="text-body2">
                      {{client.telNo}}
                    </div>
                  </div>
                </div>
              </div>

              <div class="row q-mt-sm justify-center text-bold text-black">
                <div class="col" >
                  <div class="text-center">
                    Home Address: 
                    <div class="text-body2">
                      {{client.address}}
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card> 
      <!-- Second Row -->
      <div class="row q-my-xl" >
        <div class="col" >
          <q-card dark bordered>
            <q-card-section class="bg-accent">
              <div class="row text-center text-black q-gutter-y-md">  
                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                  <h6>
                    Date and Time
                    <div class="text-body2">
                      {{client.recentSchedule}}
                    </div>
                  </h6>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12" >
                  <h6>
                    Procedure
                    <div class="text-body2">
                      {{client.procedure}}
                    </div>
                  </h6>
                </div>

                <div class="col-lg-6 col-12 col-xs-12" >
                  <h6>
                    Diagnosis
                    <div class="text-body2">
                      {{client.diagnosis}}
                    </div>
                  </h6>
                </div>
              </div>  
            </q-card-section>
          </q-card>
        </div>
    
      </div>
  </q-page>
</template>

<script>

export default {
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'client',
  ],
};
</script>

