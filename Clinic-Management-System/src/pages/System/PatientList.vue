<template>
  <q-page class="bg-secondary">
    <div class="column items-center justify-center">
      <div class="q-pa-md" style="min-width: 350px">
        <div class="absolute-center">
          <q-table
            :rows="allClients"
            :columns="columns"
            :filter="filter"
            no-data-label="I didn't find anything for you"
            no-results-label="The filter didn't uncover any results"
            row-key="id"
            card-class="bg-accent text-primary"
          >

            <template #body-cell="props">
              <q-td :props="props">
                  <router-link :to="{ 
                    name: 'PatientDetails', 
                    params: { 
                      name: props.value}}" 
                    style="text-decoration: none;" >   
                    <tr>
                      {{props.value}}   
                    </tr>
                  </router-link>
              </q-td>
            </template>

            <template #body-cell-actions="props">
              <q-td :props="props">
                <q-btn flat dense color="secondary" icon="mdi-eye" @click.stop="view(props.row)" />
                <q-btn flat dense color="red" icon="mdi-delete" @click.stop="remove(props.row)" />
              </q-td>
            </template>

            <template #top-left >
              <q-input v-model="filter" dense debounce="300" placeholder="Search">
                <template #append>
                  <q-icon color="primary" name="mdi-table-search" />
                </template>
              </q-input>
            </template>

            <template #top-right>
              <q-btn
                class="text-accent"
                color="black"
                icon-right="mdi-plus"
                dense
                :to=" { name: 'Add'}"
              />
            </template>

            // eslint-disable-next-line vue/no-template-shadow
            <template #no-data="{ icon, message, filtered }">
              <div class="full-width row flex-center q-gutter-sm">
                <q-icon size="2em" name="mdi-emoticon-dead" />
                <span>
                  Well this is sad... {{ message }}
                </span>
                <q-icon size="2em" :name="filtered ? 'mdi-filter' : icon" />
              </div>
            </template>
          </q-table>
        
        </div>
      </div>
    </div>
    <!-- Dialog -->
    <q-dialog
      v-model="viewToggle">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="q-px-lg">
          <q-list>
            <div v-for="(value, props) in allClients" :key="props">
              <!-- <q-item v-if="props"> -->
                <span class="text-bold">{{props}}:</span>&nbsp;<span>{{value}} </span>       
              <!-- </q-item> -->
            </div>
          </q-list>
        </q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn v-close-popup flat label="OK" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>

import { ref } from 'vue'
import { mapActions, mapGetters } from 'vuex'


const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true,
    style: 'max-width: 100px',
    headerClasses: 'bg-dark text-secondary',
    headerStyle: 'max-width: 100px'
  },
  { 
    name: 'actions', 
    label: 'Action',
    align: 'center',
    style: 'max-width: 50px',
    headerClasses: 'bg-dark text-secondary',
    headerStyle: 'max-width: 50px'
  }
]

const rows = [
  
]

export default {
  setup () {
    return {
      columns,
      rows,
      filter: ref(''),
      viewToggle: ref(true),
    }
  },
  computed: {   
    ...mapGetters('module_a', ['allClients'])
  },
  methods: {
    ...mapActions('module_a', ['removeClient']),
    remove(props) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure to Delete this user?',
        ok: {
         push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.removeClient(props)
      })
    },
    view(props) {
      allClients.value = props
      this.viewToggle = true
    }
  },
};
</script>

