<script setup>
const users = await $fetch('/api/users',{
  onResponseError: (err) => {
    console.error(err)
  }
})
// console.info(users)
</script>

<template>
  <v-container
    fluid
    class="bg-surface-variant fill-height"
  >
    <v-row
      align="center"
      style="height:100vh"
    >
      <v-col
        v-for="n in 15"
        :key="n"
        cols="3"
        sm="12"
        xs="12"
        md="3"
      >
        <v-sheet
          rounded="rounded"
          class="pa-4 bg-primary"
        >
          <v-card
            class="mx-auto bg-yellow"
            max-width="344"
            variant="plain"
            elevation="12"
          >
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  OVERLINE
                </div>
                <div class="text-h6 mb-1">
                  Headline
                </div>
                <div class="text-caption">
                  Greyhound divisely hello coldly fonwderfully
                </div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn variant="outlined">
                Button
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
