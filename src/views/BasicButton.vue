<template>
  <v-theme-provider light>
    <v-container class="sample-page pa-0" :class="{ overlay: affected }">
      <v-toolbar
          class="px-6 mb-4"
          flat
          :height="150"
          text
      >
        <v-img class="basic-logo" src="/basic_logo.png"></v-img>
        <v-spacer></v-spacer>

        <v-text-field
            class="search-input mt-7 mr-4"
            label="Search"
            solo
            flat
            dense
        >
          <template v-slot:append>
            <v-icon color="white">{{ mdiMagnify }}</v-icon>
          </template>
        </v-text-field>

        <div id="login"></div>
      </v-toolbar>
      <v-row class="px-3">
        <v-col
            cols="3"
        >
          <v-list dense>
            <v-list-item
                class="px-8 py-0 mt-2"
            >
              <v-list-item-content>
                <v-list-item-title class="mb-2">KnowledgeWIKI</v-list-item-title>
                <v-list-item>
                  <v-list-item-content class="inner-content">
                    <a href="#">Wiki sign</a>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="inner-content">
                    <a href="#">Box</a>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="inner-content">
                    <a href="#">DNS</a>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="inner-content">
                    <a href="#">LNS</a>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="inner-content">
                    <a href="#">Drive</a>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="inner-content">
                    <a href="#">Play</a>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content class="inner-content">
                    <a href="#">TCS</a>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
            cols="6"
        >
          <v-row>
            <v-col>
              <v-banner
                  class="pl-0 pr-4 py-2"
                  color="primary"
              >
                <h3>KnowledgeWIKI Support</h3>
                <br>
                <p>On the following pages, you will find information on the different levels of integration available to service providers.</p>
              </v-banner>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card
                  class="mx-auto"
                  max-width="344"
                  outlined
                  flat
              >

                <v-card-title>Card Title</v-card-title>

                <v-card-text class="pt-4 px-2 pb-0">
                  <p class="text--black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card
                  class="mx-auto"
                  max-width="344"
                  outlined
                  flat
              >

                <v-card-title>Card Title</v-card-title>

                <v-card-text class="pt-4 px-2 pb-0">
                  <p class="text--black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col
            cols="3"
        >
          <p class="mb-0 mt-3">Important Links</p>
          <a href="#">https://knowledgewiki.policy</a>
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
import { mdiMagnify } from '@mdi/js';

export default {
  name: 'BasicLink',
  props: {
    affected: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    mdiMagnify: mdiMagnify
  }),
  mounted() {
    const setButton = () => {
      window.thiss.DiscoveryComponent({
        loginInitiatorURL: 'https://demo.seamlessaccess.org/Shibboleth.sso/Login?target=https://google.com',
      }).render('#login');
    }
    let cta = document.createElement('script')
    cta.setAttribute('src', 'https://use.thiss.io/thiss.js')
    document.head.appendChild(cta)

    if (window.thiss) {
      setButton()
    } else {
      let handle = setInterval(() => {
        if (window.thiss) {
          setButton()
          clearInterval(handle);
          handle = 0;
        }
      }, 500);
    }

  }
}

</script>

<style lang="scss">
.sample-page {
  font-family: "Courier", sans-serif;
  background: white;
  color: black;

  #login {
    margin-top: 27px;
  }

  h3 {
    font-size: 16px !important;
    line-height: 16px !important;
    font-weight: normal !important;
  }

  p {
    font-size: 14px !important;
    line-height: 16px !important;
    font-weight: normal !important;
  }

  a {
    color: black !important;
    font-size: 12px !important;
    text-decoration: none !important;
  }

  a:hover {
    text-decoration: underline !important;
  }

  header {
    border-bottom: 2px solid rgba(112,112,112,1) !important;

    button {
      font-size: 14px !important;
    }
  }

  .v-banner {
    max-width: 75%;
    margin: 0 auto;
    color: white !important;
    background: rgba(112,112,112,1) !important;
  }

  .v-card__title {
    background: #c3c3c3 !important;
    text-transform: uppercase !important;
    font-size: 14px !important;
    padding: 0 8px !important;
    color: black;
  }

  .v-sheet.v-card {
    border-radius: 0 !important;
    border-color: #c3c3c3 !important;
  }

  .basic-logo {
    min-width: 85px !important;
    max-width: 85px !important;
    width: 85px !important;
  }

  .search-input {
    flex: 0 0 auto !important;
    font-size: 14px !important;
  }

  .search-input .v-input__slot{
    background: rgba(112,112,112,1) !important;
    color:white;
    width: 200px;
    font-size: 14px !important;
    max-width: 200px;
    min-width: 200px;
    padding-top: 15px !important;
    padding-bottom: 15px !important;

    label, input {
      color: white !important;
      font-size: 14px !important;
    }
  }

  .v-list-item__title {
    font-size: 14px !important;
  }

  .v-list-item__content {
    padding: 0 0 7px 0 !important;

    a {
      color: black !important;
    }
  }
}
</style>
