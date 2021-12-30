<template>

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
  
</template>

<script>

export default {
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'client',
  ],
};
</script>