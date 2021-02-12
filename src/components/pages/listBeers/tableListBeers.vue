<template>
  <v-card>
    <v-card-title>
      <v-text-field
          v-model="searchBeer"
          append-icon="mdi-magnify"
          label="Search Beer"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="beersFetched"
        :search="searchBeer"
        :loading="isSearchingBeers"
    >
      <template v-slot:item.image_url="{ item }">
        <v-avatar>
          <img
              :src="item.image_url"
          >
        </v-avatar>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import Axios from "@/lib/axios";

export default {
  name: "tableListBeers",
  data() {
    return {
      isSearchingBeers: false,
      beersFetched: [],
      searchBeer: null,
      beerSelected: null,
      headers: [
        {
          text: 'Beer name',
          align: 'start',
          filterable: false,
          value: 'name',
        },
        {text: 'Motto', value: 'tagline'},
        {text: 'First Brewed', value: 'first_brewed'},
        {text: 'Image', value: 'image_url'},
      ],
    }
  },
  async mounted() {
    try {
      let result = []
      this.isSearchingBeers = true // for loader
      result = await Axios.get('https://api.punkapi.com/v2/beers'); // fetching beers
      this.beersFetched = result
      this.isSearchingBeers = false
    } catch (e) {
      this.isSearchingBeers = false
      console.error('[tableListBeers][mounted] an error occurred fetching beers', e)
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
