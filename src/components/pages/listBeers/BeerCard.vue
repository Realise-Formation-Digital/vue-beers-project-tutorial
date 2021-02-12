<template>
  <v-card
      class="mx-auto my-12"
      max-width="374"
      hover
  >
    <v-img
        height="250"
        :src="image"
    ></v-img>

    <v-card-title>{{ beerName }}</v-card-title>

    <v-card-text>
      <v-row
          align="center"
          class="mx-0"
      >
        <v-rating
            :value="abv"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
        ></v-rating>

        <div class="grey--text ml-4">
          {{ abv }}
        </div>
      </v-row>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      {{ tagline }}
    </v-card-text>

    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
      >
        Show description
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "BeerCard",
  props: {
    beerName: {
      type: String,
      required: true,
      default: ''
    },
    image: {
      type: String,
      required: true,
      default: ''
    },
    abv: {
      type: Number,
      required: true,
      default: 0
    },
    tagline: {
      type: String,
      required: true,
      default: ''
    }

  }
}
</script>

<style scoped>

</style>
