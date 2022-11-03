<script setup>
import DessertsList from '@/data/deserts.json'

const desserts = DessertsList.desserts
</script>

<template>
  <v-container
    fluid
    class="bg-surface-variant fill-height"
  >
    <v-row
      align="center"
      class="fill-height justify-center"
    >
      <v-table
        class="ma-5"
        density="compact"
        fixed-header
        height="400px"
      >
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-row>
  </v-container>
</template>
