<template>
  <v-theme-provider light>
    <v-container class="sample-page pa-0" :class="{ overlay: affected }">
      <v-toolbar
          class="px-2"
          :height="86"
          flat
          text
      >

        <span class="logo">Dominico-Chase Publishing</span>

        <v-spacer></v-spacer>
        <v-text-field
            class="search-input mt-8 mr-4"
            label="Search"
            solo
            flat
            dense
        >
          <template v-slot:append>
            <v-icon color="black">{{ mdiMagnify }}</v-icon>
          </template>
        </v-text-field>

        <v-spacer></v-spacer>

        <v-btn
            flat
            text
            :ripple="false"
            class="login-button"
        >
          Login / Register
        </v-btn>
      </v-toolbar>
      <v-toolbar class="sub-toolbar" :height="46" color="#600a6a" flat>
        <v-btn
            :ripple="false"
            text
        >
          Journals
        </v-btn>
        <v-btn
            :ripple="false"
            text
        >
          Events
        </v-btn>
        <v-btn
            :ripple="false"
            text
        >
          Collections
        </v-btn>
      </v-toolbar>
      <v-row class="px-6">
        <v-col
            cols="6"
        >
          <h3 class="pt-6 pb-3">What Crowdsourcing Offers Psychological Science</h3>
          <p><a href="#">Kelly Cuccolo</a>, <a href="#">Megan S. Irgens</a>, <a href="#">Martha S. Zlokovich</a></p>

          <legend>Published: 1 September, 2020 | <a href="#">https://doui.org/56.46/qpcu.6445</a> | Citations: 45</legend>

          <h3 class="py-3">Abstract</h3>
          <p>Although the benefits of crowdsourcing research models have been outlined elsewhere, very little attention has been paid to the application of these models to cross-cultural behavioral research. In this manuscript we explore new variations of</p>

        </v-col>
        <v-col cols="6">
          <div id="login" class="mt-5 ml-4"></div>
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
  font-family: "Libre Franklin", sans-serif;
  background: white;
  color: black;

  h3 {
    font-size: 19px !important;
    line-height: 16px !important;
    font-weight: bold !important;
  }

  legend, p {
    font-size: 14px !important;
    line-height: 18px !important;
    font-weight: normal !important;
  }

  a {
    font-size: 14px !important;
    text-decoration: none !important;
    color: #336905 !important;
    font-weight: normal! important;
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
    color:black;
    border: 1px solid black;
    border-radius: 0px;
    width: 100%;
    font-size: 14px !important;
    max-width: 100%;
    min-width: 100%;

    label, input {
      color: black !important;
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

  .logo {
    font-size: 28px;
    line-height: 80px;
    font-weight: 600;
    width: 390px;
    color: #600a6a;
  }

  .login-button {
    .v-btn__content {
      font-weight: 600 !important;
      font-size: 14px !important;
      color: #600a6a !important;
    }
  }

  .sub-toolbar {
    .v-toolbar__content, .v-toolbar__extension {
      padding: 4px 10px !important;
    }
  }
}
</style>
