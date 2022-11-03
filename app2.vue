<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="accent"
        prominent
      >
        <v-app-bar-nav-icon
          variant="text"
          mobile:true
          class="hidden-sm-and-up"
          @click.stop="drawer = !drawer"
        />

        <v-toolbar-title>
          <app-logo style="height:32px;" />
        </v-toolbar-title>

        <v-spacer />

        <v-btn
          variant="text"
          icon="mdi-magnify"
        />

        <v-btn
          variant="text"
          icon="mdi-filter"
        />

        <v-btn
          variant="text"
          icon="mdi-dots-vertical"
        />
        <v-btn
          variant="elevated"
          class="hidden-sm-and-down"
          color="success"
        >
          Hello
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list
          :items="items"
        />
      </v-navigation-drawer>

      <v-main>
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>

        <v-input
          append-icon="mdi-magnify"
          label="Maginifcation"
        />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo'
      },
      {
        title: 'Bar',
        value: 'bar'
      },
      {
        title: 'Fizz',
        value: 'fizz'
      },
      {
        title: 'Buzz',
        value: 'buzz'
      }
    ]
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
