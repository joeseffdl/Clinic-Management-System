<template>
  <q-page class="bg-secondary">
    <div class="column items-center justify-center">
      <div class="q-pa-md" style="min-width: 350px">
        <div class="absolute-center">
          <q-table
            title="Patients List"
            :rows="allClients"
            :columns="columns"
            :filter="filter"
            no-data-label="I didn't find anything for you"
            no-results-label="The filter didn't uncover any results"
            row-key="id"
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
                <q-btn flat dense color="red" icon="mdi-delete" @click.stop="remove(props.row)" />
              </q-td>
            </template>

            <template #top-right>
              <q-input v-model="filter" dense debounce="300" placeholder="Search">
                <template #append>
                  <q-icon name="mdi-table-search" />
                </template>
              </q-input>
            </template>

            // eslint-disable-next-line vue/no-template-shadow
            <template #no-data="{ icon, message, filtered }">
              <div class="full-width row flex-center text-warning q-gutter-sm">
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
    <!--  -->
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
    sortable: true
  },
  { 
    name: 'actions', 
    label: 'Action' 
  }
]

const rows = [
  
]

export default {
  setup () {
    return {
      columns,
      rows,
      filter: ref('')
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
    }
  },
};
</script>

