<template>
  <v-theme-provider light>
    <v-container class="sample-page pa-0" :class="{ overlay: affected }">
      <v-row>
        <v-col>
          <v-list>
            <v-list-item class="pl-0 mb-3">
              Organization
            </v-list-item>
            <v-list-item class="pl-0 mb-3">
              Nature
            </v-list-item>
            <v-list-item class="pl-0 mb-3">
              Wiley Online Library
            </v-list-item>
            <v-list-item class="pl-0 mb-3">
              Emerald
            </v-list-item>
            <v-list-item class="pl-0 mb-3">
              Entity
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list>
            <v-list-item class="pl-0 mb-3">
              Links
            </v-list-item>
            <v-list-item class="pl-0 mb-3">
              <a href="https://www.nature.com/" target="_blank">https://www.nature.com/</a>
            </v-list-item>
            <v-list-item class="pl-0 mb-3">
              <a href="https://onlinelibrary.wiley.com/" target="_blank">https://onlinelibrary.wiley.com/</a>
            </v-list-item>
            <v-list-item class="pl-0 mb-3">
              <a href="https://advanced_integrator_example_link.com" target="_blank">https://advanced_integrator_example_link.com</a>
            </v-list-item>
            <v-list-item class="pl-0 mb-3">
              <a href="https://entityentityentity.edu" target="_blank">https://entityentityentity.edu</a>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<style lang="scss">
  .sample-page {
    a {
      color: white !important;
      text-decoration: none !important;
    }

    a:hover {
      text-decoration: underline !important;
    }
  }

  .theme--light.v-sheet, .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
   background: transparent !important;
   color: white !important;
 }
</style>
