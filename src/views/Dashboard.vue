<template>
  <v-main class="pt-0 fill-height">
    <v-container class="pa-0" fluid fill-height>
      <v-layout child-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  components: {},
  data: () => ({
    dialog: false,
    dialogDelete: false,
    search: '',
    messageTypes: [],
    expanded: [],
    metrics: [],
    colors: ['#0D2E41', '#00798A', '#F8AF2C', '#C27691', '#D9734E', '#E09C4C', '#87D4F5', '#E09C4C'],
    headers: [
      { text: '', value: 'data-table-expand' },
      {
        text: 'First Name',
        align: 'start',
        sortable: true,
        value: 'first_name',
      },
      {
        text: 'Last Name',
        align: 'start',
        sortable: true,
        value: 'last_name',
      },
      {
        text: 'Email',
        align: 'start',
        width: 150,
        sortable: true,
        value: 'email',
      },
      {
        text: 'Monthly Responses',
        align: 'center',
        width: 120,
        sortable: true,
        value: 'number_of_responses',
      },
      {
        text: 'Last Response',
        align: 'center',
        width: 140,
        sortable: true,
        value: 'last_response',
      },
      {
        text: 'Phone Number',
        align: 'start',
        sortable: true,
        value: 'phone',
      },
      {
        text: 'Patient Status',
        align: 'center',
        sortable: true,
        value: 'patient_status',
      },
      {
        text: 'Notification Status',
        align: 'center',
        sortable: true,
        value: 'notification_status',
      },
      {
        text: 'Metrics',
        align: 'center',
        sortable: true,
        value: 'metrics',
      },
      { text: 'Actions', align: 'center', value: 'actions', sortable: false },
    ],
    items: [],
    defaultItem: {
      phone: '',
      email: '',
      patient_status: '',
      notification_status: '',
      metrics: [],
      index: 0
    },
  }),
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.close()
    },
  },
  async created () {
  },

  methods: {
    ...mapActions(['fetchAllPatients', 'fetchMessageTypes', 'fetchPatientData', 'fetchUserSettings']),
    async initialize () {
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    addPatient (patient) {
      this.items.unshift(patient)
    },
  },
}
</script>

<style>
  .no-uppercase {
    text-transform: none !important;
    text-transform: unset !important;
  }
  v-data-table>.v-data-table__wrapper>table>tbody>tr>td, .v-data-table>.v-data-table__wrapper>table>tfoot>tr>td, .v-data-table>.v-data-table__wrapper>table>thead>tr>td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
