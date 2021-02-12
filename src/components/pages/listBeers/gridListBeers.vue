<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-title>Beers Grid</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(beer, index) in beersFetched" cols="3" :key="index">
        <!-- loop -->
        <BeerCard
          :beer-name="beer.name"
          :image="beer.image_url"
          :abv="beer.abv"
          :tagline="beer.tagline"
        />
      </v-col>
    </v-row>


    <!-- dialog description -->
    <v-dialog
        v-model="beerDescriptionDialog"
        width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ selectedBeer ? selectedBeer.name : '' }}
        </v-card-title>

        <v-card-text>
          {{ selectedBeer ? selectedBeer.description : '' }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="hideDescription()"
          >
            Thank you!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Axios from "@/lib/axios";
import BeerCard from "@/components/pages/listBeers/BeerCard";
export default {
  name: "gridListBeers",
  components: {BeerCard},
  data() {
    return {
      isSearchingBeers: false,
      beersFetched: [],
      searchBeer: null,
      selectedBeer: null,
      beerDescriptionDialog: false
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
  methods: {

    selectBeer(beer) {
      this.selectedBeer = beer //select beer first, then open the dialog
      this.showDescription()
    },

    showDescription() {
      this.beerDescriptionDialog = true
    },

    hideDescription() {
      this.selectedBeer = false
      this.beerDescriptionDialog = false
    }
  }
}
</script>

<style scoped>

</style>
