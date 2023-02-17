<template>
  <v-app :style="{background: $vuetify.theme.themes['dark'].background}">
    <v-container fluid class="px-fill-height align-start pa-12">
      <v-row>
        <v-col>
          <menu-drawer></menu-drawer>
        </v-col>
        <v-col class="main-content-width px-8">
          <page-title></page-title>
          <description-accordion @update="update"></description-accordion>
          <router-view
              :affected="affected"
          ></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import MenuDrawer from "./components/common/MenuDrawer";
import DescriptionAccordion from "./components/common/DescriptionAccordion";
import PageTitle from "./components/common/PageTitle";
export default {
  name: 'App',
  components: {
    PageTitle,
    DescriptionAccordion,
    MenuDrawer
  },
  data: () => ({
    affected: false
  }),
  methods: {
    update(value) {
      this.affected = value
    },
  }
};
</script>

<style lang="scss">
  @font-face {
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 400;
    src: url('/LibreFranklin-Regular.eot');
    src: local('Libre Franklin'), local('LibreFranklin-Regular'),
    url('/LibreFranklin-Regular.eot?#iefix') format('embedded-opentype'),
    url('/LibreFranklin-Regular.woff2') format('woff2'),
    url('/LibreFranklin-Regular.woff') format('woff'),
    url('/LibreFranklin-Regular.ttf') format('truetype'),
    url('/LibreFranklin-Regular.svg#LibreFranklin') format('svg');
  }

  @font-face {
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 700;
    src: url('/LibreFranklin-Bold.eot');
    src: local('Libre Franklin'), local('LibreFranklin-Bold'),
    url('/LibreFranklin-Bold.eot?#iefix') format('embedded-opentype'),
    url('/LibreFranklin-Bold.woff2') format('woff2'),
    url('/LibreFranklin-Bold.woff') format('woff'),
    url('/LibreFranklin-Bold.ttf') format('truetype'),
    url('/LibreFranklin-Bold.svg#LibreFranklin') format('svg');
  }


  .v-application {
      [class*='text-'] {
        font-family: 'Libre Franklin', sans-serif !important;
      }

      font-family: 'Libre Franklin', sans-serif !important;
    }

  .main-content-width {
    width: calc(100% - 256px);
    min-width: calc(100% - 256px);
    max-width: calc(100% - 256px);
  }

  .v-btn {
    text-transform: none !important;
    letter-spacing: normal !important;
    font-size: 20px !important;
    color: white !important;
  }

  .v-btn:hover, .v-btn:focus, .v-btn:hover::before, .v-btn:focus::before {
    background: transparent !important;
    opacity: 100%;
  }

  .sample-page.overlay *:not(.affected-element):not(#login) {
    color: #C3C3C3 !important;
    background: #C3C3C3 !important;
    border-color: #C3C3C3 !important;
  }

</style>
