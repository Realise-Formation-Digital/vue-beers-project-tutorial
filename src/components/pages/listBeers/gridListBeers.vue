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
        <v-card
            class="mx-auto my-12"
            max-width="374"
            hover
        >
          <v-img
              height="250"
              :src="beer.image_url"
          ></v-img>

          <v-card-title>{{ beer.name }}</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-rating
                  :value="beer.abv"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
              ></v-rating>

              <div class="grey--text ml-4">
                {{ beer.abv }}
              </div>
            </v-row>

          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            {{ beer.tagline }}
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="selectBeer(beer)"
            >
              Show description
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>


    <!-- dialog description -->
    <v-dialog
    v-model="beerDescriptionDialog"
    width="500"
    >
    <v-card>
      <v-card-title class="headline grey lighten-2">
        {{ selectedBeer ? selectedBeer.name : ''}}
      </v-card-title>

      <v-card-text>
        {{ selectedBeer ? selectedBeer.description : ''}}
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

export default {
  name: "gridListBeers",
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
