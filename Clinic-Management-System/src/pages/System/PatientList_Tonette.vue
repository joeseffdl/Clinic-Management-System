<template >
  <q-page class="bg-secondary">
    <div class="column items-center justify-center">

      <div class="col-1">
        <div class="row gt-xs" style="margin: 50px 0 50px 50px; width: 500px;">

          <div class="col-10" style="max-width: 400px">
            <q-input v-model="search" filled type="search" clearable clear-icon="mdi-close-circle-outline">
              <template #append>
                <q-icon name="mdi-magnify"/>
              </template>
            </q-input>
          </div>

          <div class="col-2" style="width: 50px; margin: 6px 0 0 20px">
            <q-btn round color="primary" icon="mdi-arrow-right-circle-outline"/>
          </div>
        </div>
      </div>

      <div class="col-1 gt-xs" style="width: 800px">
          <h3 class="float-left" style="margin: -10px 0 10px 50px;">
              Patient List:
          </h3>
      </div>

      <div class="col-8 gt-xs" style="width: 800px">
        <div class="" style="margin: 0 30px 10px 50px;">
          <q-virtual-scroll type="table" style="max-height: 550px" :virtual-scroll-item-size="10" :virtual-scroll-sticky-size-start="10" :virtual-scroll-sticky-size-end="10" :items="heavyList">
            <template #before>
              <thead class="thead-sticky text-left">
                <tr>
                  <th>Index</th>
                  <th v-for="col in columns" :key="'1--' + col.name">
                    {{ col.name }}
                  </th>
               </tr>
              </thead>
            </template>

            <template #default="{ item: row, index }">
              <tr :key="index" >
                
                  <td>{{ index }}</td>

                  <td v-for="col in columns" :key="index + '-' + col.name">
                  
                    {{ row[col.prop] }}
                  
                  </td> 
                
              </tr>
            </template>
          </q-virtual-scroll>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

const rows = [
  {
    name: 'Juan Dela Cruz',
    contactnumber: '11111111111',
    procedure: 'Tooth Extraction',
  },
  {
    name: 'Maria Santos',
    contactnumber: '22222222222',
    procedure: 'Check-up',
  },
  {
    name: 'Pedro De Jesus',
    contactnumber: '33333333333',
    procedure: 'Teeth Cleaning',
  },
]


const columns = [
  { name: 'Patient Name', prop: 'name' },
  { name: 'Contact Number', prop: 'contactnumber' },
  { name: 'Procedure', prop: 'procedure' },
]

const heavyList = []

// adding same data multiple times to
// create a huge list
for (let i = 0; i <= 5; i++) {
  Array.prototype.push.apply(heavyList, rows)
}

export default {
  setup () {
    return {
      search: ref(''),
      heavyList,
      columns
    }
  },
}
</script>

<style lang="sass">
.thead-sticky tr > *,
.tfoot-sticky tr > *
  position: sticky
  opacity: 1
  z-index: 1
  background: #0E86D4
  color: white

.thead-sticky tr:last-child > *
  top: 0

.tfoot-sticky tr:first-child > *
  bottom: 0
</style>