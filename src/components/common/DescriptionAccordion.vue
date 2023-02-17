<template>
  <div>
    <v-row>
      <v-col>
        <v-btn
            class="pa-1"
            text
            :ripple="false"
            @click="controlExpansionPanel"
        >
          <v-icon :class='{ "rotate-180": this.panel === 0 }' left>
            {{ mdiChevronDownCircle }}
          </v-icon>
          When to use
        </v-btn>
      </v-col>
      <v-col>
        <affected-elements-toggle v-if="showAffectedToggle" @update="update"></affected-elements-toggle>
      </v-col>
    </v-row>
    <v-expansion-panels
        class="mt-3"
        v-model="panel"
    >
      <v-expansion-panel
        :key="0"
      >
        <v-expansion-panel-content class="pa-6 black--text" v-html="text"></v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mdiChevronDownCircle } from '@mdi/js';
import AffectedElementsToggle from "./AffectedElementsToggle";

export default {
  name: 'DescriptionAccordion',
  components: {AffectedElementsToggle},
  data: () => ({
    checkbox: false,
    panel: null,
    opened: false,
    mdiChevronDownCircle: mdiChevronDownCircle,
  }),
  computed: {
    showAffectedToggle() {
      if (this.$route.path !== '/example-integrations') {
        return true
      } else {
        return false
      }
    },
    text() {
      let text = ''

      switch(this.$route.path) {
        case '/':
          text = '<p class="mb-0">' +
              '    <strong>Limited integration</strong> is a convenient option for services that want to use SeamlessAccess discovery\n' +
              '    service but have limited abilities to change existing login button or link.<br><br>If you cannot customise an\n' +
              '    existing login link, that is fine. All you need to do is to <a target="_blank" href="">point it to SeamlessAccess\n' +
              '    discovery service</a>.<br><br><strong>Check out this demo</strong> to experience user login to a website that\n' +
              '    implements <strong>SeamlessAccess discovery service behind an existing login link</strong>.' +
              '</p>'
          break
        case '/basic-button':
          text = '<p class="mb-0">' +
              '    <strong>Limited integration</strong> is a convenient option for services that want to use SeamlessAccess discovery service but have limited abilities to change existing login button or link.\n' +
              '    <br><br>\n' +
              '    If you can replace the login button, we recommend using the <a target="_blank" href="">SeamlessAccess static\n' +
              '    button</a>. This will not be a fully functional SeamlessAccess button like in Standard integration, but has the benefit of using the same visual cue. All you need to do then is to\n' +
              '    <a target="_blank" href="">point it to the SeamlessAccess discovery service</a>!\n' +
              '    <br><br>\n' +
              '    <strong>Check out this demo</strong> to experience user login to a website that implements <strong>SeamlessAccess discovery service behind\n' +
              '    an SeamlessAccess static button</strong>.\n' +
              '</p>'
          break
        case '/seamlessaccess-button':
          text = '<p class="mb-0">\n' +
              '    <strong>Standard integration</strong> is a perfect choice for services that want to use SeamlessAccess discovery\n' +
              '    service and have the ability to <a target="_blank" href="">integrate the SeamlessAccess button</a> within the site.\n' +
              '    The button makes users one-click away from their institution login page, as it can show a previously chosen\n' +
              '    institution.<br><br><strong>Check out this demo</strong> to experience logging in to a website that implements the\n' +
              '    standard SeamlessAccess button. If you have used a SeamlessAccess-enabled site before, the button may already show a\n' +
              '    previously used institution.\n' +
              '</p>'
          break
        case '/custom-seamlessaccess-button':
          text = '<p class="mb-0">\n' +
              '    <strong>Standard integration</strong> is a perfect choice for services that want to use SeamlessAccess discovery\n' +
              '    service and have the ability to <a target="_blank" href="">integrate the SeamlessAccess button</a> within the site.\n' +
              '    The button makes users one-click away from their institution login page, as it can show a previously chosen\n' +
              '    institution.<br><br>You can also <a target="_blank" href="">customise the color of the SeamlessAccess button</a> to\n' +
              '    match the color scheme of your site.<br><br><strong>Check out this demo</strong> to experience logging in to a\n' +
              '    website that implements the <strong>SeamlessAccess button customised to match the color scheme of the site</strong>.\n' +
              '    If you have used a SeamlessAccess-enabled site before, the button may already show a previously used institution.\n' +
              '</p>'
          break
        case '/custom-link':
          text = '<p class="mb-0">' +
              '    <strong>Limited integration</strong> is a convenient option for services that want to use SeamlessAccess discovery\n' +
              '    service but have limited abilities to change existing login button or link.<br><br>If login link text can be\n' +
              '    customised, we suggest using “<a target="_blank" href="">Access through your institution</a>” and then <a target="_blank" href="">point it to the SeamlessAccess discovery service</a>!<br><br><strong>Check out this\n' +
              '    demo</strong> to experience user login to a website that implements <strong>SeamlessAccess discovery service behind\n' +
              '    an existing login link, customised with our recognisable text</strong>.\n' +
              '</p>'
          break
        case '/example-integrations':
          text = '<p class="mb-0">\n' +
              '    <strong>Advanced integration</strong> using the <a target="_blank" href="">SeamlessAccess API</a> is for those who are unable to use the SeamlessAccess discovery service and may require additional control over the user experience than offered by the Standard SeamlessAccess button. However, best practice <a target="_blank" href="">guidelines for presenting</a> the button must still be followed.<br><br><strong>Check out some sample sites</strong> who have implemented the Advanced integration.\n' +
              '</p>'
          break
      }

      return text
    }
  },
  methods: {
    update(value) {
      this.$emit('update', value)
    },
    controlExpansionPanel() {
      if (this.panel !== 0) {
        this.panel = 0
      } else {
        this.panel = null
      }
    }
  },
}
</script>

<style scoped>
  .rotate-180 {
    transform: rotate(180deg);
  }

  .v-expansion-panel-content__wrap {
    padding: 0 !important;
  }

  .v-expansion-panel {
    background: white !important;
    border-radius: 12px !important;
  }

  .v-expansion-panel--active {
    margin-bottom: 40px !important;
  }
</style>
