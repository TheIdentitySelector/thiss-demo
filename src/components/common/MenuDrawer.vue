<template>
  <v-navigation-drawer
      class="grey py-4 pl-4"
      absolute
      permanent
      left
  >
    <template v-slot:append>
      <v-list-item two-line style="margin-left: -20px">
        <img class="logo" width="130" src="/logo.svg">
      </v-list-item>
    </template>

    <h2 class="mt-9 text-decoration-underline">Integration Flavors</h2>
    <v-list dense>
      <v-list-item
          class="pa-0 mt-4"
          v-for="item in menu"
          :key="item.title"
      >
        <v-list-item-content>
          <v-list-item-title class="mb-2">{{ item.title }}</v-list-item-title>
          <v-list-item
              v-for="link in item.links"
              :key="link.text"
          >
            <v-list-item-content class="inner-content">
              <a :href="link.link">{{link.text}}</a>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'MenuDrawer',
  components: {},
  data: () => ({
    menu: [
        {
          title: 'Limited Demo',
          links: [
            {
              text: 'Basic link',
              link: '/'
            },
            {
              text: 'Basic Button',
              link: 'basic-button'
            },
            {
              text: 'Custom link',
              link: 'custom-link'
            }
          ]
        },
      {
        title: 'Standard Demo',
        links: [
          {
            text: 'SeamlessAccess Button',
            link: 'seamlessaccess-button'
          },
          {
            text: 'Custom SeamlessAccess Button',
            link: 'custom-seamlessaccess-button'
          }
        ]
      },
      {
        title: 'Advanced Examples',
        links: [
          {
            text: 'Example Integrations',
            link: 'example-integrations'
          }
        ]
      }
    ],
  })
}
</script>

<style>
  h2 {
    font-size: 18px
  }

  .logo {
    width: 130px;
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }

  .v-list-item__title {
    font-size: 16px !important;
  }

  .v-list-item__content > a {
    color: white !important;
    font-size: 12px !important;
    text-decoration: none !important;
  }

  .v-list-item__content > a:active, .v-list-item__content > a:hover {
    text-decoration: underline !important;
  }

  .v-list-item {
    min-height: 100% !important;
  }


  .v-list-item__content.inner-content {
    padding: 0.5rem !important;
  }

  .v-list-item__content {
    padding: 0 !important;
  }
</style>
