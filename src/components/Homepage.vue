<template>
  <div class="container h-100 d-flex flex-col align-center">
    <v-row class="">
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-row>
          <v-col>
            <div
              class="text-h3 text-center text-light-blue-darken-4 font-weight-thin mb-15"
            >
              What data are you looking for?
            </div>
            <div
              class="text-subtitle-1 text-center text-white font-weight-bold mb-6"
            >
              Start by Keyword
            </div>
            <v-text-field
              label="Type Keyword"
              prepend-inner-icon="mdi:mdi-magnify"
              append-inner-icon="mdi:mdi-close-thick"
              variant="solo"
            ></v-text-field>
            <div
              class="text-subtitle-1 text-center text-white font-weight-bold mb-6"
            >
              or
            </div>
            <div class="d-flex align-center justify-center">
              <v-btn x-small color="teal-lighten-2">
                Set Search Criteria
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-15">
          <v-col>
            <div class="text-body-2 text-center mb-6 text-light-blue-darken-4">
              You are not looking for something special
            </div>
            <div class="d-flex align-center justify-center">
              <v-btn variant="text">Show All Data</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </div>
</template>
<script></script>
<style scoped>
.container {
  background-image: linear-gradient(#427fed, #4cd9ed);
}

.v-btn {
  color: #fff !important;
}

.search-field {
  display: flex;
  align-items: center;
}
</style>
