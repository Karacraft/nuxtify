<script setup>
import { useTheme } from 'vuetify'
import itemsList from '@/data/items.json'

const drawer = ref(false)
const items = itemsList.items
const themeToggle = ref(false)

// Vuetify Stuff
const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  themeToggle.value = !themeToggle.value
}
</script>

<template>
  <v-app>
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

      <!-- Hover Menu -->
      <v-menu
        open-on-hover
      >
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
          >
            Menu
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.value"
            :href="item.value"
            nuxt
          >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Toggle button with Icons -->
      <v-tooltip
        text="Toggle Theme"
        location="bottom"
      >
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            @click="toggleTheme"
          >
            <v-icon v-if="themeToggle">
              mdi-moon-waxing-crescent
            </v-icon>
            <v-icon v-else>
              mdi-white-balance-sunny
            </v-icon>
          </v-btn>
        </template>
      </v-tooltip>
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
    >
      <!-- <v-list
        :items="items"
        density="compact"
        :href="item.value"
        nuxt
      /> -->
      <v-list-item
        v-for="item in items"
        :key="item.value"
        :href="item.value"
        nuxt
      >
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
